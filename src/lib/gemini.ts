/**
 * Google AI Studio (Gemini API) Integration
 * Cerebro Inteligente (IA) para ArenitaShop
 * Soporta:
 * - Análisis de texto
 * - Visión (análisis multimodal con imágenes)
 * - Generación de datos (títulos, descripciones, categorías, precios)
 * - Asistencia conversacional de compras
 */

export interface GeminiMessagePart {
  text?: string
  inlineData?: {
    mimeType: string
    data: string // Base64 encoded string
  }
}

export interface GeminiContent {
  role?: 'user' | 'model'
  parts: GeminiMessagePart[]
}

export interface GenerateProductResult {
  title: string
  description: string
  category: string
  condition: string
  suggestedPrice: number
  location?: string
  tags: string[]
  reasoning?: string
}

export interface AnalyzeProductResult {
  verdict: 'excelente' | 'bueno' | 'regular' | 'cautela'
  score: number // 1 a 10
  headline: string
  pros: string[]
  cons: string[]
  buyerAdvice: string
  fairPriceEstimate: string
}

const PRIMARY_MODEL = 'gemini-2.0-flash'
const FALLBACK_MODEL = 'gemini-1.5-flash'

/**
 * Obtiene la API Key de Gemini desde los parámetros o variables de entorno
 */
export function getGeminiApiKey(customKey?: string): string | null {
  const key = customKey || process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY
  return key && key.trim().length > 0 ? key.trim() : null
}

/**
 * Llamada base a la API de Google AI Studio con soporte para reintentos y modelo de respaldo
 */
export async function callGeminiApi({
  contents,
  systemInstruction,
  apiKey,
  temperature = 0.7,
  responseSchema,
}: {
  contents: GeminiContent[]
  systemInstruction?: string
  apiKey?: string
  temperature?: number
  responseSchema?: Record<string, unknown>
}): Promise<string> {
  const resolvedKey = getGeminiApiKey(apiKey)

  if (!resolvedKey) {
    throw new Error(
      'Falta la API Key de Gemini (Google AI Studio). Configura GEMINI_API_KEY en Vercel/.env.local o ingrésala en la interfaz.'
    )
  }

  const payload: Record<string, unknown> = {
    contents,
    generationConfig: {
      temperature,
      maxOutputTokens: 1500,
    },
  }

  if (systemInstruction) {
    payload.systemInstruction = {
      parts: [{ text: systemInstruction }],
    }
  }

  if (responseSchema) {
    (payload.generationConfig as Record<string, unknown>).responseMimeType = 'application/json';
    (payload.generationConfig as Record<string, unknown>).responseSchema = responseSchema
  }

  // Intentar con modelo primario y si falla, probar con fallback
  const models = [PRIMARY_MODEL, FALLBACK_MODEL]
  let lastError: unknown = null

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${resolvedKey}`

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        const errorMessage = errorData?.error?.message || `HTTP ${response.status}: ${response.statusText}`
        throw new Error(`Google AI Studio error (${model}): ${errorMessage}`)
      }

      const data = await response.json()
      const text = data?.candidates?.[0]?.content?.parts?.[0]?.text

      if (!text) {
        throw new Error(`El modelo ${model} no generó ninguna respuesta de texto.`)
      }

      return text
    } catch (err: unknown) {
      lastError = err
      const msg = err instanceof Error ? err.message : String(err)
      console.warn(`Intento fallido con modelo ${model}:`, msg)
      // Si el error es de clave inválida, no tiene sentido reintentar con otro modelo
      if (msg.includes('API key not valid')) {
        throw err
      }
    }
  }

  throw (lastError instanceof Error ? lastError : new Error('No se pudo conectar con Google AI Studio.'))
}

/**
 * 1. GENERACIÓN DE DATOS (Cerebro Inteligente):
 * Genera ficha de producto optimizada para venta (título, descripción atractiva, categoría, estado y precio estimado).
 * Puede recibir solo texto o también una imagen para visión multimodal.
 */
export async function generateProductWithAI({
  prompt,
  imageBase64,
  mimeType = 'image/jpeg',
  apiKey,
}: {
  prompt?: string
  imageBase64?: string
  mimeType?: string
  apiKey?: string
}): Promise<GenerateProductResult> {
  const parts: GeminiMessagePart[] = []

  if (imageBase64) {
    // Limpiar header de data URL si está presente
    const cleanBase64 = imageBase64.includes(',') ? imageBase64.split(',')[1] : imageBase64
    parts.push({
      inlineData: {
        mimeType,
        data: cleanBase64,
      },
    })
  }

  const promptText = `
Eres el Cerebro Inteligente de ArenitaShop, una tienda online tipo marketplace costero y moderno.
Tu tarea es ${imageBase64 ? 'analizar la imagen del producto (visión por computadora) y ' : ''}generar una publicación comercial de alta calidad y atractiva para vender rápido.

Información proporcionada por el usuario: "${prompt || 'Analiza este producto y genera los datos'}"

Categorías válidas en ArenitaShop (debes elegir exactamente una de estas):
- Electrónica
- Ropa
- Hogar
- Vehículos
- Deportes
- Otros

Estados válidos (debes elegir exactamente una de estas):
- Nuevo
- Como nuevo
- Usado - Buen estado
- Usado - Aceptable

Devuelve ÚNICAMENTE un objeto JSON válido con la siguiente estructura exacta:
{
  "title": "Título llamativo, claro y profesional (máx 60 caracteres)",
  "description": "Descripción persuasiva, estructurada con viñetas de características clave, estado y beneficios (en español)",
  "category": "Una de las categorías válidas",
  "condition": "Uno de los estados válidos",
  "suggestedPrice": 45.00,
  "location": "Madrid, Centro",
  "tags": ["palabra1", "palabra2", "palabra3"],
  "reasoning": "Breve explicación de por qué fijaste ese precio y categoría"
}
`
  parts.push({ text: promptText })

  const systemInstruction =
    'Eres un experto en e-commerce y tasación de artículos de segunda mano y nuevos. Responde siempre en formato JSON estricto.'

  const responseText = await callGeminiApi({
    contents: [{ role: 'user', parts }],
    systemInstruction,
    apiKey,
    temperature: 0.4,
  })

  // Parsear JSON limpio
  try {
    const cleaned = responseText.replace(/```json/gi, '').replace(/```/g, '').trim()
    const parsed = JSON.parse(cleaned)
    return {
      title: parsed.title || 'Artículo en venta',
      description: parsed.description || 'Artículo disponible en ArenitaShop.',
      category: parsed.category || 'Otros',
      condition: parsed.condition || 'Usado - Buen estado',
      suggestedPrice: Number(parsed.suggestedPrice) || 25,
      location: parsed.location || 'España',
      tags: Array.isArray(parsed.tags) ? parsed.tags : [],
      reasoning: parsed.reasoning || 'Generado automáticamente por Gemini AI.',
    }
  } catch (err) {
    console.error('Error parseando JSON de Gemini:', responseText)
    throw new Error('Gemini no devolvió un formato JSON válido. Intenta nuevamente.')
  }
}

/**
 * 2. ANÁLISIS DE TEXTO / PRODUCTO:
 * Analiza un producto existente para dar al comprador una tasación inteligente, pros y contras.
 */
export async function analyzeProductListing({
  title,
  description,
  price,
  condition,
  apiKey,
}: {
  title: string
  description?: string
  price: number | string
  condition?: string
  apiKey?: string
}): Promise<AnalyzeProductResult> {
  const promptText = `
Analiza la siguiente publicación de venta en ArenitaShop y da un informe honesto para un comprador:
- Título: ${title}
- Precio actual: ${price} €
- Estado declarado: ${condition || 'No especificado'}
- Descripción: ${description || 'Sin descripción detallada'}

Devuelve ÚNICAMENTE un objeto JSON válido con este formato:
{
  "verdict": "excelente" | "bueno" | "regular" | "cautela",
  "score": 8.5,
  "headline": "Titular de 1 frase resumiendo si vale la pena o no",
  "pros": ["Punto a favor 1", "Punto a favor 2"],
  "cons": ["Punto a revisar 1", "Punto a revisar 2"],
  "buyerAdvice": "Consejo directo para el comprador antes de pagar o chatear",
  "fairPriceEstimate": "Rango estimado en € (ej: 40€ - 50€)"
}
`

  const systemInstruction =
    'Eres un perito y asistente de compras experto en marketplaces. Evalúa objetivamente la relación calidad-precio y riesgos.'

  const responseText = await callGeminiApi({
    contents: [{ role: 'user', parts: [{ text: promptText }] }],
    systemInstruction,
    apiKey,
    temperature: 0.3,
  })

  try {
    const cleaned = responseText.replace(/```json/gi, '').replace(/```/g, '').trim()
    const parsed = JSON.parse(cleaned)
    return {
      verdict: parsed.verdict || 'bueno',
      score: Number(parsed.score) || 7.5,
      headline: parsed.headline || 'Oferta revisada por Gemini AI',
      pros: Array.isArray(parsed.pros) ? parsed.pros : ['Buen precio estimado'],
      cons: Array.isArray(parsed.cons) ? parsed.cons : ['Verificar funcionamiento en persona'],
      buyerAdvice: parsed.buyerAdvice || 'Pregunta al vendedor por más fotos antes de concretar la compra.',
      fairPriceEstimate: parsed.fairPriceEstimate || `${price} €`,
    }
  } catch (err) {
    throw new Error('No se pudo analizar la publicación con IA.')
  }
}

/**
 * 3. ASISTENCIA CONVERSACIONAL (Arenita AI):
 * Chatbot inteligente de compras y recomendaciones para la tienda.
 */
export async function chatWithArenitaAI({
  message,
  history = [],
  contextProducts = [],
  apiKey,
}: {
  message: string
  history?: { role: 'user' | 'model'; text: string }[]
  contextProducts?: Record<string, unknown>[]
  apiKey?: string
}): Promise<string> {
  const productsSummary = contextProducts
    .slice(0, 10)
    .map((p) => {
      const title = String(p.title || 'Artículo')
      const price = p.price !== undefined ? String(p.price) : '0'
      const condition = p.condition ? String(p.condition) : 'N/A'
      const category = p.category ? String(p.category) : 'N/A'
      const id = p.id ? String(p.id) : ''
      return `- ${title} (${price} €, Estado: ${condition}, Categoría: ${category}, ID: ${id})`
    })
    .join('\n')

  const systemInstruction = `
Eres "Arenita AI", el Cerebro Inteligente y asistente virtual oficial de ArenitaShop (un marketplace costero, moderno y seguro tipo Temu/Wallapop).
Tu misión es guiar, asesorar y ayudar a los usuarios a encontrar los mejores chollos, resolver dudas sobre cómo publicar artículos y consejos de compra/venta.

Personalidad: Cálida, entusiasta, veraniega, muy educada, inteligente y directa. Usa emojis apropiados (🏖️, 🌊, 🐚, ✨, 🛍️).

Catálogo actual disponible en la tienda (referencia para recomendar):
${productsSummary || 'Varios artículos disponibles en el catálogo principal.'}

Reglas:
1. Responde de forma concisa y fácil de leer (máximo 2 o 3 párrafos cortos).
2. Si te preguntan qué comprar o recomendaciones, cita artículos del catálogo cuando sea relevante.
3. Si el usuario te pide consejos para vender, explícale cómo publicar fotos claras y fijar un buen precio.
4. Recuerda que la plataforma cuenta con publicación inteligente con IA y visión por computadora con Google Gemini.
`

  const contents: GeminiContent[] = []

  // Historial previo
  for (const h of history) {
    contents.push({
      role: h.role,
      parts: [{ text: h.text }],
    })
  }

  // Mensaje actual
  contents.push({
    role: 'user',
    parts: [{ text: message }],
  })

  return await callGeminiApi({
    contents,
    systemInstruction,
    apiKey,
    temperature: 0.7,
  })
}
