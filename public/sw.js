// Service Worker Cache Buster and Unregister for clean modern Next.js operation
self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.map((key) => caches.delete(key)));
    }).then(() => {
      return self.registration.unregister();
    })
  );
});

self.addEventListener("fetch", (e) => {
  // Let Next.js handle all requests dynamically
  return;
});
