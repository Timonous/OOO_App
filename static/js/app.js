  if ('serviceWorker' in navigator) {
    const reg = navigator.serviceWorker.register('/OOO_App/static/sw.js').then(function(registration) {
        console.log('Service Worker register success:', reg);
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
  }