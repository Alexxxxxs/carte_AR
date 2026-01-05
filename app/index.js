// Initialise les interactions après chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
  // Récupère l'overlay de la carte et les boutons d'ouverture/fermeture
  const cardOverlay = document.querySelector('#card-overlay');
  const closeOverlayBtn = document.querySelector('#close-overlay-btn');
  const viewCardBtn = document.querySelector('#view-card-btn');

  // Ouvre l'overlay quand on clique sur « Voir la carte »
  if (viewCardBtn && cardOverlay) {
    viewCardBtn.addEventListener('click', () => {
      cardOverlay.classList.remove('hidden');
    });
  }

  // Ferme l'overlay via le bouton « Fermer »
  if (closeOverlayBtn && cardOverlay) {
    closeOverlayBtn.addEventListener('click', () => {
      cardOverlay.classList.add('hidden');
    });
  }
});
