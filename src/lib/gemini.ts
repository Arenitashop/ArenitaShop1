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

// Modelo activo en caché para optimizar llamadas consecutivas
let cachedWorkingModel: string | null = null

/**
 * Limpia y sanitiza la salida de la IA para eliminar pensamientos internos,
 * borradores (*Draft:*), notas de rol o autocríticas.
 */
export function cleanOutputText(raw: string): string {
  let cleaned = raw.trim()

  // 1. Eliminar bloques <thought>...</thought>
  cleaned = cleaned.replace(/<thought>[\s\S]*?<\/thought>/gi, '')

  // 2. Si el modelo imprimió borradores internos tipo *Draft:* o Draft:
  if (/(\*Draft:\*|Draft:)/i.test(cleaned)) {
    const parts = cleaned.split(/(\*Draft:\*|Draft:)/i)
    if (parts.length >= 3) {
      cleaned = parts.slice(2).join('').trim()
    }
  }

  // 3. Eliminar autocríticas finales como *(Self-correction: ...)* o (Self-correction: ...)
  cleaned = cleaned.replace(/\*?\s*\(Self-correction:[\s\S]*?\)\s*\*?/gi, '')

  // 4. Eliminar notas en inglés de rol que se hayan colado al inicio
  cleaned = cleaned.replace(/^[^\n]*\(Warm,\s*enthusiastic[^\n]*\)/i, '')
  cleaned = cleaned.replace(/The prompt says[\s\S]*?\*Draft:\*/i, '')
  cleaned = cleaned.replace(/^\s*\*\s*Option\s+[A-Z][\s\S]*?(¡|Hola|¿)/i, '$1')

  // 5. Eliminar comillas dobles si envolvieron toda la respuesta
  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    cleaned = cleaned.slice(1, -1).trim()
  }

  return cleaned.trim()
}

/**
 * Obtiene la API Key de Gemini desde los parámetros o variables de entorno
 */
export function getGeminiApiKey(customKey?: string): string | null {
  const key = customKey || process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY
  return key && key.trim().length > 0 ? key.trim() : null
}

/**
 * Consulta la lista oficial de modelos disponibles para la API Key dada (ModelService.ListModels)
 * para evitar errores 404 por modelos no encontrados o deprecados.
 */
export async function discoverAvailableModels(apiKey: string): Promise<string[]> {
  try {
    const listUrl = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    const response = await fetch(listUrl, {
      method: 'GET',
      headers: {
        'x-goog-api-key': apiKey,
      },
    })

    if (response.ok) {
      const data = await response.json()
      if (Array.isArray(data?.models)) {
        const available = data.models
          .filter((m: { supportedGenerationMethods?: string[] }) =>
            m.supportedGenerationMethods?.includes('generateContent')
          )
          .map((m: { name: string }) => m.name.replace(/^models\//, ''))

        if (available.length > 0) {
          // Ordenar priorizando modelos rápidos y modernos (flash)
          const preference = [
            'gemini-2.5-flash',
            'gemini-2.0-flash',
            'gemini-2.0-flash-exp',
            'gemini-1.5-flash-latest',
            'gemini-2.5-flash-lite',
            'gemini-1.5-flash',
            'gemini-1.5-flash-8b',
            'gemini-2.5-pro',
            'gemini-1.5-pro',
          ]

          const sorted = [
            ...preference.filter((p) => available.includes(p)),
            ...available.filter((a: string) => !preference.includes(a)),
          ]
          return sorted
        }
      }
    }
  } catch (err) {
    console.warn('No se pudo autodescubrir modelos de Gemini:', err)
  }

  // Lista de fallback si la llamada a ListModels falla
  return [
    'gemini-2.5-flash',
    'gemini-2.0-flash',
    'gemini-2.0-flash-exp',
    'gemini-1.5-flash-latest',
    'gemini-2.5-flash-lite',
    'gemini-1.5-flash',
    'gemini-1.5-flash-8b',
    'gemini-2.5-pro',
    'gemini-1.5-pro',
  ]
}

/**
 * Llamada base a la API de Google AI Studio con soporte dinámico de modelos y autodescubrimiento
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
      'Falta la API Key de Gemini (Google AI Studio). Configura GEMINI_API_KEY en Vercel/.env.local o ingrésala en la interfaz pulsando el icono 🔑.'
    )
  }

  // Obtener lista de modelos que la API Key efectivamente soporta
  const candidateModels = await discoverAvailableModels(resolvedKey)
  const orderedModels = cachedWorkingModel
    ? [cachedWorkingModel, ...candidateModels.filter((m) => m !== cachedWorkingModel)]
    : candidateModels

  let lastError: unknown = null

  // Probamos los modelos disponibles
  for (const model of orderedModels) {
    for (const apiVersion of ['v1beta', 'v1']) {
      try {
        let finalContents = contents
        const payload: Record<string, unknown> = {
          contents: finalContents,
          generationConfig: {
            temperature,
            maxOutputTokens: 1500,
          },
        }

        if (systemInstruction) {
          if (apiVersion === 'v1beta') {
            payload.systemInstruction = {
              parts: [{ text: systemInstruction }],
            }
          } else {
            // En v1 se inyecta como primer mensaje de contexto
            finalContents = [
              {
                role: 'user',
                parts: [{ text: `[Instrucción de sistema]: ${systemInstruction}` }],
              },
              ...contents,
            ]
            payload.contents = finalContents
          }
        }

        if (responseSchema && apiVersion === 'v1beta') {
          (payload.generationConfig as Record<string, unknown>).responseMimeType = 'application/json';
          (payload.generationConfig as Record<string, unknown>).responseSchema = responseSchema
        }

        const url = `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}:generateContent?key=${resolvedKey}`

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': resolvedKey,
          },
          body: JSON.stringify(payload),
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          const errorMessage =
            errorData?.error?.message || `HTTP ${response.status}: ${response.statusText}`

          // Si la API key es inválida, detener de inmediato con mensaje claro
          if (
            errorMessage.includes('API key not valid') ||
            errorMessage.includes('API_KEY_INVALID')
          ) {
            throw new Error('API Key de Google AI Studio inválida. Verifica tu clave en https://aistudio.google.com/app/apikey')
          }

          throw new Error(`(${apiVersion}/${model}): ${errorMessage}`)
        }

        const data = await response.json()
        const parts = (data?.candidates?.[0]?.content?.parts || []) as Array<{
          text?: string
          thought?: boolean
        }>

        // Filtrar partes que sean pensamiento interno ('thought: true')
        const nonThoughtParts = parts.filter((p) => !p.thought && p.text)
        let rawText = ''

        if (nonThoughtParts.length > 0) {
          rawText = nonThoughtParts.map((p) => p.text).join('\n')
        } else if (parts.length > 0) {
          rawText = parts[parts.length - 1]?.text || ''
        }

        if (!rawText.trim()) {
          throw new Error(`El modelo ${model} no generó ninguna respuesta de texto.`)
        }

        const text = cleanOutputText(rawText)

        // Modelo verificado con éxito, lo guardamos en caché
        cachedWorkingModel = model
        return text
      } catch (err: unknown) {
        lastError = err
        const msg = err instanceof Error ? err.message : String(err)
        console.warn(`Intento con ${apiVersion}/${model}:`, msg)
        if (msg.includes('API Key de Google AI Studio inválida')) {
          throw err
        }
      }
    }
  }

  throw (
    lastError instanceof Error
      ? lastError
      : new Error('No se pudo conectar con los modelos disponibles de Google AI Studio. Verifica tu API Key.')
  )
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
    'Eres un experto en e-commerce y tasación de artículos de segunda mano y nuevos. Responde siempre en formato JSON estricto sin markdown extra.'

  const responseText = await callGeminiApi({
    contents: [{ role: 'user', parts }],
    systemInstruction,
    apiKey,
    temperature: 0.4,
  })

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
  } catch {
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
    'Eres un perito y asistente de compras experto en marketplaces. Evalúa objetivamente la relación calidad-precio y riesgos. Responde en JSON estricto.'

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
  } catch {
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
  const productsSummary = contextProducts.length > 0
    ? contextProducts
        .slice(0, 10)
        .map((p) => {
          const title = String(p.title || 'Artículo')
          const price = p.price !== undefined ? `${p.price} €` : 'Consultar precio'
          const condition = p.condition ? String(p.condition) : 'Buen estado'
          return `- ${title} (${price}, Estado: ${condition})`
        })
        .join('\n')
    : 'Artículos variados de electrónica, moda, deportes y hogar en el catálogo.'

  const systemInstruction = `
Eres "Arenita AI", el Cerebro Inteligente y asistente de compras de ArenitaShop (un marketplace costero, alegre, moderno y seguro tipo Temu/Wallapop).
Tu misión es aconsejar y ayudar a los usuarios a encontrar los mejores chollos, recomendar artículos y dar tips de compra y venta.

Personalidad: Cálida, entusiasta, veraniega, muy educada, inteligente y directa. Usa emojis costeros (🏖️, 🌊, 🐚, ✨, 🛍️).

Catálogo disponible en la tienda actualmente:
${productsSummary}

REGLAS ESTRICTAS DE RESPUESTA:
1. Responde SIEMPRE 100% en español directamente al usuario.
2. PROHIBIDO terminantemente escribir en inglés, volcar pensamientos internos, hacer listas de opciones A/B/C, poner borradores (*Draft:*), notas de rol o autocríticas como (Self-correction).
3. Tu respuesta debe ser limpia, natural y comenzar directamente con tu saludo o respuesta (máximo 2 o 3 párrafos cortos y amigables).
4. Si te piden recomendaciones, sugiere artículos reales del catálogo de arriba o categorías veraniegas atractivas.
`

  const contents: GeminiContent[] = []

  for (const h of history) {
    contents.push({
      role: h.role,
      parts: [{ text: h.text }],
    })
  }

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
