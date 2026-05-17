import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { BottomNav } from '@/components/BottomNav'
import { ProductCard } from '@/components/ProductCard'
import { redirect } from 'next/navigation'

export default async function FavoritesPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?message=Debes iniciar sesión para ver tus favoritos')
  }

  // Fetch favorites with joined product data
  const { data: favorites, error } = await supabase
    .from('favorites')
    .select(`
      product_id,
      products (
        id,
        title,
        price,
        images,
        created_at
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })

  const isTableMissing = error?.code === '42P01'
  const displayProducts = favorites?.map(f => f.products).filter(Boolean) || []

  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <h1 className="font-bold text-lg text-foreground mx-auto">Tus Favoritos</h1>
      </header>

      <main className="pt-24 px-5 max-w-[500px] mx-auto">
        {isTableMissing ? (
          <div className="bg-error/10 border border-error/20 p-5 rounded-2xl mb-8">
            <h3 className="font-bold text-error mb-2">⚠️ Acción Requerida</h3>
            <p className="text-sm text-foreground/80">
              Para que los favoritos se guarden en tu cuenta, debes ejecutar el script SQL `favorites.sql` en tu panel de Supabase.
            </p>
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
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
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {displayProducts.map((p: any) => {
              const productWithImage = { ...p, imageUrl: p.images?.[0], isFavorited: true }
              return <ProductCard key={p.id} product={productWithImage as import('@/components/ProductCard').Product} />
            })}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}
