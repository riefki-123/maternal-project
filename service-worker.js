const CACHE_NAME = 'kkn-gradasi-v7'; // Update Versi ke 7 (Materi Baru)
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './app.html',
  './tutorial.html',
  './edukasi.html',
  './style.css',
  './edukasi.css',
  './script.js',
  './edukasi.js',
  './data_pertumbuhan.json',
  './data_kehamilan.json',
  './data_edukasi.json',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://html2canvas.hertzen.com/dist/html2canvas.min.js'
];

// Install Service Worker & Cache Aset
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Menyimpan aset offline V7...');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
  // Paksa SW baru untuk segera aktif menggantikan yang lama
  self.skipWaiting();
});

// Ambil aset dari Cache saat Offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

// Hapus cache lama agar user mendapat materi baru
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Menghapus cache lama:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});