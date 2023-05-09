const CACHE_NAME = 'static-cache-v1';

const FILES_TO_CACHE = [
  '/',
  '/offline.html',
  '/static/bootstrap/css/bootstrap-grid.min.css',
  '/static/css/style.css',
  '/static/bootstrap/js/bootstrap.bundle.min.js',
  '/static/js/atualizar.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match('/offline.html');
      })
  );
});
