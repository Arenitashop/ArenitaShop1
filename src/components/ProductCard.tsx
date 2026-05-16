'use client'

import Link from 'next/link'

export interface Product {
  id: string
  title: string
  price: number
  location?: string
  timeAgo?: string
  imageUrl?: string
}

export function ProductCard({ product }: { product: Product }) {
  // Use a placeholder if no image
  const image = product.imageUrl || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80'

  return (
    <article className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-t-3xl bg-surface-dim">
          <img
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={image}
          />
          <button 
            className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground/40 hover:text-primary-container active:scale-90 transition-all z-10"
            onClick={(e) => {
              e.preventDefault();
              // Toggle favorite logic
            }}
          >
            <span className="text-lg">❤️</span>
          </button>
        </div>
        <div className="p-3">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-1">
            {product.title}
          </h3>
          <p className="text-lg font-bold text-primary-container mb-2">
            {product.price.toFixed(2)}€
          </p>
          <div className="flex items-center gap-1 text-foreground/50">
            <span className="text-xs">📍</span>
            <span className="text-xs font-medium">
              {product.location || 'España'} • {product.timeAgo || 'Reciente'}
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
