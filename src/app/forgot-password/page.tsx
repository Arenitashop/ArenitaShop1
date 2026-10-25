'use client'

import Link from 'next/link'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/update-password`,
    })

    if (resetError) {
      setError(resetError.message)
    } else {
      setSent(true)
    }
    setLoading(false)
  }

  return (
    <div className="font-sans text-foreground min-h-screen flex flex-col justify-between antialiased bg-background">
      <main className="flex-grow flex flex-col items-center px-6 pt-16 pb-6 w-full max-w-[375px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-orange-100 mb-4 shadow-sm">
            <span className="text-3xl">🔑</span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight mb-2">
            Recuperar contraseña
          </h1>
          <p className="text-sm text-foreground/60 max-w-[280px] mx-auto">
            Te enviaremos un enlace para restablecer tu contraseña al correo que tengas registrado.
          </p>
        </div>

        {sent ? (
          /* Success State */
          <div className="w-full flex flex-col items-center text-center gap-4">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-2">
              <span className="text-4xl">✅</span>
            </div>
            <h2 className="font-extrabold text-xl text-foreground">¡Correo enviado!</h2>
            <p className="text-foreground/60 text-sm max-w-[280px]">
              Revisa tu bandeja de entrada y sigue las instrucciones del correo para restablecer tu contraseña.
            </p>
            <Link
              href="/login"
              className="mt-4 w-full py-3 bg-primary-container text-white font-bold text-base rounded-2xl text-center active:scale-95 transition-all shadow-lg shadow-primary-container/20"
            >
              Volver al inicio de sesión
            </Link>
          </div>
        ) : (
          /* Form */
          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="w-full p-3 bg-red-100 text-red-700 text-sm rounded-xl text-center font-semibold">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <label className="text-sm font-semibold text-foreground/70 px-1" htmlFor="email">
                Correo electrónico
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-6 py-3 bg-white border border-border rounded-2xl focus:border-secondary focus:ring-4 focus:ring-secondary/5 transition-all outline-none placeholder:text-border"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-br from-primary-container to-primary text-white font-semibold text-lg py-3 rounded-2xl shadow-lg shadow-primary/20 active:scale-95 transition-transform duration-150 disabled:opacity-60"
            >
              {loading ? 'Enviando...' : 'Enviar enlace'}
            </button>
          </form>
        )}
      </main>

      <footer className="w-full max-w-[375px] mx-auto pb-10 px-6 text-center">
        <p className="text-base text-foreground/70">
          ¿Recordaste tu contraseña?{' '}
          <Link className="text-sm font-bold text-primary hover:underline" href="/login">
            Iniciar sesión
          </Link>
        </p>
      </footer>
    </div>
  )
}
