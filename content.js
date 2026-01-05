(function(global) {
  function registerComponents(config) {
    const { assets, links } = config;

    AFRAME.registerComponent('cursor-listener', {
      init: function () {
        this.el.addEventListener('mouseenter', function () {
          this.setAttribute('scale', '1.2 1.2 1.2');
        });
        this.el.addEventListener('mouseleave', function () {
          this.setAttribute('scale', '1 1 1');
        });
      }
    });

    AFRAME.registerComponent('gestion-carte', {
      init: function () {
        console.log('--- Initialisation de la Carte Alexandre Dubois ---');
        this.config = config;

        // Écouter les événements du marqueur
        this.el.addEventListener('markerFound', () => {
          console.log('✅ Pattern trouvé !');
        });

        this.el.addEventListener('markerLost', () => {
          console.log('❌ Pattern perdu !');
        });

        this.creerBandeauEtudes();
        this.creerTexteHaut();
        this.creerReseauxBas();
      },

      creerBandeauEtudes: function() {
        const bandeau = document.createElement('a-text');
        bandeau.setAttribute('value', 'BUT MMI 3ème année, 2025 - 2026');
        bandeau.setAttribute('align', 'center');
        bandeau.setAttribute('color', '#2b3d50');
        bandeau.setAttribute('width', '8');
        bandeau.setAttribute('rotation', '-90 0 0');
        bandeau.setAttribute('position', '0 0.3 -0.8');
        bandeau.setAttribute('scale', '0.8 0.8 0.8');

        this.el.appendChild(bandeau);
      },

      creerTexteHaut: function() {
        const { assets } = this.config;
        const groupeTexte = document.createElement('a-entity');
        groupeTexte.setAttribute('position', '0 0.3 0.2');

        const logoNom = document.createElement('a-plane');
        logoNom.setAttribute('src', assets.logos.main);
        logoNom.setAttribute('height', '0.5');
        logoNom.setAttribute('width', '0.5');
        logoNom.setAttribute('rotation', '-90 0 0');
        logoNom.setAttribute('position', '0 0 0');

        groupeTexte.appendChild(logoNom);
        this.el.appendChild(groupeTexte);
      },

      creerReseauxBas: function() {
        const { assets, links } = this.config;
        const groupeReseaux = document.createElement('a-entity');
        groupeReseaux.setAttribute('position', '0 -0.2 0.5');

        const reseaux = [
          { x: -0.5, assetId: assets.logos.linkedin, url: links.linkedin },
          { x: 0, assetId: assets.logos.instagram, url: links.instagram },
          { x: 0.5, assetId: assets.logos.github, url: links.github }
        ];

        reseaux.forEach((social, index) => {
          const boule = document.createElement('a-circle');
          boule.setAttribute('radius', '0.2');
          boule.setAttribute('rotation', '-90 0 0');
          boule.setAttribute('position', `${social.x} 0 0`);
          boule.setAttribute('material', {
            src: social.assetId,
            color: '#ffffff',
            transparent: true
          });
          boule.classList.add('clickable');
          boule.setAttribute('cursor-listener', '');
          boule.addEventListener('click', () => {
            window.open(social.url, '_blank');
          });

          boule.setAttribute('animation', {
            property: 'scale',
            from: '0 0 0',
            to: '1 1 1',
            dur: 800,
            delay: index * 200,
            easing: 'easeOutElastic'
          });

          groupeReseaux.appendChild(boule);
        });

        this.el.appendChild(groupeReseaux);
      },


    });
  }

  global.ARCardContent = {
    registerComponents
  };
})(window);
