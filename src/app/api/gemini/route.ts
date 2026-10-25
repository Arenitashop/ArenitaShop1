import { NextResponse } from 'next/server'
import {
  generateProductWithAI,
  analyzeProductListing,
  chatWithArenitaAI,
} from '@/lib/gemini'
import { createClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { action, apiKey } = body

    if (!action) {
      return NextResponse.json(
        { error: 'Parámetro "action" requerido.' },
        { status: 400 }
      )
    }

    // 1. GENERACIÓN DE DATOS (Visión y Texto para Publicar)
    if (action === 'generate-product') {
      const { prompt, imageBase64, mimeType } = body
      const productData = await generateProductWithAI({
        prompt,
        imageBase64,
        mimeType,
        apiKey,
      })
      return NextResponse.json({ success: true, data: productData })
    }

    // 2. ANÁLISIS DE TEXTO / PUBLICACIÓN
    if (action === 'analyze-product') {
      const { title, description, price, condition } = body
      if (!title) {
        return NextResponse.json(
          { error: 'El título del producto es requerido para el análisis.' },
          { status: 400 }
        )
      }
      const analysis = await analyzeProductListing({
        title,
        description,
        price: price || 0,
        condition,
        apiKey,
      })
      return NextResponse.json({ success: true, data: analysis })
    }

    // 3. ASISTENCIA CONVERSACIONAL (Arenita AI)
    if (action === 'chat') {
      const { message, history } = body
      if (!message) {
        return NextResponse.json(
          { error: 'El mensaje es requerido.' },
          { status: 400 }
        )
      }

      // Obtener productos reales de la tienda para que la IA sepa qué hay disponible
      let contextProducts: any[] = []
      try {
        const supabase = await createClient()
        const { data } = await supabase
          .from('products')
          .select('id, title, price, condition, category')
          .order('created_at', { ascending: false })
          .limit(10)
        contextProducts = data || []
      } catch (e) {
        // Ignorar si falla la consulta y continuar con el chat
      }

      const reply = await chatWithArenitaAI({
        message,
        history: history || [],
        contextProducts,
        apiKey,
      })

      return NextResponse.json({ success: true, reply })
    }

    return NextResponse.json(
      { error: `Acción no soportada: ${action}` },
      { status: 400 }
    )
  } catch (error: any) {
    console.error('Error en /api/gemini:', error)
    return NextResponse.json(
      {
        error: error.message || 'Error procesando solicitud con Google Gemini.',
      },
      { status: 500 }
    )
  }
}
