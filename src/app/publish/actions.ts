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
  
  let rawPrice = formData.get('price') as string
  if (rawPrice) {
    rawPrice = rawPrice.replace(',', '.') // European decimal format fix
  }
  const price = parseFloat(rawPrice)

  const category = formData.get('category') as string
  const condition = formData.get('condition') as string
  const description = formData.get('description') as string
  let imageUrl = formData.get('imageUrl') as string

  const location = formData.get('location') as string

  // Handle default image or array
  const images = imageUrl ? [imageUrl] : []

  // HEAL PROFILE: Ensure the user's profile exists in the profiles table to avoid foreign key errors
  await supabase.from('profiles').upsert({
    id: user.id,
    full_name: user.user_metadata?.full_name || 'Usuario Vendedor'
  })

  const { error } = await supabase
    .from('products')
    .insert({
      seller_id: user.id,
      title,
      price,
      location,
      condition,
      description,
      images
    })

  if (error) {
    console.error('Error creating product:', error)
    redirect(`/publish?message=${encodeURIComponent(error.message || 'Error al publicar el producto')}`)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
