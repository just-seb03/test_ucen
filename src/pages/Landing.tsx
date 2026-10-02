import Title from '../components/Title'
import ActionButtons from '../components/ActionButtons'
import VinylRecord from '../components/VinylRecord'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing-page">

      {/* TOP HALF: Vinyl record section */}
      <div className="vinyl-section">
        <VinylRecord />
      </div>

      {/* BOTTOM HALF: Hero content */}
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
