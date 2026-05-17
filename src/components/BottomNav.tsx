'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Inicio', icon: '🏠' },
    { href: '/search', label: 'Buscar', icon: '🔍' },
    { href: '/messages', label: 'Mensajes', icon: '✉️', badge: 2 },
    { href: '/profile', label: 'Perfil', icon: '👤' },
  ]

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <Link href="/publish" className="fixed bottom-24 right-6 bg-primary-container text-white flex items-center gap-2 px-6 py-4 rounded-3xl shadow-lg shadow-primary-container/30 active:scale-90 transition-transform z-[60]">
        <span className="font-bold text-xl">+</span>
        <span className="font-bold text-base">Publicar</span>
      </Link>

      {/* Bottom Nav Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 h-20 bg-background/90 backdrop-blur-md border-t border-border shadow-ambient rounded-t-3xl">
        {navItems.map((item, idx) => {
          const isActive = pathname === item.href
          
          // Special spacer for FAB if needed, but here we just evenly distribute.
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center px-4 py-1.5 active:scale-90 transition-all ${
                isActive 
                  ? 'text-primary bg-primary/10 rounded-2xl' 
                  : 'text-foreground/50 hover:text-primary'
              }`}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="font-medium text-[10px]">{item.label}</span>
              {item.badge && (
                <span className="absolute top-1 right-2 w-4 h-4 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-bold border-2 border-background">
                  {item.badge}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
