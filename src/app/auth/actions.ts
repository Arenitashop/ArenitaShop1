'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return redirect('/login?message=No se pudo iniciar sesión: ' + error.message)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()

  const password = formData.get('password') as string
  const confirm_password = formData.get('confirm_password') as string

  if (password !== confirm_password) {
    return redirect('/register?message=Las contraseñas no coinciden')
  }

  const data = {
    email: formData.get('email') as string,
    password: password,
    options: {
      data: {
        full_name: formData.get('full_name') as string,
      }
    }
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return redirect('/register?message=No se pudo registrar: ' + error.message)
  }

  revalidatePath('/', 'layout')
  redirect('/login?message=Revisa tu correo para continuar el proceso de inicio de sesión')
}
