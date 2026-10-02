import './Profile.css'

function VinylDisc() {
  return (
    <div className="vinyl-disc">
      {[0,1,2,3,4,5,6,7,8].map(i => (
        <div key={i} className="vd-groove" style={{ '--gi': i } as React.CSSProperties} />
      ))}
      <div className="vd-iridescent" />
      <div className="vd-specular" />
      <div className="vd-rim" />
      <div className="vd-label">
        <div className="vd-hole" />
      </div>
    </div>
  )
}

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="vinyl-shelf">
        {['/cover1.jpg', '/cover2.jpg', '/cover3.jpg'].map((src, i) => (
          <div key={i} className="vinyl-item">
            <VinylDisc />
            <div className="vinyl-sleeve">
              <img src={src} alt={`Cover ${i + 1}`} className="sleeve-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
