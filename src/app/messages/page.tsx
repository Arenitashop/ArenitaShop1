import Link from 'next/link'
import { BottomNav } from '@/components/BottomNav'

export default function MessagesInboxPage() {
  // Dummy data for the inbox to match the design visually
  const conversations = [
    {
      id: '1',
      name: 'Julian Alvarez',
      time: '10:45 AM',
      lastMessage: '¿Todavía está disponible para hoy?',
      product: 'Minimalist Watch Gen 2',
      unreadCount: 2,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Gukv6gIt2_1qTY1dbaCnxdkyWvtgqNjMsWlKOCStb9_IvH7sb5MUv-SYelqgdu6KiES8c6d5jA9krqtY2dZtlPcHRB6PkqbRxyJ5oJ2qweYtfWBMxR2nJvaXjiY_ZRfkgZsuVy8cdMCEYU-IBVrXcW0nTbSW7a9OKFw9IhGnPGbyRy26CNzU_d-xGoYGovaJK1mmmcfkCNJpxA0LBoItl7zSMyZ5yVAh4ljYDEsn_bhjKgsZXgUDYFyjmzOEP25sNJF32zr2curJ'
    },
    {
      id: '2',
      name: 'Carla Gomez',
      time: '09:12 AM',
      lastMessage: 'Me interesa el talle 42, ¿haces envíos?',
      product: 'Nike Air Max Red',
      unreadCount: 1,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeaRjsnl0NeZPbJMNwCK2lEPG2iKECU2f8mzDuJaWYj3F_XAkz_ugaJXk3-TeMptWVY5ZEAbEKPzivOgf5JJy114PC3A7doje2AAzuwmd2Olzq78CZOitC9tlZ-oBE9KUD38kTBCYEkzxgY2JlcRUrr2v5lxMo7JCkJALvc3R0Ny8f4qmXeSPEgmPSHFT3aephrJAdvL3En2Ng-ACRaFzcWPOwtmixjyQu4dxGncZERJDd9uqrDw6bcB-tIcQpUVfxqzwC_2c9RrQX'
    },
    {
      id: '3',
      name: 'Marcos Lopez',
      time: 'Ayer',
      lastMessage: 'Dale, nos vemos en el centro a las 18hs.',
      product: 'Sony WH-1000XM4',
      unreadCount: 0,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6YmwGhqp9n8RuRng-vTYRP0L1da4n3m3_MZhNgxECj0-24dWQvFSfXhcNsAeXamuz7QiDpY4fiZ6_N8cqrs0B9sMVGpUBViWevuoV6shf8i4W5BAF7-wE2YgU2-IpbVHmFDjyPEHwcx6r7Juj4S-JW_jLLjZ4-MLCSRtyGO21UBKweDYYANLTi-gmg5_5F1doN7FQlnTFXFQOnyiYn_myPLMFVWPxNpm0F4LqaVRCk6JbKXxiCFoO3JF5fEFa5kgwjQHjtfLnlvok'
    }
  ]

  return (
    <div className="bg-background text-foreground min-h-screen font-sans flex flex-col pb-24 antialiased">
      {/* TopAppBar */}
      <header className="flex justify-between items-center px-5 h-16 w-full fixed top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="flex items-center gap-3">
          <button className="transition-colors duration-200 hover:bg-surface-dim p-2 rounded-full">
            <span className="text-xl">☰</span>
          </button>
          <h1 className="font-bold text-xl text-primary">Mensajes</h1>
        </div>
        <div className="flex items-center">
          <button className="transition-colors duration-200 hover:bg-surface-dim p-2 rounded-full">
            <span className="text-xl">🔍</span>
          </button>
        </div>
      </header>

      {/* Conversation List Content */}
      <main className="flex-1 mt-16 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Filter Tabs */}
        <div className="px-5 py-4 flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button className="bg-primary text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-transform">
            Todo
          </button>
          <button className="bg-surface-dim text-foreground/70 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-border transition-colors active:scale-95">
            Ventas
          </button>
          <button className="bg-surface-dim text-foreground/70 px-4 py-1.5 rounded-full font-bold text-sm hover:bg-border transition-colors active:scale-95">
            Compras
          </button>
        </div>

        {/* List Items */}
        <div className="flex flex-col">
          {conversations.map((conv) => (
            <div key={conv.id}>
              <Link 
                href={`/messages/${conv.id}`}
                className={`px-5 py-4 flex gap-4 items-center transition-colors hover:bg-surface-dim active:scale-[0.98] ${
                  conv.unreadCount > 0 ? 'bg-primary/5' : 'bg-background'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img 
                    alt={conv.product} 
                    className="w-14 h-14 rounded-xl object-cover" 
                    src={conv.avatar} 
                  />
                  {conv.unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary-container rounded-full border-2 border-background"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className={`text-base truncate pr-2 ${conv.unreadCount > 0 ? 'font-extrabold text-foreground' : 'font-bold text-foreground/90'}`}>
                      {conv.name}
                    </h3>
                    <span className="text-xs text-foreground/50 flex-shrink-0 font-semibold">
                      {conv.time}
                    </span>
                  </div>
                  <p className={`text-sm truncate leading-tight mb-0.5 ${conv.unreadCount > 0 ? 'font-bold text-foreground' : 'font-medium text-foreground/60'}`}>
                    {conv.lastMessage}
                  </p>
                  <span className="text-[10px] font-extrabold text-primary-container uppercase tracking-wider">
                    {conv.product}
                  </span>
                </div>
                
                {conv.unreadCount > 0 ? (
                  <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-2">
                    <div className="w-5 h-5 bg-primary-container rounded-full flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">{conv.unreadCount}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex-shrink-0 ml-2">
                    <span className="text-primary text-sm">✓✓</span>
                  </div>
                )}
              </Link>
              <div className="mx-5 h-[1px] bg-border/50"></div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
