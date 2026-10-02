import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
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
            Ingresa tus datos para continuar.
          </p>
        </div>

        <form className="login-form" onSubmit={(event) => event.preventDefault()}>
          <div className="login-field">
            <label htmlFor="login-email">Correo electrónico</label>
            <input
              autoComplete="email"
              id="login-email"
              name="email"
              placeholder="nombre@correo.com"
              required
              type="email"
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
