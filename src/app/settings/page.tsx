import Link from 'next/link'
import { BottomNav } from '@/components/BottomNav'

export default function SettingsPage() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <Link 
          href="/profile"
          className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-full text-foreground active:scale-95 transition-all duration-200"
        >
          <span className="font-bold text-xl">←</span>
        </Link>
        <h1 className="font-bold text-lg text-foreground flex-1 text-center pr-10">Configuración</h1>
      </header>

      <main className="pt-24 px-5 max-w-[500px] mx-auto">
        <section className="bg-white rounded-2xl border border-border overflow-hidden mb-6">
          <div className="flex items-center justify-between p-4 border-b border-border hover:bg-surface-dim transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔔</span>
              <span className="font-semibold text-foreground">Notificaciones</span>
            </div>
            <span className="text-foreground/40">→</span>
          </div>
          
          <div className="flex items-center justify-between p-4 border-b border-border hover:bg-surface-dim transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-xl">🔒</span>
              <span className="font-semibold text-foreground">Privacidad y Seguridad</span>
            </div>
            <span className="text-foreground/40">→</span>
          </div>

          <div className="flex items-center justify-between p-4 hover:bg-surface-dim transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-xl">🌍</span>
              <span className="font-semibold text-foreground">Idioma y Región</span>
            </div>
            <span className="text-foreground/40">→</span>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border hover:bg-surface-dim transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <span className="text-xl">❓</span>
              <span className="font-semibold text-foreground">Ayuda y Soporte</span>
            </div>
            <span className="text-foreground/40">→</span>
          </div>

          <form action="/auth/signout" method="post" className="w-full">
            <button 
              type="submit"
              className="w-full flex items-center justify-between p-4 hover:bg-error/5 transition-colors text-error"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🚪</span>
                <span className="font-bold">Cerrar sesión</span>
              </div>
            </button>
          </form>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}
