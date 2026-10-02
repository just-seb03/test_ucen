import { useContext, useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  if (!authContext) {
    throw new Error('Login debe ser utilizado dentro de un AuthProvider')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    authContext.iniciarSesion(usuario)
    navigate(`/perfil/${encodeURIComponent(usuario)}`)
  }

  return (
    <main className="login-page">
      <div className="login-glow" aria-hidden="true" />

      <section className="login-card" aria-labelledby="login-title">
        <Link className="login-home-link" to="/">
          <span aria-hidden="true">←</span> Volver al inicio
        </Link>

        <div className="login-heading">
          <div className="login-mark" aria-hidden="true">
            U
          </div>
          <p className="login-eyebrow">Bienvenido de nuevo</p>
          <h1 id="login-title">Inicia sesión</h1>
          <p className="login-description">
            Ingresa tus credenciales para continuar.
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
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
              onChange={(e) => setUsuario(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
