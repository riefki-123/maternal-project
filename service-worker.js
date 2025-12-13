const CACHE_NAME = 'kkn-gradasi-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './app.html',
  './style.css',
  './script.js',
  './data_pertumbuhan.json',
  './data_kehamilan.json',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js' 
];

// Install Service Worker & Cache Aset
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Menyimpan aset offline...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Ambil aset dari Cache saat Offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Jika ada di cache, pakai cache. Jika tidak, ambil dari internet.
        return response || fetch(event.request);
      })
  );
});

// Hapus cache lama jika ada update versi
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});