import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen pb-16 antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-white/80 backdrop-blur-md border-b border-border">
        <Link
          href="/register"
          className="w-10 h-10 flex items-center justify-center bg-surface-dim rounded-full text-foreground active:scale-95 transition-all duration-200"
        >
          <span className="font-bold text-xl">←</span>
        </Link>
        <h1 className="font-bold text-lg text-foreground">Términos y Condiciones</h1>
        <div className="w-10" />
      </header>

      <main className="pt-20 px-6 max-w-2xl mx-auto">
        <div className="mb-6 text-center">
          <span className="text-5xl">📋</span>
          <p className="text-xs text-foreground/40 mt-2 font-semibold uppercase tracking-wider">Última actualización: Mayo 2025</p>
        </div>

        <div className="space-y-6 text-foreground/75 text-sm leading-relaxed">
          <section>
            <h2 className="font-extrabold text-foreground text-lg mb-2">1. Aceptación de los términos</h2>
            <p>
              Al registrarte y utilizar ArenitaShop, aceptas cumplir estos Términos y Condiciones.
              Si no estás de acuerdo con alguna parte de estos términos, no podrás utilizar nuestro servicio.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-foreground text-lg mb-2">2. Descripción del servicio</h2>
            <p>
              ArenitaShop es una plataforma de compraventa entre particulares. Actuamos como intermediario y
              no somos parte de las transacciones entre compradores y vendedores.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-foreground text-lg mb-2">3. Responsabilidades del usuario</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Publicar únicamente productos de tu propiedad o que tengas derecho a vender.</li>
              <li>Proporcionar información verídica sobre el estado y las características del producto.</li>
              <li>Respetar a otros usuarios durante cualquier comunicación.</li>
              <li>No publicar contenido ilegal, fraudulento o engañoso.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-extrabold text-foreground text-lg mb-2">4. Privacidad de datos</h2>
            <p>
              Recopilamos y tratamos tus datos personales de acuerdo con nuestra Política de Privacidad.
              Al registrarte, consientes el tratamiento de tus datos para la prestación del servicio.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-foreground text-lg mb-2">5. Productos prohibidos</h2>
            <p>Queda estrictamente prohibida la publicación de:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Armas, drogas o sustancias ilegales.</li>
              <li>Artículos falsificados o con derechos de autor vulnerados.</li>
              <li>Animales vivos.</li>
              <li>Cualquier producto cuya venta sea ilegal en el país del usuario.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-extrabold text-foreground text-lg mb-2">6. Limitación de responsabilidad</h2>
            <p>
              ArenitaShop no garantiza la veracidad de los anuncios publicados por los usuarios ni la calidad
              de los productos. Las transacciones se realizan bajo la responsabilidad exclusiva de compradores
              y vendedores.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-foreground text-lg mb-2">7. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos
              sobre cambios significativos a través del correo electrónico registrado.
            </p>
          </section>

          <section>
            <h2 className="font-extrabold text-foreground text-lg mb-2">8. Contacto</h2>
            <p>
              Si tienes preguntas sobre estos Términos, puedes contactarnos en:{' '}
              <span className="text-primary font-bold">soporte@arenitashop.com</span>
            </p>
          </section>
        </div>

        <div className="mt-10 mb-6">
          <Link
            href="/register"
            className="block w-full py-4 bg-primary-container text-white font-bold text-center rounded-2xl active:scale-95 transition-all shadow-lg shadow-primary-container/20"
          >
            Entendido, volver al registro
          </Link>
        </div>
      </main>
    </div>
  )
}
