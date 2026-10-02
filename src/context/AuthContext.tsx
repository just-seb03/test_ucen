import { createContext, useContext, useState, type ReactNode } from 'react'

export interface Usuario {
  usuario?: string
  email?: string
  nombre?: string
  [key: string]: any
}

export interface AuthContextType {
  usuario: Usuario | null
  login: (userData: Usuario) => void
  iniciarSesion: (nombreUsuario: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null)

  const login = (userData: Usuario) => {
    setUsuario(userData)
  }

  const iniciarSesion = (nombreUsuario: string) => {
    login({ usuario: nombreUsuario, nombre: nombreUsuario })
  }

  const logout = () => {
    setUsuario(null)
  }

  return (
    <AuthContext.Provider value={{ usuario, login, iniciarSesion, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider')
  }
  return context
}
