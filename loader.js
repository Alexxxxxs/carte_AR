(function(global) {
  // Centralise les liens et ids d'assets utilisés dans la scène
  const assets = {
    logos: {
      main: '#logo',
      linkedin: '#logo-linkedin',
      instagram: '#logo-instagram',
      github: '#logo-github'
    }
  };

  const links = {
    linkedin: 'https://www.linkedin.com/in/alexandre-dubois-a69666398/',
    instagram: 'https://www.instagram.com/alex.le.dub/',
    github: 'https://github.com/Alexxxxxs',
    site: 'https://alexandre-dubois.fr'
  };

  global.ARCardLoader = {
    assets,
    links
  };
})(window);
