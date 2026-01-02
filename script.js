AFRAME.registerComponent('gestion-carte', {
    init: function () {
      console.log("--- Initialisation du composant gestion-carte ---");
  
      // --- 1. Gestion des événements du marqueur (Détection / Perte) ---
      // 'this.el' fait référence à la balise <a-marker>
      
      this.el.addEventListener('markerFound', () => {
        console.log("✅ Pattern détecté ! La carte est visible.");
      });
  
      this.el.addEventListener('markerLost', () => {
        console.log("❌ Pattern perdu ! La carte n'est plus visible.");
      });
  
      // --- 2. Création du CONTOUR (Le rectangle rouge) ---
      const contour = document.createElement('a-plane');
      contour.setAttribute('color', 'red');
      contour.setAttribute('width', '1.1');
      contour.setAttribute('height', '0.7');
      contour.setAttribute('rotation', '-90 0 0');
      contour.setAttribute('position', '0 0 0');
      
      this.el.appendChild(contour);
      console.log("🟥 Rectangle rouge (contour) chargé avec succès.");
  
      // --- 3. Création du FOND (Le rectangle bleu) ---
      const fond = document.createElement('a-plane');
      fond.setAttribute('color', 'blue');
      fond.setAttribute('width', '1');
      fond.setAttribute('height', '0.6');
      fond.setAttribute('rotation', '-90 0 0');
      fond.setAttribute('position', '0 0.02 0'); // Anti Z-Fighting
  
      this.el.appendChild(fond);
      console.log("🟦 Rectangle bleu (fond) chargé avec succès.");
    }
  });