  if ('serviceWorker' in navigator) {
    const reg = navigator.serviceWorker.register('static/sw.js').then(function(registration) {
        console.log('Service Worker register success:', reg);
    }).catch(function(error) {
        console.log('Service Worker registration failed:', error);
    });
  }