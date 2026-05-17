import Link from 'next/link'

export default function PrivacySettingsPage() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <Link 
          href="/settings"
          className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-full text-foreground active:scale-95 transition-all duration-200"
        >
          <span className="font-bold text-xl">←</span>
        </Link>
        <h1 className="font-bold text-lg text-foreground flex-1 text-center pr-10">Privacidad y Seguridad</h1>
      </header>

      <main className="pt-24 px-5 max-w-[500px] mx-auto">
        <section className="bg-white rounded-2xl border border-border p-5 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base">Perfil Público</h3>
              <p className="text-sm text-foreground/60">Cualquiera puede ver tus productos</p>
            </div>
            <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base">Autenticación en dos pasos</h3>
              <p className="text-sm text-foreground/60">Mayor seguridad para tu cuenta</p>
            </div>
            <div className="w-12 h-6 bg-surface-dim rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow-sm"></div>
            </div>
          </div>

          <button className="w-full text-left py-2 font-bold text-secondary">
            Cambiar Contraseña
          </button>
          
          <button className="w-full text-left py-2 font-bold text-error">
            Eliminar Cuenta
          </button>
        </section>
      </main>
    </div>
  )
}
