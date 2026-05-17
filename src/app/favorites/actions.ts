'use strict'
'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function toggleFavorite(productId: string) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return { error: 'Debes iniciar sesión para agregar a favoritos' }
  }

  // Check if it's already a favorite
  const { data: existing } = await supabase
    .from('favorites')
    .select('id')
    .eq('user_id', user.id)
    .eq('product_id', productId)
    .single()

  if (existing) {
    // Remove from favorites
    await supabase.from('favorites').delete().eq('id', existing.id)
  } else {
    // Add to favorites
    const { error } = await supabase.from('favorites').insert({
      user_id: user.id,
      product_id: productId
    })
    
    if (error) {
      // If table doesn't exist (code 42P01), return a specific error
      if (error.code === '42P01') {
        return { error: 'La tabla favorites no existe. Ejecuta el script SQL en Supabase.' }
      }
      return { error: 'Error al agregar a favoritos' }
    }
  }

  revalidatePath('/')
  revalidatePath('/favorites')
  revalidatePath(`/product/${productId}`)
  
  return { success: true, isFavorited: !existing }
}
