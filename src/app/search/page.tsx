import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { ProductCard } from '@/components/ProductCard'
import { BottomNav } from '@/components/BottomNav'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>
}) {
  const supabase = await createClient()
  const { q } = await searchParams
  
  const query = q || ''

  // Fetch products matching query
  let supabaseQuery = supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })

  if (query) {
    supabaseQuery = supabaseQuery.ilike('title', `%${query}%`)
  }

  const { data: products } = await supabaseQuery

  const displayProducts = products || []

  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <Link 
          href="/"
          className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-full text-foreground active:scale-95 transition-all duration-200 mr-3"
        >
          <span className="font-bold text-xl">←</span>
        </Link>
        <form action="/search" className="flex-1 relative">
          <input
            name="q"
            defaultValue={query}
            className="w-full h-10 pl-4 pr-10 bg-surface-dim border-none rounded-full focus:ring-2 focus:ring-secondary text-sm placeholder:text-foreground/40 outline-none"
            placeholder="Buscar productos..."
            type="text"
            autoFocus
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40">
            🔍
          </button>
        </form>
      </header>

      <main className="pt-24 px-5 max-w-[500px] mx-auto">
        <h2 className="font-bold text-xl mb-4">
          {query ? `Resultados para "${query}"` : 'Explorar todos'}
        </h2>

        {displayProducts.length === 0 ? (
          <div className="text-center text-foreground/50 mt-10">
            <span className="text-4xl mb-3 block">😕</span>
            No se encontraron productos.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {displayProducts.map((p) => {
              const productWithImage = { ...p, imageUrl: p.images?.[0] }
              return <ProductCard key={p.id} product={productWithImage as import('@/components/ProductCard').Product} />
            })}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}
