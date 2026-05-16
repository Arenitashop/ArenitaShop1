import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const supabase = await createClient()
  const { id } = params

  // Fetch product and seller info
  const { data: product } = await supabase
    .from('products')
    .select(`
      *,
      profiles:seller_id (
        full_name,
        avatar_url
      )
    `)
    .eq('id', id)
    .single()

  // Dummy fallback for UI testing if no DB data
  const p = product || {
    id: id,
    title: 'Vintage Film Camera - Excellent Condition',
    price: 120.0,
    description: 'Preciosa cámara de película vintage en un estado estético y funcional excelente. Ideal para amantes de la fotografía analógica. Lente limpia sin hongos ni rayones. Incluye funda de cuero original y correa. Una pieza de colección lista para usar.',
    category: 'Electrónica',
    condition: 'Usado',
    location: 'Madrid',
    timeAgo: 'hace 2 días',
    images: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAAhNr4uR8v0zifIAdL-I82nI9umSORDtjvgAkJirrsR15UGfiBS4F3eVy3C8MhzSlRmFvk3hqWkgYfS8pgIcjrH5GAgCx1QSsTko6F6z5LeviMaxqjeo5Z2xDuJ78cuZfvmiPLWMWLKtD6GQv-9r-1UvYbs7-cwvPDo857N9X7IXJFB0Cqh0phHa7N1sY0TN8k7K9IT3UDT0zqMbukSW-J3APWnkcfuGIJflCdW3xBnn4aJ9OqODzk6bUdgewL_FOEeg34FCDY7c5x'],
    profiles: {
      full_name: 'Carlos G.',
      avatar_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwOwdUxyXTL_4eiba4bWwe8yFC772GZiWvfTeYsNBfB5NvQHUyphfGGJxEau5IXHJSsYz4uAnckT4IuDYw-dh5bUAX-UgiTzXKyBS3QcLUyAbDxoP-xXuEBRwiMjD0Vt1MX0ORKot4h7XOooxHxnFTOlKJp91_uzOYSBSE0uG-rvPcGSt2UrcVs_z3iiki5d23zasryEoRKmBwPWORQiq5hUIsSqSU8hi7_LddvAaXBVbK4eA6fBlSaz1QhGtfW8HrDp9pZf-N4j3U'
    }
  }

  const imageUrl = p.images?.[0] || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80'
  const avatarUrl = p.profiles?.avatar_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'

  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      {/* Top Navigation Overlay */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 transition-all">
        <Link 
          href="/"
          className="w-10 h-10 flex items-center justify-center bg-black/20 backdrop-blur-md rounded-full text-white active:scale-95 transition-all duration-200"
        >
          <span className="font-bold text-xl">←</span>
        </Link>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center bg-black/20 backdrop-blur-md rounded-full text-white active:scale-95 transition-all duration-200">
            <span className="text-xl">↗️</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-black/20 backdrop-blur-md rounded-full text-white active:scale-95 transition-all duration-200">
            <span className="text-xl">⋮</span>
          </button>
        </div>
      </header>

      {/* Product Image Carousel */}
      <section className="relative w-full aspect-[4/3] bg-surface-dim overflow-hidden">
        <img 
          alt={p.title} 
          className="w-full h-full object-cover" 
          src={imageUrl} 
        />
        {/* Carousel Indicators (Dummy) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          <div className="w-2 h-2 rounded-full bg-white shadow-sm"></div>
          <div className="w-2 h-2 rounded-full bg-white/40 shadow-sm"></div>
          <div className="w-2 h-2 rounded-full bg-white/40 shadow-sm"></div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="relative -mt-6 bg-white rounded-t-3xl px-6 pt-8 shadow-[0_-8px_30px_rgba(51,51,51,0.08)]">
        {/* Price & Badges */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <span className="text-primary-container font-bold text-3xl tracking-tight">
              {Number(p.price).toFixed(2)} €
            </span>
            <div className="mt-2 flex items-center gap-2">
              <span className="px-3 py-1 bg-surface-container-high text-foreground/70 font-semibold text-xs rounded-full">
                {p.condition || 'Usado'}
              </span>
              {p.category && (
                <span className="px-3 py-1 bg-surface-container-high text-foreground/70 font-semibold text-xs rounded-full">
                  {p.category}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-foreground font-extrabold text-2xl leading-tight mb-4 mt-2">
          {p.title}
        </h1>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 mb-6 text-foreground/60 text-sm font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="text-lg">📍</span>
            <span>{p.location || 'España'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-lg">⏱️</span>
            <span>{p.timeAgo || 'Reciente'}</span>
          </div>
        </div>

        <hr className="border-border mb-6" />

        {/* Description */}
        <section className="mb-8">
          <h2 className="text-foreground font-bold text-lg mb-3">Descripción</h2>
          <p className="text-foreground/70 text-base leading-relaxed">
            {p.description || 'Sin descripción detallada.'}
          </p>
        </section>

        {/* Seller Card */}
        <section className="bg-secondary-container/10 border border-secondary-container/20 rounded-2xl p-4 flex items-center gap-4 mb-8">
          <div className="relative">
            <img 
              alt="Seller Avatar" 
              className="w-14 h-14 rounded-full object-cover" 
              src={avatarUrl} 
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-base text-secondary">
                {p.profiles?.full_name || 'Vendedor Anonimo'}
              </h3>
              <button className="text-secondary text-sm font-semibold hover:underline transition-all">Ver perfil</button>
            </div>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-yellow-500 text-sm">⭐</span>
              <span className="text-sm font-bold text-foreground/80">4.8</span>
              <span className="text-xs text-foreground/50 font-medium">(120 valoraciones)</span>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Action Bar (Fixed) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-t border-border px-4 py-4 pb-safe flex items-center gap-3 shadow-[0_-8px_30px_rgba(51,51,51,0.06)]">
        {/* Save/Favorite */}
        <button className="w-12 h-12 flex items-center justify-center border-2 border-border rounded-xl text-foreground/40 hover:text-primary-container active:scale-90 transition-all">
          <span className="text-xl">❤️</span>
        </button>
        
        {/* Offer Button (Secondary) */}
        <button className="flex-1 h-12 flex items-center justify-center border-2 border-secondary text-secondary font-bold text-sm rounded-xl hover:bg-secondary/5 active:scale-95 transition-all">
          Hacer Oferta
        </button>
        
        {/* Chat Button (Primary) */}
        <button className="flex-1 h-12 flex items-center justify-center bg-primary-container text-white font-bold text-sm rounded-xl shadow-lg shadow-primary-container/20 hover:bg-primary transition-colors active:scale-95">
          Chatear
        </button>
      </nav>
    </div>
  )
}
