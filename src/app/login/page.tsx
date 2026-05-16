import Link from 'next/link'
import { login } from '@/app/auth/actions'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  return (
    <div className="font-sans text-foreground min-h-screen flex flex-col justify-between antialiased bg-background">
      {/* Main Content Canvas */}
      <main className="flex-grow flex flex-col items-center px-6 pt-16 pb-6 w-full max-w-[375px] mx-auto">
        {/* Header / Logo Area */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-primary-fixed mb-2 shadow-sm bg-orange-100">
            {/* Placeholder icon */}
            <span className="text-primary text-3xl">☀️</span>
          </div>
          <h1 className="text-4xl text-primary mb-1 tracking-tight italic font-extrabold">ArenitaShop</h1>
          <p className="text-sm text-foreground/70">Compra y vende cerca de ti</p>
        </div>

        {/* Error Message */}
        {searchParams?.message && (
          <div className="w-full mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg text-center">
            {searchParams.message}
          </div>
        )}

        {/* Login Form */}
        <form className="w-full space-y-6" action={login}>
          {/* Email Field */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-foreground/70 px-1" htmlFor="email">
              Correo electrónico
            </label>
            <div className="relative">
              <input
                className="w-full px-6 py-3 bg-white border border-border rounded-2xl focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none placeholder:text-border"
                id="email"
                name="email"
                placeholder="tu@email.com"
                type="email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-foreground/70 px-1" htmlFor="password">
              Contraseña
            </label>
            <div className="relative">
              <input
                className="w-full px-6 py-3 bg-white border border-border rounded-2xl focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none placeholder:text-border"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                required
              />
            </div>
            <div className="text-right mt-1">
              <a className="text-sm font-semibold text-secondary hover:text-secondary-container transition-colors" href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          {/* Action Button */}
          <button
            className="w-full bg-gradient-to-br from-primary-container to-primary text-white font-semibold text-lg py-3 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-transform duration-150"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>

        {/* Divider */}
        <div className="w-full flex items-center gap-2 my-10">
          <div className="h-[1px] flex-grow bg-border"></div>
          <span className="text-sm font-semibold text-border">o continúa con</span>
          <div className="h-[1px] flex-grow bg-border"></div>
        </div>

        {/* OAuth Section */}
        <div className="w-full">
          <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white border border-border rounded-2xl hover:bg-surface-container transition-colors active:scale-95 duration-150">
            <img
              alt="Google"
              className="w-5 h-5"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpFvDmR8E4WdH_lI9nmbmJ8s-FgDej9rSEGw2-k3CnqRAYxE5-RpY4wSoa8ZgGOQVQrt6LwPQXa3QB3UXRIiuEFVUBVs0LKuIP5TaZG13P183_beeCdkkPpUOeyCJ6213M5jBQYozH6-J6lDgHUXm4RZU1EKpuqW0C1h2NMyL8Apxd4vornHy72O0iLJ3rZlKY2yUzLjRS_JpIXVMR_KV1Hqg-216g6BxrObQr3u21P_QJxuMAD1ZYWai95lln2zo7vkBvnp5IiM7g"
            />
            <span className="text-sm font-semibold text-foreground">Continuar con Google</span>
          </button>
        </div>
      </main>

      {/* Bottom Footer Section */}
      <footer className="w-full max-w-[375px] mx-auto pb-10 px-6 text-center">
        <p className="text-base text-foreground/70">
          ¿No tienes cuenta?{' '}
          <Link className="text-sm font-bold text-primary hover:underline" href="/register">
            Regístrate
          </Link>
        </p>
      </footer>
    </div>
  )
}
