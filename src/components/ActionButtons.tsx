import LoginButton from './LoginButton'
import { Link } from 'react-router-dom'

export default function ActionButtons() {
  return (
    <div className="hero-cta-group">
      <div className="hero-btn-row">
        <LoginButton />
        <Link to="#explorar" className="btn-explorar" id="hero-cta-explorar">
          Explorar
        </Link>
      </div>

      {/* Scroll hint arrow */}
      <div className="scroll-hint" aria-hidden="true">
        <svg
          className="scroll-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </div>
    </div>
  )
}
