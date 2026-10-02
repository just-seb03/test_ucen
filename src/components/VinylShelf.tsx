import VinylDisc from './VinylDisc';

export interface VinylData {
  src: string;
  title: string;
  artist: string;
}

interface VinylShelfProps {
  covers: VinylData[];
  onHoverChange: (cover: VinylData | null) => void;
}

export default function VinylShelf({ covers, onHoverChange }: VinylShelfProps) {
  return (
    <div className="vinyl-shelf">
      {covers.map((cover, i) => (
        <div 
          key={i} 
          className="vinyl-item"
          onMouseEnter={() => onHoverChange(cover)}
          onMouseLeave={() => onHoverChange(null)}
        >
          <VinylDisc />
          <div className="vinyl-sleeve">
            <img src={cover.src} alt={`Cover ${i + 1}`} className="sleeve-img" />
          </div>
        </div>
      ))}
    </div>
  );
}
