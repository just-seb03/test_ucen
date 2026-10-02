import './MCantuarias.css'

export default function MCantuarias() {
  return (
    <div className="mcantuarias-container">
      <button
        type="button"
        id="btn-inutil"
        className="btn-inutil"
        onClick={(e) => e.preventDefault()}
      >
        Botón Inútil
      </button>
    </div>
  )
}
