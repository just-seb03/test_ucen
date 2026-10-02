import LoginButton from './LoginButton'

interface ActionButtonsProps {
  opacity: number
  isScrolled: boolean
}

export default function ActionButtons({ opacity, isScrolled }: ActionButtonsProps) {
  return (
    <div className="hero-cta-group">
      <div className="hero-btn-row" style={{ opacity }}>
        <LoginButton />
        <a href="#explorar" className="btn-explorar" id="hero-cta-explorar">
          Explorar
        </a>
      </div>

      <button
        type="button"
        className={`scroll-hint${isScrolled ? ' is-scrolled' : ''}`}
        aria-label={isScrolled ? 'Volver al inicio' : 'Desplazarse hacia abajo'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
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
      </button>
    </div>
  )
}
