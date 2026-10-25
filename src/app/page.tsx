import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { TopAppBar } from '@/components/TopAppBar'
import { BottomNav } from '@/components/BottomNav'
import { ProductCard } from '@/components/ProductCard'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const supabase = await createClient()
  const { category } = await searchParams

  const supabaseQuery = supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)

  // Filter by category currently disabled as 'category' column doesn't exist
  // if (category) {
  //   supabaseQuery = supabaseQuery.eq('category', category)
  // }

  // Fetch products from Supabase
  const { data: products } = await supabaseQuery

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
            <Link 
              href="/"
              className={`px-6 py-2 rounded-full font-semibold text-sm active:scale-95 transition-transform ${
                !category ? 'bg-primary-container text-white shadow-md' : 'bg-white text-foreground/70 border border-border hover:bg-surface-dim'
              }`}
            >
              Todos
            </Link>
            {[{name:'Electrónica',icon:'📱'},{name:'Ropa',icon:'👕'},{name:'Hogar',icon:'🏡'},{name:'Vehículos',icon:'🚗'},{name:'Deportes',icon:'⚽'}].map((catObj) => (
              <Link 
                key={catObj.name} 
                href={`/?category=${catObj.name}`}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors active:scale-95 ${
                  category === catObj.name ? 'bg-primary-container text-white shadow-md' : 'bg-white text-foreground/70 border border-border hover:bg-surface-dim'
                }`}
              >
                {catObj.icon} {catObj.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Section Title & Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-2xl text-foreground">Cerca de ti</h2>
            <Link href="/search" className="flex items-center gap-1 text-foreground/60 hover:text-primary transition-colors">
              <span className="text-xl">⚙️</span>
              <span className="text-xs font-semibold">Filtrar</span>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4">
            {displayProducts.map((p) => {
              const productWithImage = { ...p, imageUrl: p.images?.[0] }
              return <ProductCard key={p.id} product={productWithImage as import('@/components/ProductCard').Product} />
            })}
            {displayProducts.length === 0 && (
              <div className="col-span-2 flex flex-col items-center justify-center py-16 text-center">
                <span className="text-6xl mb-4">🏖️</span>
                <h3 className="font-bold text-xl text-foreground mb-2">Aún no hay productos</h3>
                <p className="text-foreground/50 text-sm max-w-[250px]">Sé el primero en publicar algo increíble en la comunidad.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}
