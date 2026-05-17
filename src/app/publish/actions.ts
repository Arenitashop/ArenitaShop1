'use strict'
'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createProduct(formData: FormData) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?message=Debe iniciar sesión para publicar')
  }

  const title = formData.get('title') as string
  const price = parseFloat(formData.get('price') as string)
  const category = formData.get('category') as string
  const condition = formData.get('condition') as string
  const location = formData.get('location') as string
  const description = formData.get('description') as string
  let imageUrl = formData.get('imageUrl') as string

  // Handle default image or array
  const images = imageUrl ? [imageUrl] : []

  // Add dummy timeAgo for visual purposes, normally this is derived from created_at
  const timeAgo = 'Justo ahora'

  const { data, error } = await supabase
    .from('products')
    .insert({
      seller_id: user.id,
      title,
      price,
      category,
      condition,
      location,
      description,
      images,
      timeAgo
    })
    .select()

  if (error) {
    console.error('Error creating product:', error)
    redirect('/publish?message=Error al publicar el producto')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
