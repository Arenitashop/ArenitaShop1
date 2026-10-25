'use client'

import React, { useState, useEffect, useRef } from 'react'

interface Message {
  role: 'user' | 'model'
  text: string
  time?: string
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'chat' | 'vision' | 'text'>('chat')
  const [apiKey, setApiKey] = useState('')
  const [showKeyInput, setShowKeyInput] = useState(false)

  // Chat tab state
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      text: '¡Hola! 🌊 Soy **Arenita AI**, el Cerebro Inteligente de la tienda impulsado por **Google Gemini API**. ¿En qué te puedo ayudar hoy? Puedo recomendarte artículos, buscar chollos o darte consejos para vender rápido.',
      time: 'Ahora',
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isChatLoading, setIsChatLoading] = useState(false)
  const chatBottomRef = useRef<HTMLDivElement>(null)

  // Vision tab state
  const [visionImage, setVisionImage] = useState<string | null>(null)
  const [visionMimeType, setVisionMimeType] = useState('image/jpeg')
  const [visionResult, setVisionResult] = useState<any | null>(null)
  const [isVisionLoading, setIsVisionLoading] = useState(false)
  const [visionPrompt, setVisionPrompt] = useState('')

  // Text analysis tab state
  const [analysisText, setAnalysisText] = useState('')
  const [analysisPrice, setAnalysisPrice] = useState('')
  const [analysisResult, setAnalysisResult] = useState<any | null>(null)
  const [isAnalysisLoading, setIsAnalysisLoading] = useState(false)

  // Cargar clave guardada del localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('arenita_gemini_key')
      if (stored) setApiKey(stored)
    }
  }, [])

  // Auto-scroll en el chat
  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, activeTab])

  const saveApiKey = (key: string) => {
    setApiKey(key)
    if (typeof window !== 'undefined') {
      if (key) {
        localStorage.setItem('arenita_gemini_key', key)
      } else {
        localStorage.removeItem('arenita_gemini_key')
      }
    }
    setShowKeyInput(false)
  }

  // Enviar mensaje de chat
  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage
    if (!textToSend.trim() || isChatLoading) return

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const newMessages: Message[] = [...messages, { role: 'user', text: textToSend, time: now }]
    setMessages(newMessages)
    setInputMessage('')
    setIsChatLoading(true)

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'chat',
          message: textToSend,
          apiKey: apiKey || undefined,
          history: messages.slice(-6).map((m) => ({ role: m.role, text: m.text })),
        }),
      })

      const data = await res.json()
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Error en la respuesta del asistente.')
      }

      setMessages([
        ...newMessages,
        {
          role: 'model',
          text: data.reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
    } catch (err: any) {
      setMessages([
        ...newMessages,
        {
          role: 'model',
          text: `⚠️ **Aviso del Cerebro IA**: ${err.message || 'No se pudo contactar a Gemini API'}. Recuerda configurar tu API Key de Google AI Studio si aún no está activa.`,
          time: 'Error',
        },
      ])
    } finally {
      setIsChatLoading(false)
    }
  }

  // Manejar imagen para visión
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setVisionMimeType(file.type || 'image/jpeg')
    const reader = new FileReader()
    reader.onload = (event) => {
      setVisionImage(event.target?.result as string)
      setVisionResult(null)
    }
    reader.readAsDataURL(file)
  }

  // Ejecutar análisis de visión
  const handleRunVision = async () => {
    if (!visionImage || isVisionLoading) return
    setIsVisionLoading(true)
    setVisionResult(null)

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'generate-product',
          prompt: visionPrompt || 'Identifica el producto en esta imagen, estado y precio estimado de venta',
          imageBase64: visionImage,
          mimeType: visionMimeType,
          apiKey: apiKey || undefined,
        }),
      })

      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error || 'Error analizando imagen')

      setVisionResult(data.data)
    } catch (err: any) {
      alert(`Error con Google Gemini Vision: ${err.message}`)
    } finally {
      setIsVisionLoading(false)
    }
  }

  // Ejecutar análisis de texto
  const handleRunTextAnalysis = async () => {
    if (!analysisText.trim() || isAnalysisLoading) return
    setIsAnalysisLoading(true)
    setAnalysisResult(null)

    try {
      const res = await fetch('/api/gemini', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'analyze-product',
          title: analysisText,
          description: analysisText,
          price: analysisPrice ? parseFloat(analysisPrice) : 25,
          condition: 'Usado',
          apiKey: apiKey || undefined,
        }),
      })

      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error || 'Error analizando texto')

      setAnalysisResult(data.data)
    } catch (err: any) {
      alert(`Error en análisis de texto: ${err.message}`)
    } finally {
      setIsAnalysisLoading(false)
    }
  }

  return (
    <>
      {/* Botón flotante siempre visible (en esquina inferior izquierda para no tapar el botón Publicar) */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir Cerebro Inteligente Arenita IA"
        className="fixed bottom-24 left-5 z-[60] flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary via-primary-container to-secondary text-white rounded-full shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/60 group"
      >
        <span className="text-xl animate-pulse">🧠</span>
        <span className="font-bold text-xs tracking-wide uppercase pr-1 hidden sm:inline">Arenita IA</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
      </button>

      {/* Modal / Panel del Cerebro Inteligente */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#fff8f6] border border-border w-full max-w-lg h-[88vh] max-h-[720px] rounded-3xl shadow-2xl flex flex-col overflow-hidden text-foreground">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#a43c12] via-[#ff7f50] to-[#00629e] p-4 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl border border-white/30 shadow-inner">
                  🧠
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-black text-base tracking-tight">Cerebro Inteligente</h2>
                    <span className="bg-white/25 text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border border-white/30">
                      Gemini API
                    </span>
                  </div>
                  <p className="text-[11px] text-white/80 font-medium">Google AI Studio • ArenitaShop IA</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowKeyInput(!showKeyInput)}
                  title="Configurar Google AI Studio API Key"
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-xs font-bold transition-colors"
                >
                  🔑
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-sm font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Configuración rápida de API Key si se necesita */}
            {showKeyInput && (
              <div className="bg-surface-container p-3 border-b border-border text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-foreground flex items-center gap-1">
                    🔑 Google AI Studio API Key
                  </span>
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary underline font-semibold"
                  >
                    Obtener gratis aquí ↗
                  </a>
                </div>
                <div className="flex gap-2">
                  <input
                    type="password"
                    placeholder="AIzaSy... (o usa GEMINI_API_KEY en .env)"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-xl border border-border bg-white text-xs outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    onClick={() => saveApiKey(apiKey)}
                    className="px-3 py-1.5 bg-primary text-white font-bold rounded-xl active:scale-95 text-xs"
                  >
                    Guardar
                  </button>
                </div>
                <p className="text-[10px] text-foreground/60 mt-1">
                  Se guarda en tu navegador y también funciona con la variable de entorno <code className="bg-white px-1 py-0.5 rounded">GEMINI_API_KEY</code>.
                </p>
              </div>
            )}

            {/* Pestañas de funciones requeridas: Asistencia, Visión, Análisis */}
            <div className="grid grid-cols-3 bg-surface-dim/50 p-1 border-b border-border text-xs font-bold">
              <button
                onClick={() => setActiveTab('chat')}
                className={`py-2 rounded-2xl flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'chat'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                <span>💬</span>
                <span>Asistencia</span>
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`py-2 rounded-2xl flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'vision'
                    ? 'bg-white text-secondary shadow-sm'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                <span>📸</span>
                <span>Visión IA</span>
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`py-2 rounded-2xl flex items-center justify-center gap-1.5 transition-all ${
                  activeTab === 'text'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                <span>📝</span>
                <span>Análisis</span>
              </button>
            </div>

            {/* CONTENIDO: 1. ASISTENCIA (Chatbot) */}
            {activeTab === 'chat' && (
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col ${
                        m.role === 'user' ? 'items-end' : 'items-start'
                      }`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                          m.role === 'user'
                            ? 'bg-primary text-white rounded-br-none shadow-sm'
                            : 'bg-white border border-border/80 text-foreground rounded-bl-none shadow-sm'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{m.text}</div>
                      </div>
                      {m.time && (
                        <span className="text-[10px] text-foreground/40 mt-1 px-1">{m.time}</span>
                      )}
                    </div>
                  ))}
                  {isChatLoading && (
                    <div className="flex items-center gap-2 text-foreground/50 text-xs py-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                      <span>Arenita AI está pensando con Gemini...</span>
                    </div>
                  )}
                  <div ref={chatBottomRef} />
                </div>

                {/* Chips de sugerencias rápidas */}
                <div className="px-3 py-1.5 flex gap-1.5 overflow-x-auto no-scrollbar border-t border-border/50 bg-surface/40">
                  <button
                    onClick={() => handleSendMessage('¿Qué productos me recomiendas hoy?')}
                    className="text-[11px] whitespace-nowrap bg-white border border-border px-3 py-1 rounded-full hover:bg-surface-dim font-medium"
                  >
                    🛍️ Recomiéndame algo
                  </button>
                  <button
                    onClick={() => handleSendMessage('¿Cómo puedo vender más rápido un artículo?')}
                    className="text-[11px] whitespace-nowrap bg-white border border-border px-3 py-1 rounded-full hover:bg-surface-dim font-medium"
                  >
                    💡 Consejos para vender
                  </button>
                  <button
                    onClick={() => handleSendMessage('¿Cómo funciona el Cerebro Inteligente con Gemini en ArenitaShop?')}
                    className="text-[11px] whitespace-nowrap bg-white border border-border px-3 py-1 rounded-full hover:bg-surface-dim font-medium"
                  >
                    🧠 Explicar integración IA
                  </button>
                </div>

                {/* Input de mensaje */}
                <div className="p-3 bg-white border-t border-border flex items-center gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Pregúntale a Arenita AI sobre productos o ventas..."
                    className="flex-1 bg-surface-dim px-4 py-2.5 rounded-2xl text-xs sm:text-sm outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={isChatLoading || !inputMessage.trim()}
                    className="w-10 h-10 rounded-2xl bg-primary text-white flex items-center justify-center font-bold disabled:opacity-40 active:scale-95 transition-transform"
                  >
                    ➤
                  </button>
                </div>
              </div>
            )}

            {/* CONTENIDO: 2. VISIÓN IA (Multimodal) */}
            {activeTab === 'vision' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-3 text-xs text-secondary">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <span>👁️ Visión Multimodal con Gemini</span>
                  </div>
                  Sube la foto de cualquier objeto y el modelo multimodal de Google AI Studio lo identificará, estimará su precio y redactará su ficha técnica.
                </div>

                {/* Selector de Imagen */}
                <div className="border-2 border-dashed border-border rounded-2xl p-4 text-center bg-white">
                  {visionImage ? (
                    <div className="relative inline-block max-w-full">
                      <img
                        src={visionImage}
                        alt="Preview"
                        className="max-h-48 rounded-xl object-contain mx-auto shadow-md"
                      />
                      <button
                        onClick={() => {
                          setVisionImage(null)
                          setVisionResult(null)
                        }}
                        className="absolute -top-2 -right-2 bg-error text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer flex flex-col items-center justify-center py-6">
                      <span className="text-4xl mb-2">📸</span>
                      <span className="font-bold text-sm text-foreground">Seleccionar o tomar foto</span>
                      <span className="text-xs text-foreground/50 mt-1">Soporta JPG, PNG, WEBP</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {visionImage && (
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Instrucción adicional (opcional, ej. 'enfócate en el modelo y marca')"
                      value={visionPrompt}
                      onChange={(e) => setVisionPrompt(e.target.value)}
                      className="w-full bg-white border border-border px-3 py-2 rounded-xl text-xs outline-none"
                    />

                    <button
                      onClick={handleRunVision}
                      disabled={isVisionLoading}
                      className="w-full py-3 bg-gradient-to-r from-secondary to-primary-container text-white font-bold text-xs rounded-xl shadow-md active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                    >
                      {isVisionLoading ? (
                        <>
                          <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          <span>Analizando píxeles con Gemini Vision...</span>
                        </>
                      ) : (
                        <>
                          <span>✨</span>
                          <span>Analizar Objeto con Gemini Vision</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Resultado de la Visión */}
                {visionResult && (
                  <div className="bg-white border border-border rounded-2xl p-4 shadow-sm space-y-3 animate-in fade-in">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">
                          Producto Identificado
                        </span>
                        <h3 className="font-extrabold text-base text-foreground">{visionResult.title}</h3>
                      </div>
                      <div className="bg-emerald-50 text-emerald-700 font-extrabold text-sm px-2.5 py-1 rounded-xl border border-emerald-200">
                        {visionResult.suggestedPrice} €
                      </div>
                    </div>

                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-0.5 bg-surface-dim rounded-md font-semibold">
                        📂 {visionResult.category}
                      </span>
                      <span className="px-2 py-0.5 bg-surface-dim rounded-md font-semibold">
                        🏷️ {visionResult.condition}
                      </span>
                    </div>

                    <div className="text-xs text-foreground/80 leading-relaxed bg-surface-container/30 p-2.5 rounded-xl border border-border/50">
                      <strong className="block text-foreground font-bold mb-1">Descripción generada:</strong>
                      {visionResult.description}
                    </div>

                    {visionResult.reasoning && (
                      <p className="text-[11px] text-foreground/60 italic">
                        💡 Veredicto IA: {visionResult.reasoning}
                      </p>
                    )}

                    <a
                      href={`/publish?prefillTitle=${encodeURIComponent(visionResult.title)}&prefillPrice=${visionResult.suggestedPrice}&prefillDesc=${encodeURIComponent(visionResult.description)}&prefillCat=${encodeURIComponent(visionResult.category)}&prefillCond=${encodeURIComponent(visionResult.condition)}`}
                      className="block text-center py-2 bg-primary text-white font-bold text-xs rounded-xl shadow active:scale-95 transition-transform"
                    >
                      🚀 Usar datos para Publicar en ArenitaShop
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* CONTENIDO: 3. ANÁLISIS DE TEXTO */}
            {activeTab === 'text' && (
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-3 text-xs text-primary">
                  <div className="flex items-center gap-2 font-bold mb-1">
                    <span>📝 Análisis Semántico y de Oferta</span>
                  </div>
                  Pega el texto de cualquier anuncio, oferta o descripción para que Gemini evalúe su honestidad, precio justo y puntos a tener en cuenta.
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-foreground block mb-1">
                      Título o Descripción a evaluar
                    </label>
                    <textarea
                      rows={3}
                      value={analysisText}
                      onChange={(e) => setAnalysisText(e.target.value)}
                      placeholder="Ej. iPhone 12 Pro 128GB en excelente estado con batería al 85%..."
                      className="w-full bg-white border border-border rounded-xl p-3 text-xs outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-foreground block mb-1">
                      Precio pedido (€)
                    </label>
                    <input
                      type="number"
                      value={analysisPrice}
                      onChange={(e) => setAnalysisPrice(e.target.value)}
                      placeholder="Ej. 350"
                      className="w-full bg-white border border-border rounded-xl px-3 py-2 text-xs outline-none"
                    />
                  </div>

                  <button
                    onClick={handleRunTextAnalysis}
                    disabled={isAnalysisLoading || !analysisText.trim()}
                    className="w-full py-3 bg-primary text-white font-bold text-xs rounded-xl shadow-md active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  >
                    {isAnalysisLoading ? (
                      <>
                        <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Analizando con Gemini NLP...</span>
                      </>
                    ) : (
                      <>
                        <span>🔍</span>
                        <span>Evaluar Oferta con Gemini IA</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Resultado del Análisis de Texto */}
                {analysisResult && (
                  <div className="bg-white border border-border rounded-2xl p-4 shadow-sm space-y-3 animate-in fade-in">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-sm text-foreground">
                        {analysisResult.headline}
                      </span>
                      <span
                        className={`text-xs font-black px-2.5 py-1 rounded-full uppercase ${
                          analysisResult.verdict === 'excelente'
                            ? 'bg-emerald-100 text-emerald-800'
                            : analysisResult.verdict === 'bueno'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {analysisResult.verdict} ({analysisResult.score}/10)
                      </span>
                    </div>

                    <div className="text-xs space-y-1">
                      <p className="font-bold text-emerald-600">👍 Puntos a favor:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-foreground/80">
                        {analysisResult.pros.map((p: string, i: number) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-xs space-y-1">
                      <p className="font-bold text-amber-600">⚠️ Puntos a verificar:</p>
                      <ul className="list-disc pl-4 space-y-0.5 text-foreground/80">
                        {analysisResult.cons.map((c: string, i: number) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-surface-dim/40 p-2.5 rounded-xl text-xs border border-border">
                      <span className="font-bold block text-foreground">💡 Consejo al comprador:</span>
                      <span className="text-foreground/80">{analysisResult.buyerAdvice}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
