'use server'

import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const full_name = formData.get('full_name') as string

  // Update auth metadata
  await supabase.auth.updateUser({
    data: { full_name }
  })

  // Update profiles table
  const { error } = await supabase
    .from('profiles')
    .upsert({ id: user.id, full_name })

  if (error) {
    redirect('/profile/edit?message=' + encodeURIComponent('Error al guardar: ' + error.message))
  }

  revalidatePath('/profile', 'layout')
  redirect('/profile?message=perfil_actualizado')
}
