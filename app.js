(function(global) {
  if (!global.ARCardLoader) {
    console.error('ARCardLoader manquant');
    return;
  }
  if (!global.ARCardContent) {
    console.error('ARCardContent manquant');
    return;
  }

  const config = {
    assets: global.ARCardLoader.assets,
    links: global.ARCardLoader.links
  };

  global.ARCardContent.registerComponents(config);
})(window);
