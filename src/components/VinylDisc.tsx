import React from 'react';

export default function VinylDisc() {
  return (
    <div className="vinyl-disc">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
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
