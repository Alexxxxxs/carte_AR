// Active les interactions AR après que le DOM soit prêt
document.addEventListener('DOMContentLoaded', () => {
  // Références A-Frame / MindAR
  const sceneEl = document.querySelector('a-scene');
  const target = document.querySelector('#mindar-target-0');
  const soundEntity = document.querySelector('#scan-sound');
  const backBtn = document.querySelector('#back-btn');

  // Bouton de retour vers l'accueil
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  }

  // Quitte si la scène ou les entités critiques manquent
  if (!sceneEl || !target || !soundEntity) return;

  // Lance l'écoute une fois la scène A-Frame chargée
  sceneEl.addEventListener('loaded', () => {
    const sound = soundEntity.components?.sound;
    if (!sound) return;

    // Joue le son à chaque détection du marqueur
    target.addEventListener('targetFound', () => {
      sound.stopSound();
      sound.playSound();
    });
  });
});
