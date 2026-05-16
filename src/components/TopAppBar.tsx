import Link from 'next/link'

export function TopAppBar() {
  return (
    <header className="bg-background/95 backdrop-blur-sm flex justify-between items-center w-full px-5 py-3 h-16 fixed top-0 z-50 border-b border-border shadow-sm shadow-[#4A4540]/5">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-primary font-bold text-xl">🛒</span>
        <h1 className="text-primary font-black text-2xl tracking-tight italic">ArenitaShop</h1>
      </Link>
      <div className="flex items-center gap-4">
        <button className="relative hover:bg-surface-dim transition-colors p-2 rounded-full active:scale-95 duration-150">
          <span className="text-foreground/60 font-bold text-lg">🔔</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
        </button>
        <Link href="/profile" className="w-8 h-8 rounded-full overflow-hidden border border-border bg-surface-dim flex items-center justify-center">
          <span className="text-sm">👤</span>
        </Link>
      </div>
    </header>
  )
}
