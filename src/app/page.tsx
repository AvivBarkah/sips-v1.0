'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { LoginForm } from "@/components/login-form"
import { supabase } from "@/lib/supabase-client"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push("/dashboard")
      }
    }

    getSession()
  }, [router, supabase.auth])

  return (
    <div className="grid h-screen place-content-center">
      <LoginForm />
    </div>
  )
}
