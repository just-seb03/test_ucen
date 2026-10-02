import { useContext, useState, useRef, useEffect, type KeyboardEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import './Login.css'

export default function Login() {
  const authContext = useContext(AuthContext)
  const navigate = useNavigate()
  
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [step, setStep] = useState<'username' | 'password'>('username')

  const userRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (step === 'username') {
      userRef.current?.focus()
    } else {
      // Small delay to allow the flip animation to start
      setTimeout(() => {
        passRef.current?.focus()
      }, 400)
    }
  }, [step])

  if (!authContext) {
    throw new Error('Login debe ser utilizado dentro de un AuthProvider')
  }

  const validUsers = ['cristian.vegag', 'mcantuarias', 'just_seb03']

  const handleUserKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const cleanUser = usuario.trim().toLowerCase()
      if (!cleanUser) {
        setError('Por favor ingresa un usuario')
        return
      }
      if (!validUsers.includes(cleanUser)) {
        setError('El usuario no existe')
        return
      }
      setStep('password')
      setError('')
    }
  }

  const handlePassKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      submitLogin()
    }
  }

  const submitLogin = () => {
    setError('')
    const cleanUser = usuario.trim()

    if (cleanUser.toLowerCase() === 'cristian.vegag') {
      if (password !== '12345') {
        setError('Contraseña incorrecta')
        return
      }
      authContext.iniciarSesion('Cris5604')
      navigate('/perfil/Cris5604')
      return
    }

    if (cleanUser.toLowerCase() === 'mcantuarias') {
      if (password !== '1234567') {
        setError('Contraseña incorrecta')
        return
      }
      authContext.iniciarSesion('MCantuarias')
      navigate('/perfil/MCantuarias')
      return
    }

    if (cleanUser.toLowerCase() === 'just_seb03') {
      if (password !== '1234') {
        setError('Contraseña incorrecta')
        return
      }
      authContext.iniciarSesion('just_seb03')
      navigate('/perfil/just_seb03')
      return
    }

    // Si llega acá y no es ninguno, es un fallback por si acaso, 
    // pero ya lo bloqueamos en el primer paso.
    setError('El usuario no existe o la contraseña es incorrecta')
  }

  return (
    <main className="login-page">
      <Link className="login-home-link" to="/">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Volver al inicio
      </Link>

      <div className={`cassette-scene ${step === 'password' ? 'flipped' : ''}`}>
        <div className="cassette">
          {/* Frente: Usuario */}
          <div className="cassette-face cassette-front">
            <div className="cassette-plastic">
              <div className="screw top-left"></div>
              <div className="screw top-right"></div>
              <div className="screw bottom-left"></div>
              <div className="screw bottom-right"></div>
              
              <div className="cassette-label-paper">
                <div className="cassette-title">A-SIDE</div>
                <input
                  ref={userRef}
                  type="text"
                  className="marker-input"
                  placeholder="Ingresa tu usuario"
                  value={usuario}
                  onChange={(e) => {
                    setUsuario(e.target.value)
                    setError('')
                  }}
                  onKeyDown={handleUserKeyDown}
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
              <div className="cassette-window">
                <div className="spool left-spool">
                  <div className="spool-hole"></div>
                </div>
                <div className="spool right-spool">
                  <div className="spool-hole"></div>
                </div>
              </div>
              <div className="cassette-bottom-trapezoid">
                <div className="tape-head-opening"></div>
              </div>
            </div>
          </div>

          {/* Dorso: Contraseña */}
          <div className="cassette-face cassette-back">
            <div className="cassette-plastic">
              <div className="screw top-left"></div>
              <div className="screw top-right"></div>
              <div className="screw bottom-left"></div>
              <div className="screw bottom-right"></div>
              
              <div className="cassette-label-paper b-side">
                <div className="cassette-title">B-SIDE</div>
                <input
                  ref={passRef}
                  type="password"
                  className="marker-input"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setError('')
                  }}
                  onKeyDown={handlePassKeyDown}
                  autoComplete="new-password"
                />
              </div>
              <div className="cassette-window">
                <div className="spool right-spool"> {/* Inverted for B-side visual */}
                  <div className="spool-hole"></div>
                </div>
                <div className="spool left-spool">
                  <div className="spool-hole"></div>
                </div>
              </div>
              <div className="cassette-bottom-trapezoid">
                <div className="tape-head-opening"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`login-error-msg ${error ? 'show' : ''}`}>
        {error}
      </div>

      <div className="login-instructions">
        Presiona <strong>Enter</strong> para continuar
      </div>
    </main>
  )
}
