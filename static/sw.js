const CACHE_NAME = 'my-cache-v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Cache opened');
      return cache.addAll([
        '/OOO_App/static/templates/mobile_index.html',
        '/OOO_App/static/mobile_indexStyles.css',
      ]);
    })
  );
});


self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      console.log('fetching')
      if (response) {
        console.log('fetching_complete')
        return response; // Если ресурс найден в кеше, возвращаем его
      }

      // Если ресурс не найден в кеше, делаем запрос к серверу
      console.log('fetching_request')
      return fetch(event.request).then(function(response) {
        // Проверяем, что полученный ответ валидный
        if (!response || response.status !== 200 || response.type !== 'basic') {
          console.log('fetching_request_bad')
          return response; // Если ответ невалидный, возвращаем его как есть
        }

        // Кэшируем успешный ответ, прежде чем вернуть его
        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        console.log('fetching_request_good')

        return response;
      });
    })
  );
});

// Обработка обновления кэша при изменении ресурсов
self.addEventListener('message', (event) => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

