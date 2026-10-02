export default function VinylRecord() {
  return (
    <div className="vinyl-header-container" aria-hidden="true">
      <div className="vinyl-half-wrapper">
        <div className="vinyl-disk">
          {/* Subtle spinning vinyl lines / grooves */}
          <div className="vinyl-groove groove-1" />
          <div className="vinyl-groove groove-2" />
          <div className="vinyl-groove groove-3" />
          <div className="vinyl-groove groove-4" />
          <div className="vinyl-groove groove-5" />
          
          {/* Light reflection sheen */}
          <div className="vinyl-sheen" />
          <div className="vinyl-sheen sheen-opposite" />

          {/* Center Label */}
          <div className="vinyl-label">
            <div className="vinyl-label-ring" />
            <div className="vinyl-center-hole" />
            <div className="vinyl-label-text">LP • 33 RPM</div>
          </div>
        </div>
      </div>
      {/* Soft gradient fade into content */}
      <div className="vinyl-bottom-shadow" />
    </div>
  )
}
