import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Cris5604 from './pages/Cris5604/Cris5604'
import MCantuarias from './pages/MCantuarias'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/perfil/Cris5604" element={<Cris5604 />} />
      <Route path="/perfil/MCantuarias" element={<MCantuarias />} />
      <Route path="/MCantuarias" element={<MCantuarias />} />
      <Route path="/perfil/:usuario" element={<Profile />} />
    </Routes>
  )
}
