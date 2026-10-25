'use client'

import React, { useState, useEffect } from 'react'

export function PublishAIHelper() {
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [successInfo, setSuccessInfo] = useState<string | null>(null)
  const [errorInfo, setErrorInfo] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<string | null>(null)
  const [imageMime, setImageMime] = useState('image/jpeg')

  // Autorellenar si viene desde los parámetros de URL (ej. desde el asistente de visión)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const pTitle = params.get('prefillTitle')
    const pPrice = params.get('prefillPrice')
    const pDesc = params.get('prefillDesc')
    const pCat = params.get('prefillCat')
    const pCond = params.get('prefillCond')

    if (pTitle || pDesc || pPrice) {
      setTimeout(() => {
        applyDataToForm({
          title: pTitle || '',
          suggestedPrice: pPrice ? parseFloat(pPrice) : undefined,
          description: pDesc || '',
          category: pCat || '',
          condition: pCond || '',
        })
        setSuccessInfo('Datos transferidos automáticamente desde Gemini Vision.')
      }, 200)
    }
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setImageMime(file.type || 'image/jpeg')
    const reader = new FileReader()
    reader.onload = (event) => {
      setImageFile(event.target?.result as string)
      setSuccessInfo(null)
    }
    reader.readAsDataURL(file)
  }

  const applyDataToForm = (data: {
    title?: string
    suggestedPrice?: number
    description?: string
    category?: string
    condition?: string
  }) => {
    if (data.title) {
      const el = document.getElementById('title') as HTMLInputElement | null
      if (el) el.value = data.title
    }
    if (data.suggestedPrice !== undefined) {
      const el = document.getElementById('price') as HTMLInputElement | null
      if (el) el.value = data.suggestedPrice.toString()
    }
    if (data.description) {
      const el = document.getElementById('description') as HTMLTextAreaElement | null
      if (el) el.value = data.description
    }
    if (data.category) {
      const el = document.getElementById('category') as HTMLSelectElement | null
      if (el) el.value = data.category
    }
    if (data.condition) {
      const el = document.getElementById('condition') as HTMLSelectElement | null
      if (el) el.value = data.condition
    }
  }

  const handleGenerate = async () => {
    if (!prompt.trim() && !imageFile) {
      setErrorInfo('Escribe una idea (ej: "Bici de carreras roja poco uso") o sube una foto.')
      return
    }

    setIsLoading(true)
    setErrorInfo(null)
    setSuccessInfo(null)

    try {
      const storedKey = typeof window !== 'undefined' ? localStorage.getItem('arenita_gemini_key') : null

      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate-product',
          prompt: prompt || 'Analiza esta imagen y redacta los datos del producto para venta',
          imageBase64: imageFile || undefined,
          mimeType: imageMime,
          apiKey: storedKey || undefined,
        }),
      })

      const result = await res.json()
      if (!res.ok || result.error) {
        throw new Error(result.error || 'Error al generar la publicación')
      }

      const p = result.data
      applyDataToForm(p)
      setSuccessInfo(
        `¡Ficha generada con éxito por Google Gemini! Título, precio sugerido (${p.suggestedPrice} €), categoría (${p.category}) y descripción han sido completados.`
      )
    } catch (err: any) {
      setErrorInfo(err.message || 'No se pudo conectar con Gemini API.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mb-6 bg-gradient-to-br from-primary/10 via-primary-container/15 to-secondary/10 border-2 border-primary-container/40 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl animate-pulse">🧠</span>
          <div>
            <h3 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
              Cerebro Inteligente (IA)
              <span className="bg-primary text-white text-[9px] uppercase px-1.5 py-0.5 rounded-full font-bold">
                Gemini
              </span>
            </h3>
            <p className="text-[11px] text-foreground/60">
              Google AI Studio: Visión, Generación de Datos y Análisis
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 mt-3">
        <div>
          <label className="text-xs font-bold text-foreground block mb-1">
            ¿Qué vas a vender? (Solo escribe una idea breve o palabras clave):
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ej. Taladro Bosch con batería y maletín, poco uso"
              className="flex-1 bg-white border border-border px-3 py-2 rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary/40 text-foreground"
            />
          </div>
        </div>

        {/* Carga opcional de foto para Gemini Vision */}
        <div className="flex items-center justify-between bg-white/70 p-2 rounded-xl border border-border/60">
          <label className="cursor-pointer flex items-center gap-2 text-xs font-semibold text-secondary hover:underline">
            <span>📸</span>
            <span>{imageFile ? 'Foto cargada para Visión IA ✓' : 'Analizar foto con Visión IA (opcional)'}</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          {imageFile && (
            <button
              onClick={() => setImageFile(null)}
              className="text-[10px] text-error font-bold hover:underline"
            >
              Quitar
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={isLoading}
          className="w-full py-2.5 bg-gradient-to-r from-primary to-primary-container text-white font-bold text-xs rounded-xl shadow-md active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Cerebro Gemini redactando y tasando producto...</span>
            </>
          ) : (
            <>
              <span>✨</span>
              <span>Autocompletar Formulario con Gemini IA</span>
            </>
          )}
        </button>

        {successInfo && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs p-2.5 rounded-xl font-medium animate-in fade-in">
            ✅ {successInfo}
          </div>
        )}

        {errorInfo && (
          <div className="bg-red-50 border border-red-300 text-red-700 text-xs p-2.5 rounded-xl font-medium animate-in fade-in">
            ⚠️ {errorInfo}
          </div>
        )}
      </div>
    </div>
  )
}
