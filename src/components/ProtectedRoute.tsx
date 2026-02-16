'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth, Role } from '@/src/services/auth'

interface Props {
  children: React.ReactNode
  requiredRole?: Role
}

export default function ProtectedRoute({ children, requiredRole }: Props) {
  const { isAuthenticated, isInitialized, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isInitialized) return

    if (!isAuthenticated) {
      router.replace('/login')
      return
    }

    if (requiredRole && user?.typeUtilisateur !== requiredRole) {
      console.log('Access denied - User:', user)
      console.log('Required role:', requiredRole)
      console.log('User typeUtilisateur:', user?.typeUtilisateur)
      router.replace(`/access-denied?requiredRole=${requiredRole}&userRole=${user?.typeUtilisateur}`)
    }
  }, [isInitialized, isAuthenticated, requiredRole, user])

  if (!isInitialized || !isAuthenticated) return null

  return <>{children}</>
}
