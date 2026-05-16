import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { BottomNav } from '@/components/BottomNav'

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Get user info
  const fullName = user.user_metadata?.full_name || 'Usuario'
  const email = user.email
  const avatarUrl = user.user_metadata?.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'

  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <Link 
          href="/"
          className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-full text-foreground active:scale-95 transition-all duration-200"
        >
          <span className="font-bold text-xl">←</span>
        </Link>
        <h1 className="font-bold text-lg text-foreground">Mi Perfil</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </header>

      {/* Main Content Area */}
      <main className="pt-24 px-6 max-w-md mx-auto">
        
        {/* Profile Card */}
        <section className="bg-white rounded-3xl shadow-sm border border-border p-6 mb-8 flex flex-col items-center">
          <div className="relative mb-4">
            <img 
              alt="User Avatar" 
              className="w-24 h-24 rounded-full object-cover border-4 border-surface-dim" 
              src={avatarUrl} 
            />
            <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          
          <h2 className="font-extrabold text-2xl text-foreground text-center mb-1">
            {fullName}
          </h2>
          <p className="text-foreground/60 text-sm font-medium text-center mb-6">
            {email}
          </p>
          
          <Link 
            href="/profile/edit"
            className="w-full py-3 bg-surface-dim text-foreground font-bold rounded-xl text-center active:scale-95 transition-all"
          >
            Editar perfil
          </Link>
        </section>

        {/* Options Menu */}
        <section className="space-y-4">
          <h3 className="font-bold text-lg text-foreground mb-4">Ajustes de cuenta</h3>
          
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <Link href="/messages" className="flex items-center justify-between p-4 border-b border-border hover:bg-surface-dim transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <span className="font-semibold text-foreground">Mis mensajes</span>
              </div>
              <span className="text-foreground/40">→</span>
            </Link>
            
            <Link href="/favorites" className="flex items-center justify-between p-4 border-b border-border hover:bg-surface-dim transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xl">❤️</span>
                <span className="font-semibold text-foreground">Favoritos</span>
              </div>
              <span className="text-foreground/40">→</span>
            </Link>

            <Link href="/settings" className="flex items-center justify-between p-4 hover:bg-surface-dim transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-xl">⚙️</span>
                <span className="font-semibold text-foreground">Configuración</span>
              </div>
              <span className="text-foreground/40">→</span>
            </Link>
          </div>

          <form action="/auth/signout" method="post" className="pt-4">
            <button 
              type="submit"
              className="w-full py-4 flex items-center justify-center gap-2 text-error font-bold rounded-xl hover:bg-error/10 active:scale-95 transition-all"
            >
              <span>🚪</span>
              Cerrar sesión
            </button>
          </form>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}
