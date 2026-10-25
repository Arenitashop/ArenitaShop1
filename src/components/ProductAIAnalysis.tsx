'use client'

import React, { useState } from 'react'

export function ProductAIAnalysis({
  title,
  price,
  condition,
  description,
}: {
  title: string
  price: number | string
  condition?: string
  description?: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [analysis, setAnalysis] = useState<any | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (analysis) {
      setIsOpen(!isOpen)
      return
    }

    setIsLoading(true)
    setError(null)
    setIsOpen(true)

    try {
      const storedKey = typeof window !== 'undefined' ? localStorage.getItem('arenita_gemini_key') : null

      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'analyze-product',
          title,
          price,
          condition,
          description,
          apiKey: storedKey || undefined,
        }),
      })

      const data = await res.json()
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Error al analizar la oferta con IA')
      }

      setAnalysis(data.data)
    } catch (err: any) {
      setError(err.message || 'No se pudo completar el análisis.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="mb-6 bg-gradient-to-br from-primary/5 via-surface-container to-secondary/5 border border-primary-container/30 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="text-2xl animate-pulse">🧠</span>
          <div>
            <h3 className="font-extrabold text-sm text-foreground flex items-center gap-1.5">
              Cerebro Inteligente (IA)
              <span className="bg-primary text-white text-[9px] uppercase px-1.5 py-0.5 rounded-full font-bold">
                Gemini
              </span>
            </h3>
            <p className="text-[11px] text-foreground/60">
              Análisis de texto, precio justo y recomendaciones de compra
            </p>
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          disabled={isLoading}
          className="px-3.5 py-2 bg-gradient-to-r from-primary to-primary-container text-white font-bold text-xs rounded-xl shadow active:scale-95 disabled:opacity-50 transition-all flex items-center gap-1.5"
        >
          {isLoading ? (
            <>
              <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Analizando...</span>
            </>
          ) : (
            <>
              <span>✨</span>
              <span>{analysis ? (isOpen ? 'Ocultar' : 'Ver análisis') : 'Analizar oferta'}</span>
            </>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-border/60 animate-in fade-in space-y-3">
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-xl text-xs border border-red-200">
              ⚠️ {error}
            </div>
          )}

          {analysis && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                    Veredicto de la IA
                  </span>
                  <h4 className="font-extrabold text-sm text-foreground">{analysis.headline}</h4>
                </div>
                <div
                  className={`text-xs font-black px-2.5 py-1 rounded-xl uppercase ${
                    analysis.verdict === 'excelente'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : analysis.verdict === 'bueno'
                      ? 'bg-blue-100 text-blue-800 border border-blue-300'
                      : 'bg-amber-100 text-amber-800 border border-amber-300'
                  }`}
                >
                  {analysis.verdict} ({analysis.score}/10)
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200">
                  <p className="font-bold text-emerald-800 mb-1">👍 Puntos a favor:</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-emerald-950/80">
                    {analysis.pros?.map((p: string, i: number) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50/80 p-2.5 rounded-xl border border-amber-200">
                  <p className="font-bold text-amber-800 mb-1">⚠️ A tener en cuenta:</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-amber-950/80">
                    {analysis.cons?.map((c: string, i: number) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-border text-xs leading-relaxed">
                <span className="font-bold text-foreground block mb-0.5">
                  💡 Recomendación al comprador:
                </span>
                <span className="text-foreground/80">{analysis.buyerAdvice}</span>
                <div className="mt-2 text-[11px] font-semibold text-foreground/60 flex items-center gap-1.5">
                  <span>💰 Rango de precio justo estimado:</span>
                  <span className="text-primary font-bold">{analysis.fairPriceEstimate}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
