export default function Navbar() {
  return (
    <header className="landing-header">
      <div className="container">
        <nav className="navbar" aria-label="Navegación principal">
          {/* Brand Logo */}
          <a href="#" className="brand-logo" id="brand-logo">
            <div className="brand-icon-wrapper">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="brand-name">Nexus</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
