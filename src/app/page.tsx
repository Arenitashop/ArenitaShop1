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

  // Fallback dummy data if db is empty
  const dummyProducts = [
    {
      id: '1',
      title: 'Reloj Minimalista Blanco',
      price: 35.0,
      location: 'Valencia',
      timeAgo: '2h',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKXorLzqgIhFBZQZZr1VgtvBOnmGwXdX9z4qsv5218140ITOoijHCor3wc_xsD2URaopDtWOYCDu3htRVV6bLti-Hk4c9yffK5uD8m-UptDboJVe-aU7HQhYYCbN9YSAY2sjTgdVl3OY4lRZm5gIURZbRIH1vT_3NJIJ79qFUfTL-ihLdNZhBN3h1rK3lWO_zOZ0T7YJfyngMPgu_NphRmkxQn046nrXvJpPb04MDtHnB55-VnSrMSanwyLHfjeSDEQOfSvYHu5qA'
    },
    {
      id: '2',
      title: 'Zapatillas Deportivas',
      price: 55.0,
      location: 'Madrid',
      timeAgo: '5h',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM70gF8fo6VJEj1pOlt3I2XRWV6J2aqKTMtjH8FMWvictuczoSk2kR7O4mffKY4VH9fHXKnh1Bh-OxTYC1vsU-UB4oZRkKYW9FBafdFKOYwxVORUS1l-lkhu6RneFY648g9ddowGwj0FS1Csh8OFkGIFfQw3BR-PcT3zwi9WVoYIAAkO3KnLQr_Rep2CA6RovjdeB8JORom0A4VRNvN7JbAX2IXQFAezmF_GNIzE44okk73Kt7JArQHik90tAW1WY1Z-zA9CpU4rg'
    },
    {
      id: '3',
      title: 'Bolso Cuero Vintage',
      price: 120.0,
      location: 'Barcelona',
      timeAgo: '1d',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDSCA2I5WFJC81Ttlwh3aD3Ik8Ur-03bvU816ig1eLS_jew9nsfL4JdMUc4lz2R3IeptAKXcaLoi6sVBIPZFYWCOP-vz9XPuH9zl-ZgUCkfoPor5n0Eo-q0b45BKoF_2y6BIkyZRbfDr-1fgamhLxOPe7Gzayknj3Jrf20ubEU4KyWSOQqXwfcj9UwzoZk_YWEcAhWeUgZYOxx_dK4PL4Iyq-Z0Qcw1-4dB_6Dy9EThOSdf8m8Ulz_hsp9O5ZoAzCPktEsWtCgh5Y'
    },
    {
      id: '4',
      title: 'Lámpara de Diseño',
      price: 42.50,
      location: 'Sevilla',
      timeAgo: '3h',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEPMvhmOVrW_CzRwk7sHCTR8CFf7fi08AGwPIguE3ScXE8pRzPemD_iyrqTGhSXuz37t1F4mCsRLs6tezq8TAnN_7xpPnCD7eymti--4jlFo5ikAPE7_HO13rY-2Up6_vcCM7Vjw2GIk_vrNlZUJt4JeeyOPvIeYdB8Zb9KnQoOYst4R26FuTfUS4MgnIFVOEYFliOmbAy7Ca7K2ZBZduaZPmXbV_0EHJknneVB_s5YxXrBMZwCcsh-d_kTDiRU0eYO_taifnwIdc'
    }
  ]

  const displayProducts = products && products.length > 0 ? products : dummyProducts

  return (
    <div className="font-sans min-h-screen text-foreground bg-background antialiased pb-28">
      <TopAppBar />

      <main className="pt-20 px-5 max-w-[500px] mx-auto">
        {/* Search Bar */}
        <section className="mb-6">
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 text-xl">🔍</span>
            <input
              className="w-full h-12 pl-12 pr-4 bg-surface-dim border-none rounded-full focus:ring-2 focus:ring-secondary text-base placeholder:text-foreground/40 transition-all outline-none"
              placeholder="Buscar productos..."
              type="text"
            />
          </div>
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
              <ProductCard key={p.id} product={p as any} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}
