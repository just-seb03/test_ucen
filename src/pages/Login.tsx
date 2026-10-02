import { useContext, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  if (!authContext) {
    throw new Error('Login debe ser utilizado dentro de un AuthProvider')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    const cleanUser = usuario.trim()

    if (cleanUser.toLowerCase() === 'cristian.vegag') {
      if (password !== '12345') {
        setError('Contraseña incorrecta para el usuario cristian.vegag')
        return
      }
      authContext.iniciarSesion('Cris5604')
      navigate('/perfil/Cris5604')
      return
    }

    if (cleanUser.toLowerCase() === 'mcantuarias') {
      if (password !== '1234567') {
        setError('Contraseña incorrecta para el usuario MCantuarias')
        return
      }
      authContext.iniciarSesion('MCantuarias')
      navigate('/perfil/MCantuarias')
      return
    }

    authContext.iniciarSesion(cleanUser)
    navigate(`/perfil/${encodeURIComponent(cleanUser)}`)
  }

  return (
    <main className="login-page">
      <div className="login-glow" aria-hidden="true" />

      <section className="login-card" aria-labelledby="login-title">
        <Link className="login-home-link" to="/">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver al inicio
        </Link>

        <div className="login-heading">
          {/* Ícono: disco de vinilo simplificado */}
          <div className="login-mark" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
              <line x1="12" y1="2" x2="12" y2="5" />
              <line x1="12" y1="19" x2="12" y2="22" />
              <line x1="2" y1="12" x2="5" y2="12" />
              <line x1="19" y1="12" x2="22" y2="12" />
            </svg>
          </div>
          <p className="login-eyebrow">Bienvenido de nuevo</p>
          <h1 id="login-title">Inicia sesión</h1>
          <p className="login-description">
            Ingresa tus credenciales para continuar.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          {error && (
            <div className="login-error" role="alert">
              {error}
            </div>
          )}

          <div className="login-field">
            <label htmlFor="login-usuario">Nombre de usuario</label>
            <input
              autoComplete="username"
              id="login-usuario"
              name="usuario"
              placeholder="Ingresa tu nombre de usuario"
              required
              type="text"
              value={usuario}
              onChange={(e) => {
                setUsuario(e.target.value)
                if (error) setError('')
              }}
            />
          </div>

          <div className="login-field">
            <label htmlFor="login-password">Contraseña</label>
            <input
              autoComplete="current-password"
              id="login-password"
              name="password"
              placeholder="Ingresa tu contraseña"
              required
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                if (error) setError('')
              }}
            />
          </div>

          <button className="login-submit" type="submit">
            Iniciar sesión
          </button>
        </form>
      </section>
    </main>
  )
}
