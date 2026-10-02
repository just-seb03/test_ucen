import React from 'react';
import VinylDisc from './VinylDisc';

interface VinylShelfProps {
  covers: string[];
}

export default function VinylShelf({ covers }: VinylShelfProps) {
  return (
    <div className="vinyl-shelf">
      {covers.map((src, i) => (
        <div key={i} className="vinyl-item">
          <VinylDisc />
          <div className="vinyl-sleeve">
            {src ? (
              <img src={src} alt={`Cover ${i + 1}`} className="sleeve-img" />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
