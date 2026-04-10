"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/Button"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      if (!supabase) {
        throw new Error("Supabase is not connected. Are the Vercel environment variables set?")
      }

      const { error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (loginError) {
        setError(loginError.message)
      } else {
        router.push("/admin")
        router.refresh()
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred")
    } finally {
      // If we got an error, stop loading. If successful, it'll transition away.
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-[2rem] shadow-2xl border border-slate-100">
        <div className="text-center mb-10">
          <img 
            src="/logo.png" 
            alt="Sparkwell Creative" 
            className="h-16 md:h-20 w-auto object-contain mx-auto mb-4"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden">
            <h1 className="text-3xl font-bold text-primary tracking-tighter mb-2">SPARKWELL<span className="text-secondary">.</span></h1>
          </div>
          <p className="text-muted-foreground text-sm font-medium">Admin Dashboard Access</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Email address</label>
            <input 
              required
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sparkwell.agency" 
              className="w-full bg-slate-50 border-transparent border focus:border-secondary rounded-2xl px-6 py-4 text-sm focus:outline-none transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-primary ml-1">Password</label>
            <input 
              required
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-slate-50 border-transparent border focus:border-secondary rounded-2xl px-6 py-4 text-sm focus:outline-none transition-all"
            />
          </div>

          <Button 
            disabled={loading}
            type="submit" 
            className="w-full rounded-2xl h-14"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Sign In"}
          </Button>

          {error && (
            <p className="text-red-500 text-xs font-bold text-center mt-4">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
