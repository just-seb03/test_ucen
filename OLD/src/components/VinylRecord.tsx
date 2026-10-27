import vinylSticker from '../assets/vinyl-sticker.jpg'

export default function VinylRecord() {
  return (
    <div className="vinyl-disk-wrapper">
      {/* 20 grooves concéntricos */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="vinyl-groove"
          style={{ '--groove-i': i } as React.CSSProperties}
        />
      ))}

      {/* Reflejo iridiscente arcoíris */}
      <div className="vinyl-iridescent" />

      {/* Brillo especular principal */}
      <div className="vinyl-specular" />

      {/* Brillo especular secundario */}
      <div className="vinyl-specular-2" />

      {/* Borde rim */}
      <div className="vinyl-rim" />

      {/* Sticker / etiqueta central — gira junto con el disco */}
      <div className="vinyl-label">
        <img
          src={vinylSticker}
          alt="NEXUS vinyl label"
          className="vinyl-label-img"
          draggable={false}
        />
        {/* Agujero central encima de la imagen */}
        <div className="vinyl-label-hole" />
      </div>
    </div>
  )
}
