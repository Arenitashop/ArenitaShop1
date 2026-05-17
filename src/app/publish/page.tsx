import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { createProduct } from './actions'

export default async function PublishPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?message=Debes iniciar sesión para publicar')
  }

  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-24 antialiased">
      {/* Top Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <Link 
          href="/"
          className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-full text-foreground active:scale-95 transition-all duration-200"
        >
          <span className="font-bold text-xl">✕</span>
        </Link>
        <h1 className="font-bold text-lg text-foreground">Publicar Producto</h1>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </header>

      {/* Main Content Area */}
      <main className="pt-24 px-6 max-w-md mx-auto">
        <form action={createProduct} className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="font-bold text-sm text-foreground">Título</label>
            <input 
              required
              name="title"
              id="title"
              className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Ej. iPhone 13 Pro Max"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="font-bold text-sm text-foreground">Precio (€)</label>
            <input 
              required
              type="number"
              step="0.01"
              name="price"
              id="price"
              className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="0.00"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className="font-bold text-sm text-foreground">Categoría</label>
            <select 
              name="category"
              id="category"
              className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
            >
              <option value="Electrónica">Electrónica</option>
              <option value="Ropa">Ropa</option>
              <option value="Hogar">Hogar</option>
              <option value="Vehículos">Vehículos</option>
              <option value="Deportes">Deportes</option>
              <option value="Otros">Otros</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="condition" className="font-bold text-sm text-foreground">Estado</label>
            <select 
              name="condition"
              id="condition"
              className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
            >
              <option value="Nuevo">Nuevo</option>
              <option value="Como nuevo">Como nuevo</option>
              <option value="Usado - Buen estado">Usado - Buen estado</option>
              <option value="Usado - Aceptable">Usado - Aceptable</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="location" className="font-bold text-sm text-foreground">Ubicación</label>
            <input 
              required
              name="location"
              id="location"
              className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="Ej. Madrid, Centro"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="imageUrl" className="font-bold text-sm text-foreground">URL de Imagen (Opcional)</label>
            <input 
              name="imageUrl"
              id="imageUrl"
              type="url"
              className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="https://..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-bold text-sm text-foreground">Descripción</label>
            <textarea 
              required
              name="description"
              id="description"
              rows={4}
              className="w-full bg-surface-dim border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
              placeholder="Describe tu producto con detalle..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full mt-4 bg-primary text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-all"
          >
            Publicar ahora
          </button>
        </form>
      </main>
    </div>
  )
}
