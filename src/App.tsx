import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'

function Perfil() {
  return null
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil/:usuario" element={<Perfil />} />
    </Routes>
  )
}

export default App
