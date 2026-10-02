import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'

function Perfil() {
  return (
    <div style={{ padding: '40px', textAlign: 'center', color: '#fff' }}>
      <h1>Perfil</h1>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil/:usuario" element={<Perfil />} />
    </Routes>
  )
}
