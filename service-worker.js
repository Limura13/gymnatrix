self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/', 
        '/index.html',
        '/styles.css',
        '/app.js',  // Ваши необходимые ресурсы
        'https://raw.githubusercontent.com/Limura13/gymnatrix/refs/heads/main/icon512.png', // Ваши иконки
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});