// src/services/auth.ts
'use client'

import { create } from 'zustand'

/* =========================
   TYPES
========================= */

export type Role = 'ETUDIANT' | 'ENSEIGNANT' | 'ADMINISTRATEUR'

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  typeUtilisateur: Role
}

interface LoginCredentials {
  email: string
  password: string
}

interface SignupCredentials {
  email: string
  password: string
  firstName?: string
  lastName?: string
  typeUtilisateur: Role
  matricule?: string
  annee?: number
  filiereId?: string
  grade?: string
  departementId?: string
  specialite?: string
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  isInitialized: boolean

  initialize: () => void
  login: (credentials: LoginCredentials) => Promise<{ success: boolean; error?: string; user?: User }>
  signup: (credentials: SignupCredentials) => Promise<{ success: boolean; error?: string; user?: User }>
  logout: () => void

  isAdmin: () => boolean
  isTeacher: () => boolean
  isStudent: () => boolean
}

/* =========================
   CONFIG
========================= */

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL!

const ACCESS_TOKEN_KEY = 'accessToken'
const REFRESH_TOKEN_KEY = 'refreshToken'
const TYPE_UTILISATEUR_KEY = 'typeUtilisateur'

/* =========================
   UTILS
========================= */

function decodeJwt(token: string): any {
  try {
    const payload = token.split('.')[1]
    return JSON.parse(atob(payload))
  } catch {
    return null
  }
}

function isTokenExpired(token: string): boolean {
  const decoded = decodeJwt(token)
  if (!decoded?.exp) return true
  return Date.now() >= decoded.exp * 1000
}

function saveTokens(accessToken: string, refreshToken: string, typeUtilisateur?: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
  if (typeUtilisateur) {
    localStorage.setItem(TYPE_UTILISATEUR_KEY, typeUtilisateur)
  }
}

function clearTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
  localStorage.removeItem(REFRESH_TOKEN_KEY)
  localStorage.removeItem(TYPE_UTILISATEUR_KEY)
}

function getTypeUtilisateur(): string | null {
  return localStorage.getItem(TYPE_UTILISATEUR_KEY)
}

function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

/* =========================
   GRAPHQL HELPER
========================= */

async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const token = getAccessToken()

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ query, variables })
  })

  const json = await response.json()

  if (json.errors) {
    throw new Error(json.errors[0].message)
  }

  return json.data
}

/* =========================
   ZUSTAND STORE
========================= */

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  isInitialized: false,

  initialize: () => {
    const token = getAccessToken()

    if (!token || isTokenExpired(token)) {
      clearTokens()
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isInitialized: true
      })
      return
    }

    const decoded = decodeJwt(token)
    const typeUtilisateur = getTypeUtilisateur()
    console.log('Initialize - JWT decoded:', decoded)
    console.log('Initialize - typeUtilisateur from storage:', typeUtilisateur)

    set({
      token,
      isAuthenticated: true,
      user: {
        id: decoded.username || decoded.user_id,
        email: decoded.username || decoded.email,
        firstName: decoded.firstName || '',
        lastName: decoded.lastName || '',
        typeUtilisateur: (typeUtilisateur as Role) || 'ETUDIANT'
      },
      isInitialized: true
    })
  },

  login: async (credentials) => {
    set({ isLoading: true, error: null })

    const mutation = `
      mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          success
          message
          user { id email firstName lastName typeUtilisateur }
          accessToken
          refreshToken
        }
      }
    `

    try {
      const data = await graphqlRequest<any>(mutation, credentials)
      const result = data.login

      if (!result.success) {
        set({ isLoading: false, error: result.message })
        return { success: false, error: result.message }
      }

      saveTokens(result.accessToken, result.refreshToken, result.user.typeUtilisateur)

      set({
        user: result.user,
        token: result.accessToken,
        isAuthenticated: true,
        isLoading: false
      })

      return { success: true, user: result.user }
    } catch (error: any) {
      set({ isLoading: false, error: error.message })
      return { success: false, error: error.message }
    }
  },

  signup: async (credentials) => {
    set({ isLoading: true, error: null })

    const mutation = `
      mutation Signup(
        $email: String!,
        $password: String!,
        $firstName: String,
        $lastName: String,
        $typeUtilisateur: String!,
        $matricule: String,
        $annee: Int,
        $filiereId: ID,
        $grade: String,
        $departementId: ID,
        $specialite: String
      ) {
        signup(
          email: $email,
          password: $password,
          firstName: $firstName,
          lastName: $lastName,
          typeUtilisateur: $typeUtilisateur,
          matricule: $matricule,
          annee: $annee,
          filiereId: $filiereId,
          grade: $grade,
          departementId: $departementId,
          specialite: $specialite
        ) {
          success
          message
          user { id email firstName lastName typeUtilisateur }
          accessToken
          refreshToken
        }
      }
    `

    try {
      const data = await graphqlRequest<any>(mutation, credentials)
      const result = data.signup

      if (!result.success) {
        set({ isLoading: false, error: result.message })
        return { success: false, error: result.message }
      }

      // Debug logs
      console.log('Signup response user:', result.user)
      const decoded = decodeJwt(result.accessToken)
      console.log('JWT decoded payload:', decoded)

      saveTokens(result.accessToken, result.refreshToken, result.user.typeUtilisateur)

      set({
        user: result.user,
        token: result.accessToken,
        isAuthenticated: true,
        isLoading: false
      })

      return { success: true, user: result.user }
    } catch (error: any) {
      set({ isLoading: false, error: error.message })
      return { success: false, error: error.message }
    }
  },

  logout: () => {
    clearTokens()
    set({
      user: null,
      token: null,
      isAuthenticated: false
    })
  },

  isAdmin: () => get().user?.typeUtilisateur === 'ADMINISTRATEUR',
  isTeacher: () => get().user?.typeUtilisateur === 'ENSEIGNANT',
  isStudent: () => get().user?.typeUtilisateur === 'ETUDIANT'
}))
