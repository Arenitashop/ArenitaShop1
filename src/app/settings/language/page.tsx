import Link from 'next/link'

export default function LanguageSettingsPage() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <Link 
          href="/settings"
          className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-full text-foreground active:scale-95 transition-all duration-200"
        >
          <span className="font-bold text-xl">←</span>
        </Link>
        <h1 className="font-bold text-lg text-foreground flex-1 text-center pr-10">Idioma y Región</h1>
      </header>

      <main className="pt-24 px-5 max-w-[500px] mx-auto">
        <section className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div>
              <h3 className="font-bold text-base">Idioma de la App</h3>
              <p className="text-sm text-foreground/60">Español (ES)</p>
            </div>
            <select className="bg-surface-dim px-3 py-2 rounded-lg border-none outline-none font-semibold">
              <option>Español (ES)</option>
              <option>English (US)</option>
              <option>Français (FR)</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4">
            <div>
              <h3 className="font-bold text-base">Moneda</h3>
              <p className="text-sm text-foreground/60">Euro (€)</p>
            </div>
            <select className="bg-surface-dim px-3 py-2 rounded-lg border-none outline-none font-semibold">
              <option>Euro (€)</option>
              <option>USD ($)</option>
            </select>
          </div>
        </section>
      </main>
    </div>
  )
}
