import { useEffect, useState } from 'react'
import Title from '../components/Title'
import ActionButtons from '../components/ActionButtons'
import VinylRecord from '../components/VinylRecord'
import cover4 from './Covers/cover4.jpg'
import cover5 from './Covers/cover5.jpg'
import cover6 from './Covers/cover6.jpg'
import './Landing.css'

const recommendations = [
  { src: cover4, title: 'What Happened to the Heart?', artist: 'AURORA' },
  { src: cover5, title: 'Absolution', artist: 'Muse' },
  { src: cover6, title: 'Broken Machine', artist: 'Nothing But Thieves' },
]

export default function Landing() {
  const [titleOpacity, setTitleOpacity] = useState(1)
  const isScrolled = titleOpacity === 0

  useEffect(() => {
    const updateTitleOpacity = () => {
      setTitleOpacity(Math.max(0, 1 - window.scrollY / 180))
    }

    updateTitleOpacity()
    window.addEventListener('scroll', updateTitleOpacity, { passive: true })

    return () => window.removeEventListener('scroll', updateTitleOpacity)
  }, [])

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
            <div className="hero-title-fade" style={{ opacity: titleOpacity }}>
              <Title />
            </div>
            <ActionButtons opacity={titleOpacity} isScrolled={isScrolled} />
          </div>
        </section>
        <section id="explorar" className="about-section" aria-labelledby="about-title">
          <div className="about-layout">
            <div className="about-card">
              <h2 id="about-title">Tus gustos cuentan historias</h2>
              <p>
                Es una comunidad para compartir lo que te apasiona, mostrar
                tus discos y descubrir los gustos de otras personas. Encuentra
                nuevas recomendaciones y conecta con quienes disfrutan de lo mismo
                que tú.
              </p>
            </div>
            <aside className="recommendations-card" aria-labelledby="recommendations-title">
              <h2 id="recommendations-title">Recomendaciones de música</h2>
              <ul className="recommendations-list">
                {recommendations.map(({ src, title, artist }) => (
                  <li className="recommendation-item" key={title}>
                    <img src={src} alt="" className="recommendation-cover" />
                    <div>
                      <h3>{title}</h3>
                      <p>{artist}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      </main>

    </div>
  )
}
