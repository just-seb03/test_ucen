import Navbar from '../components/Navbar'
import Title from '../components/Title'
import ActionButtons from '../components/ActionButtons'
import VinylRecord from '../components/VinylRecord'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing-page">
      {/* Vinyl record half covering the top half */}
      <VinylRecord />

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
