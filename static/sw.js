
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache-v1').then(function(cache) {
      console.log('Cache opened');
      return cache.addAll([
        '/',
        '/login',
        '/main_Menu',
        '/static/indexStyles.css',
        '/static/loginStyles.css'
      ]);
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
        caches.open('my-cache-v1').then(function(cache) {
          cache.put(event.request, responseToCache);
        });
        console.log('fetching_request_good')

        return response;
      });
    })
  );
});