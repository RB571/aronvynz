const CACHE_NAME = "sentinel-cache-v1";
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/discography.html",
  "/story.html",
  "/tracks.html",
  "/contact.html",
  "/timeline.html",
  "/favicon-192.png",
  "/favicon-512.png",
  "\/uploads\/banner-space.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
