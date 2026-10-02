import { useParams } from 'react-router-dom'
import VinylShelf from '../components/VinylShelf'
import './Profile.css'

import { profileData as dataCris } from './Cris5604/data'
import { profileData as dataSeb } from './just_seb03/data'
import { profileData as dataMC } from './MCantuarias/data'

const profileDataMap: Record<string, { covers: string[] }> = {
  'Cris5604': dataCris,
  'just_seb03': dataSeb,
  'MCantuarias': dataMC,
}

export default function Profile() {
  const { usuario } = useParams<{ usuario: string }>()

  // Obtenemos los datos del perfil actual o usamos valores por defecto
  const data = (usuario && profileDataMap[usuario])
    ? profileDataMap[usuario]
    : { covers: ['/cover1.jpg', '/cover2.jpg', '/cover3.jpg'] }

  return (
    <div className="profile-page">
      {/* El título del perfil, se puede estilizar a gusto */}
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', color: 'white', zIndex: 10 }}>
        <h2>Perfil de {usuario || 'Usuario'}</h2>
      </div>

      <VinylShelf covers={data.covers} />
    </div>
  )
}
