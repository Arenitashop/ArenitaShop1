import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { updateProfile } from './actions'

export default async function EditProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const fullName = user.user_metadata?.full_name || ''
  const email = user.email || ''
  const { message } = await searchParams

  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <Link
          href="/profile"
          className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-full text-foreground active:scale-95 transition-all duration-200"
        >
          <span className="font-bold text-xl">←</span>
        </Link>
        <h1 className="font-bold text-lg text-foreground">Editar Perfil</h1>
        <div className="w-10" />
      </header>

      <main className="pt-24 px-6 max-w-md mx-auto">
        {message && (
          <div className="bg-error/10 border border-error text-error text-sm font-bold p-4 rounded-xl mb-6">
            {message}
          </div>
        )}

        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center text-4xl text-white font-bold shadow-lg">
              {fullName ? fullName.charAt(0).toUpperCase() : '👤'}
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary-container rounded-full flex items-center justify-center border-3 border-white shadow-md">
              <span className="text-white text-sm">📷</span>
            </div>
          </div>
          <p className="text-foreground/50 text-sm mt-3 font-medium">Toca para cambiar foto</p>
        </div>

        <form action={updateProfile} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="full_name" className="font-bold text-sm text-foreground">Nombre completo</label>
            <input
              required
              name="full_name"
              id="full_name"
              defaultValue={fullName}
              className="w-full bg-white border border-border rounded-2xl px-4 py-3.5 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-foreground"
              placeholder="Tu nombre"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold text-sm text-foreground">Correo electrónico</label>
            <input
              disabled
              id="email"
              value={email}
              className="w-full bg-surface-dim border border-border rounded-2xl px-4 py-3.5 outline-none text-foreground/50 cursor-not-allowed"
            />
            <p className="text-xs text-foreground/40 px-1">El correo no se puede cambiar</p>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-primary-container text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-primary-container/30 active:scale-95 transition-all hover:shadow-xl"
          >
            Guardar cambios
          </button>
        </form>
      </main>
    </div>
  )
}
