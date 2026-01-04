(function(global) {
  function registerComponents(config) {
    const { assets, links } = config;

    AFRAME.registerComponent('gestion-carte', {
      init: function () {
        console.log('--- Initialisation de la Carte Alexandre Dubois ---');
        this.config = config;

        this.creerTexteHaut();
        this.creerReseauxBas();
        this.creerCercleCote();
      },

      creerTexteHaut: function() {
        const groupeTexte = document.createElement('a-entity');
        groupeTexte.setAttribute('position', '-0.8 0 -1.2');

        const texte = document.createElement('a-text');
        texte.setAttribute('value', 'ALEXANDRE DUBOIS');
        texte.setAttribute('align', 'center');
        texte.setAttribute('color', '#333333');
        texte.setAttribute('width', '6');
        texte.setAttribute('rotation', '-90 0 0');
        texte.setAttribute('animation', {
          property: 'position',
          from: '0 -0.5 0',
          to: '0 0 0',
          dur: 1500,
          easing: 'easeOutQuad'
        });

        groupeTexte.appendChild(texte);
        this.el.appendChild(groupeTexte);
      },

      creerReseauxBas: function() {
        const { assets, links } = this.config;
        const groupeReseaux = document.createElement('a-entity');
        groupeReseaux.setAttribute('position', '-0.8 0 1.2');

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
          boule.addEventListener('click', () => {
            window.location.href = social.url;
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

      creerCercleCote: function() {
        const { assets, links } = this.config;
        const cercleLogo = document.createElement('a-circle');

        cercleLogo.setAttribute('color', 'white');
        cercleLogo.setAttribute('radius', '0.5');
        cercleLogo.setAttribute('rotation', '-90 0 0');
        cercleLogo.setAttribute('position', '1.5 0 0');
        cercleLogo.setAttribute('src', assets.logos.main);
        cercleLogo.classList.add('clickable');
        cercleLogo.addEventListener('click', () => {
          window.location.href = links.site;
        });

        this.el.appendChild(cercleLogo);
      }
    });
  }

  global.ARCardContent = {
    registerComponents
  };
})(window);
