import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import VinylShelf, { type VinylData } from '../components/VinylShelf'
import './Profile.css'

import { profileData as dataCris } from './Cris5604/data'
import { profileData as dataSeb } from './just_seb03/data'
import { profileData as dataMC } from './MCantuarias/data'

interface ProfileData {
  bg?: string;
  artistaName?: string;
  bio?: string;
  covers: VinylData[];
}

const profileDataMap: Record<string, ProfileData> = {
  'Cris5604': dataCris,
  'just_seb03': dataSeb,
  'MCantuarias': dataMC,
}

export default function Profile() {
  const { usuario } = useParams<{ usuario: string }>()
  const navigate = useNavigate();
  const [hoveredVinyl, setHoveredVinyl] = useState<VinylData | null>(null);
  
  // Estado para los likes que persiste en localStorage
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem(`likes_${usuario}`);
    return savedLikes ? parseInt(savedLikes, 10) : 0;
  });

  // Estado para saber si ya se dio like en esta sesión
  const [hasLiked, setHasLiked] = useState(() => {
    return sessionStorage.getItem(`hasLiked_${usuario}`) === 'true';
  });

  // Estado para deshabilitar hover durante la animación de entrada
  const [enableHover, setEnableHover] = useState(false);

  useEffect(() => {
    // La animación del shelf termina a los 1.6s (0.6s delay + 1s duración)
    const timer = setTimeout(() => {
      setEnableHover(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Guardar likes cuando cambien
  useEffect(() => {
    localStorage.setItem(`likes_${usuario}`, likes.toString());
  }, [likes, usuario]);

  const handleLogout = () => {
    navigate('/');
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      sessionStorage.setItem(`hasLiked_${usuario}`, 'true');
    }
  };

  // Obtenemos los datos del perfil actual o usamos valores por defecto
  const defaultData: ProfileData = { 
    bg: '',
    artistaName: 'Desconocido',
    bio: 'Sin biografía.',
    covers: [
      { src: '/cover1.jpg', title: 'Unknown Title', artist: 'Unknown Artist' },
      { src: '/cover2.jpg', title: 'Unknown Title', artist: 'Unknown Artist' },
      { src: '/cover3.jpg', title: 'Unknown Title', artist: 'Unknown Artist' }
    ] 
  }
  const data = (usuario && profileDataMap[usuario])
    ? profileDataMap[usuario]
    : defaultData

  return (
    <div className="profile-page">
      {data.bg && (
        <div 
          className="profile-background dimmable" 
          style={{ backgroundImage: `url(${data.bg})` }} 
        />
      )}

      {/* Info de vinilo al centro superior */}
      <div className="top-center-container">
        <div className={`global-vinyl-hover-info ${hoveredVinyl ? 'visible' : ''}`}>
          <h2 className="vinyl-hover-title">{hoveredVinyl?.title}</h2>
          <h3 className="vinyl-hover-artist">{hoveredVinyl?.artist}</h3>
        </div>
      </div>

      {/* Botón de cerrar sesión */}
      <button className="logout-btn dimmable" onClick={handleLogout}>Cerrar Sesión</button>

      {/* Izquierda: Cuadro de Usuario y Bio */}
      <div className="user-info-left dimmable">
        <h1 className="user-username-large">@{usuario}</h1>
        <p className="user-bio-text">{data.bio}</p>
      </div>

      {/* Derecha: Artista Favorito */}
      <div className="stats-section-right dimmable">
        <div className="favorite-artist-container">
          <h4 className="favorite-artist-title">Artista Favorito</h4>
          <h2 className="favorite-artist-name">{data.artistaName}</h2>
          <button 
            className={`like-btn ${hasLiked ? 'liked' : ''}`} 
            onClick={handleLike}
            disabled={hasLiked}
          >
            {hasLiked ? `❤️ Te gusta (${likes})` : `❤️ Dar Like ${likes > 0 ? `(${likes})` : ''}`}
          </button>
        </div>
      </div>

      {/* Estante de vinilos */}
      <div style={{ pointerEvents: enableHover ? 'auto' : 'none' }}>
        <VinylShelf covers={data.covers} onHoverChange={setHoveredVinyl} />
      </div>
    </div>
  )
}
