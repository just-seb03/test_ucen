document.addEventListener('DOMContentLoaded', () => {
  const profilePage = document.querySelector('.profile-page');
  const usuario = profilePage?.dataset?.usuario || '';
  const hoverInfo = document.querySelector('.global-vinyl-hover-info');
  const hoverTitle = document.querySelector('.vinyl-hover-title');
  const hoverArtist = document.querySelector('.vinyl-hover-artist');
  const vinylItems = document.querySelectorAll('.vinyl-item');
  const likeBtn = document.querySelector('.like-btn');

  // Hover effect on vinyls
  vinylItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const title = item.dataset.title;
      const artist = item.dataset.artist;

      if (hoverTitle && title) hoverTitle.textContent = title;
      if (hoverArtist && artist) hoverArtist.textContent = artist;
      if (hoverInfo) hoverInfo.classList.add('visible');
    });

    item.addEventListener('mouseleave', () => {
      if (hoverInfo) hoverInfo.classList.remove('visible');
    });
  });

  // Likes & session handling
  if (usuario && likeBtn) {
    const storageKey = `likes_${usuario}`;
    const sessionKey = `hasLiked_${usuario}`;

    let currentLikes = parseInt(localStorage.getItem(storageKey) || '0', 10);
    let hasLiked = sessionStorage.getItem(sessionKey) === 'true';

    const updateLikeBtnUI = () => {
      if (hasLiked) {
        likeBtn.classList.add('liked');
        likeBtn.disabled = true;
        likeBtn.textContent = `❤️ Te gusta (${currentLikes})`;
      } else {
        likeBtn.classList.remove('liked');
        likeBtn.disabled = false;
        likeBtn.textContent = `❤️ Dar Like ${currentLikes > 0 ? `(${currentLikes})` : ''}`;
      }
    };

    updateLikeBtnUI();

    likeBtn.addEventListener('click', () => {
      if (!hasLiked) {
        currentLikes += 1;
        hasLiked = true;
        localStorage.setItem(storageKey, currentLikes.toString());
        sessionStorage.setItem(sessionKey, 'true');
        updateLikeBtnUI();
      }
    });

    // Record last visit timestamp
    localStorage.setItem(`last_visit_${usuario}`, new Date().toLocaleString());
  }
});
