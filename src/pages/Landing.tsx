import Navbar from '../components/Navbar'
import Title from '../components/Title'
import ActionButtons from '../components/ActionButtons'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing-page">
      {/* Ambient background glows */}
      <div className="ambient-glow-1" aria-hidden="true" />
      <div className="ambient-glow-2" aria-hidden="true" />

      {/* Top Navbar with right-aligned Login button */}
      <Navbar />

      {/* Main Content with Title and 2 Buttons */}
      <main id="main-content">
        <section className="hero-section">
          <div className="container hero-content">
            <Title />
            <ActionButtons />
          </div>
        </section>
      </main>
    </div>
  )
}
