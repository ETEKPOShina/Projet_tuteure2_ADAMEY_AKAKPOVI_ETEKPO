'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/src/services/auth'

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { initialize, isInitialized, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    initialize()
  }, [])

  useEffect(() => {
    if (isInitialized && !isAuthenticated) {
      // Ne redirige pas automatiquement ici,
      // ProtectedRoute gère ça.
    }
  }, [isInitialized, isAuthenticated])

  if (!isInitialized) return null

  return <>{children}</>
}
