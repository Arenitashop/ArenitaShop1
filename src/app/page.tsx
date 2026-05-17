import { createClient } from '@/lib/supabase/server'
import { TopAppBar } from '@/components/TopAppBar'
import { BottomNav } from '@/components/BottomNav'
import { ProductCard } from '@/components/ProductCard'

export default async function Home() {
  const supabase = await createClient()

  // Fetch products from Supabase
  const { data: products } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)

  const displayProducts = products || []

  return (
    <div className="font-sans min-h-screen text-foreground bg-background antialiased pb-28">
      <TopAppBar />

      <main className="pt-20 px-5 max-w-[500px] mx-auto">
        {/* Search Bar */}
        <section className="mb-6">
          <form action="/search" className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 text-xl">🔍</span>
            <input
              name="q"
              className="w-full h-12 pl-12 pr-4 bg-surface-dim border-none rounded-full focus:ring-2 focus:ring-secondary text-base placeholder:text-foreground/40 transition-all outline-none"
              placeholder="Buscar productos..."
              type="text"
            />
          </form>
        </section>

        {/* Category Chips */}
        <section className="mb-8 -mx-5 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex gap-3 whitespace-nowrap">
            <button className="px-6 py-2 rounded-full bg-primary-container text-white font-semibold text-sm shadow-md active:scale-95 transition-transform">
              Todos
            </button>
            {['Electrónica', 'Ropa', 'Hogar', 'Vehículos', 'Deportes'].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full bg-white text-foreground/70 font-semibold text-sm border border-border hover:bg-surface-dim transition-colors active:scale-95">
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Section Title & Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-2xl text-foreground">Cerca de ti</h2>
            <button className="flex items-center gap-1 text-foreground/60 hover:text-primary transition-colors">
              <span className="text-xl">⚙️</span>
              <span className="text-xs font-semibold">Filtrar</span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4">
            {displayProducts.map((p) => (
              <ProductCard key={p.id} product={p as import('@/components/ProductCard').Product} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}
