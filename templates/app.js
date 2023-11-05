if ('serviceWorker' in navigator && 'PushManager' in window && 'caches' in window) {
  // Устройство поддерживает PWA
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      console.log('Service Worker зарегистрирован с областью видимости:', registration.scope);
    }).catch(function(error) {
      console.log('Ошибка при регистрации Service Worker:', error);
    });
  });
} else {
  // Устройство не поддерживает PWA
  alert('Установите приложение на рабочий стол для использования');
}