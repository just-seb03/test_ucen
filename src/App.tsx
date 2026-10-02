import { Routes, Route, useParams } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import MCantuarias from './pages/MCantuarias'

function Perfil() {
  const { usuario } = useParams()
  if (usuario?.toLowerCase() === 'mcantuarias') {
    return <MCantuarias />
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center', color: '#fff' }}>
      <h1>Perfil de {usuario}</h1>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil/MCantuarias" element={<MCantuarias />} />
      <Route path="/MCantuarias" element={<MCantuarias />} />
      <Route path="/perfil/:usuario" element={<Perfil />} />
    </Routes>
  )
}

