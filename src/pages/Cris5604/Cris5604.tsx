import VinylShelf from '../../components/VinylShelf'
import { profileData } from './data'
import '../Profile.css'
import './Cris5604.css'

export default function Cris5604() {
  return (
    <main className="profile-page cris5604-page">
      <h1 className="cris5604-heading">Perfil de Cris5604</h1>
      <VinylShelf covers={profileData.covers} />
    </main>
  )
}
