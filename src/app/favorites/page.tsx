import Link from 'next/link'
import { BottomNav } from '@/components/BottomNav'

export default function FavoritesPage() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <h1 className="font-bold text-lg text-foreground mx-auto">Tus Favoritos</h1>
      </header>

      <main className="pt-24 px-5 max-w-[500px] mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
        <span className="text-6xl mb-4">❤️</span>
        <h2 className="font-bold text-2xl mb-2">Aún no tienes favoritos</h2>
        <p className="text-foreground/60 mb-8 max-w-[250px]">
          Guarda los productos que te gusten para verlos más tarde.
        </p>
        <Link 
          href="/"
          className="px-6 py-3 bg-primary-container text-white font-bold rounded-xl active:scale-95 transition-all shadow-lg shadow-primary-container/20"
        >
          Explorar productos
        </Link>
      </main>

      <BottomNav />
    </div>
  )
}
