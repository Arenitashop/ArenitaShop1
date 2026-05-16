import Link from 'next/link'

export default function ChatDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen font-sans antialiased relative">
      {/* TopAppBar */}
      <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
        <div className="flex items-center justify-between px-5 h-16 w-full">
          <div className="flex items-center gap-3">
            <Link 
              href="/messages"
              className="active:scale-95 duration-200 text-foreground/60 hover:text-primary transition-colors p-2 -ml-2 rounded-full"
            >
              <span className="text-xl font-bold">←</span>
            </Link>
            <div className="flex items-center gap-3">
              <img 
                alt="Product" 
                className="w-10 h-10 rounded-xl object-cover bg-surface-dim" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAerOqD_svXCulh47INvuTu-XkCGMlq4vAoQqYX41PeAuVEtfwOwpnGhOfHzq3Mvk6eauJxkXmzxEl-NwbDigeebYNzC5wPvnbuWRSQn7Sq3ClxLedgbQxXt82RjjG_hX2j2LqnQ3OerymskT_kG8OOscDr7HCFTiTV2uFqlLgXKL2NI9DCUMLXid0K_30l4ROPsbN3lV_dk6kOMnbHtTrEskpAqJQtsK-ICHvNQjkm2SnNt4rxJ2iFj-KRo1Zo-JesC9K0WuZDvaRx"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-sm leading-tight">Vintage Camera</span>
                <span className="font-bold text-xs text-primary-container">45,00€</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-surface-dim overflow-hidden border border-border">
              <img 
                alt="Seller" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTYg9J88m--hWY7MB2LagmJSbGO44WRPhvu65E7-HLD7KmVmMBjZEmTcdYg0a1lQHnxnkdGNNQo2l_Curl0n3CpiNaQaAvpisoYaQhfv9ViLgIJMjSeerdtvayE0zwr7Y93k4zqTdlHwTfaX4SqrTGneV7hazafvs9VgNxIQCCM97_T6k_6_zLbI5X7Ix3Va9RGWtNEH3Y8eIgopVf24GO4YGCub9Qeq6TsVzZSZaxfiVMkrRJnZU6UIaMe7ZTcBEEGQnIpk6qmnK5"
              />
            </div>
          </div>
        </div>
        <div className="bg-background px-5 py-2 flex justify-end border-t border-border/50">
          <button className="text-primary-container font-semibold text-xs active:scale-95 transition-transform">
            Marcar como vendido
          </button>
        </div>
      </header>

      {/* Chat Canvas */}
      <main className="flex-1 overflow-y-auto px-5 py-6 flex flex-col space-y-4 pb-32">
        <div className="text-center">
          <span className="text-xs text-foreground/50 font-medium py-2">Hoy, 14:30</span>
        </div>

        {/* Received Message */}
        <div className="flex flex-col items-start space-y-1 max-w-[85%]">
          <span className="font-semibold text-xs text-foreground/50 ml-2">Carlos</span>
          <div className="bg-surface-dim text-foreground p-3 rounded-2xl rounded-bl-none shadow-sm">
            <p className="text-base leading-snug">¡Hola! Estoy muy interesado en la cámara. ¿Sigue disponible para hoy?</p>
          </div>
        </div>

        {/* Sent Message */}
        <div className="flex flex-col items-end space-y-1 max-w-[85%] self-end">
          <div className="bg-primary-container text-white p-3 rounded-2xl rounded-br-none shadow-sm">
            <p className="text-base leading-snug">Hola Carlos, sí, todavía la tengo. ¿Te gustaría pasar a verla?</p>
          </div>
          <div className="flex items-center gap-1 mr-1">
            <span className="text-[10px] text-foreground/50 font-medium">14:35</span>
            <span className="text-primary text-[12px] font-bold">✓✓</span>
          </div>
        </div>

        <div className="text-center py-2 mt-4">
          <span className="text-xs text-foreground/50 font-medium">Oferta recibida</span>
        </div>

        {/* Offer Card Message */}
        <div className="flex flex-col items-start space-y-1 max-w-[85%] w-full">
          <div className="bg-white border border-border p-4 rounded-2xl rounded-bl-none shadow-sm w-full">
            <div className="flex flex-col items-center space-y-3">
              <span className="font-semibold text-sm text-foreground/70">Nueva oferta de Carlos</span>
              <span className="font-extrabold text-2xl text-foreground">40,00€</span>
              <button className="w-full bg-primary-container text-white py-2.5 rounded-xl font-bold text-sm active:scale-95 transition-transform shadow-md hover:bg-primary">
                Ver oferta
              </button>
            </div>
          </div>
        </div>

        {/* Quick Reply Chips */}
        <div className="flex gap-2 overflow-x-auto py-2 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <button className="whitespace-nowrap bg-background border border-border px-4 py-2 rounded-xl text-sm font-semibold hover:bg-surface-dim transition-colors text-foreground/80">¿Dónde quedamos?</button>
          <button className="whitespace-nowrap bg-background border border-border px-4 py-2 rounded-xl text-sm font-semibold hover:bg-surface-dim transition-colors text-foreground/80">¿Aceptas 35€?</button>
          <button className="whitespace-nowrap bg-background border border-border px-4 py-2 rounded-xl text-sm font-semibold hover:bg-surface-dim transition-colors text-foreground/80">¿Funciona bien?</button>
        </div>
      </main>

      {/* Sticky Input Bar */}
      <footer className="fixed bottom-0 left-0 w-full bg-background/90 backdrop-blur-md border-t border-border px-4 py-3 pb-8 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-3">
          <button className="text-foreground/50 hover:text-primary active:scale-90 transition-all p-1">
            <span className="text-2xl font-bold">+</span>
          </button>
          <div className="flex-1 bg-surface-dim rounded-full px-4 py-2 flex items-center">
            <input 
              className="bg-transparent border-none focus:ring-0 text-base w-full placeholder:text-foreground/40 outline-none" 
              placeholder="Escribe un mensaje..." 
              type="text"
            />
          </div>
          <button className="bg-primary-container text-white w-10 h-10 rounded-full flex items-center justify-center active:scale-90 transition-transform shadow-[0_4px_12px_rgba(255,127,80,0.3)] hover:bg-primary">
            <span className="text-lg">↗️</span>
          </button>
        </div>
      </footer>
    </div>
  )
}
