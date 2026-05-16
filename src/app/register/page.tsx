import Link from 'next/link'
import { signup } from '@/app/auth/actions'

export default function RegisterPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="font-sans text-foreground min-h-screen flex flex-col items-center bg-background antialiased">
      {/* TopAppBar */}
      <header className="flex items-center justify-between px-5 h-16 w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            aria-label="Volver"
            className="hover:bg-black/5 rounded-full transition-colors p-2 flex items-center justify-center active:scale-95 duration-200"
          >
            {/* Placeholder icon for back arrow */}
            <span className="text-primary font-bold text-xl">←</span>
          </Link>
          <h1 className="font-bold text-2xl tracking-tight text-foreground">Crear cuenta</h1>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="w-full max-w-[375px] px-5 flex flex-col gap-8 pb-10 mt-4">
        {/* Welcome Section */}
        <section>
          <p className="text-lg text-foreground/70">
            Únete a la comunidad de ArenitaShop y descubre tesoros costeros únicos.
          </p>
        </section>

        {/* Error Message */}
        {searchParams?.message && (
          <div className="w-full p-3 bg-red-100 text-red-700 text-sm rounded-lg text-center">
            {searchParams.message}
          </div>
        )}

        {/* Form Section */}
        <form className="flex flex-col gap-4" action={signup}>
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground pl-1" htmlFor="full_name">
              Nombre completo
            </label>
            <div className="relative">
              <input
                className="w-full bg-white border border-border rounded-2xl h-[56px] px-4 text-base text-foreground placeholder:text-border transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none"
                id="full_name"
                name="full_name"
                placeholder="Ej. Marina Sol"
                type="text"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground pl-1" htmlFor="email">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                className="w-full bg-white border border-border rounded-2xl h-[56px] px-4 text-base text-foreground placeholder:text-border transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none"
                id="email"
                name="email"
                placeholder="hola@arenita.com"
                type="email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground pl-1" htmlFor="password">
              Contraseña
            </label>
            <div className="relative">
              <input
                className="w-full bg-white border border-border rounded-2xl h-[56px] px-4 text-base text-foreground placeholder:text-border transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                required
                minLength={6}
              />
            </div>
            {/* Password Strength Indicator */}
            <div className="flex flex-col gap-1.5 px-1 mt-1">
              <div className="flex gap-2">
                <div className="h-1 rounded-full flex-1 bg-primary-container"></div>
                <div className="h-1 rounded-full flex-1 bg-primary-container"></div>
                <div className="h-1 rounded-full flex-1 bg-surface-dim"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>
                <span className="text-xs text-foreground/60 uppercase tracking-wider font-semibold">
                  Seguridad media
                </span>
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-foreground pl-1" htmlFor="confirm_password">
              Confirmar contraseña
            </label>
            <div className="relative">
              <input
                className="w-full bg-white border border-border rounded-2xl h-[56px] px-4 text-base text-foreground placeholder:text-border transition-all focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none"
                id="confirm_password"
                name="confirm_password"
                placeholder="••••••••"
                type="password"
                required
                minLength={6}
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-3 px-1 mt-2">
            <div className="relative flex items-center pt-1">
              <input
                className="w-5 h-5 rounded border-border text-primary-container focus:ring-primary-container"
                id="terms"
                name="terms"
                type="checkbox"
                required
              />
            </div>
            <label className="text-xs text-foreground/70 leading-relaxed font-semibold" htmlFor="terms">
              Acepto los{' '}
              <a className="text-primary-container font-bold hover:underline" href="#">
                Términos y Condiciones
              </a>{' '}
              y la política de privacidad.
            </label>
          </div>

          {/* CTA Button */}
          <button
            className="mt-4 w-full h-14 bg-primary-container text-white font-bold text-lg rounded-2xl shadow-[0_8px_20px_rgba(255,127,80,0.24)] active:scale-95 transition-transform duration-200"
            type="submit"
          >
            Crear mi cuenta
          </button>
        </form>

        {/* Social Register Divider */}
        <div className="flex items-center gap-4 py-2">
          <div className="h-[1px] flex-1 bg-border"></div>
          <span className="text-xs text-border font-semibold">O regístrate con</span>
          <div className="h-[1px] flex-1 bg-border"></div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
          <button className="w-14 h-14 rounded-2xl bg-white border border-border flex items-center justify-center hover:bg-surface-container transition-colors">
            <img
              alt="Google"
              className="w-6 h-6"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDc1pSSicUqc5mesuNTW-alPq1tOWWs6RLESMX-662udjNa4I9OhHSW8-AmCJ7PMm7Zc63Bg98qzn91ChObdD7WE6EpJrSB8qWLSaly3MvVJRn340gR_w5wQagx_8eyqv5GeZqD4XqYVMLHXCdcFlQGBznZoKiyAcJlRQYMheVdJn_csT7OtnWuRvbpu94aUvWHVyZ1ysuvgFDsJ3afAFp4zhdWYxwslZKDyhdPQ8IWpDkeFpZHuSyUGb9knyLq8RrT0CiqjqLMr4"
            />
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-8 text-center">
          <p className="text-base text-foreground/70">
            ¿Ya tienes cuenta?{' '}
            <Link className="text-secondary font-bold hover:text-primary-container transition-colors ml-1" href="/login">
              Inicia sesión
            </Link>
          </p>
        </footer>
      </main>

      {/* Bottom Ornament */}
      <div className="fixed bottom-0 left-0 w-full h-1 pointer-events-none bg-gradient-to-r from-primary-container via-secondary-container to-primary-container opacity-20"></div>
    </div>
  )
}
