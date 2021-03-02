console.log("service worker registered");


var CACHE_NAME = 'expense_tracker';
var urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    '/manifest.json',
    '/favicon.ico'

];
 
// Perform install steps
this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
}) 


 this.addEventListener('fetch', function (e) {
    //console.log('[ServiceWorker] Fetch', e.request.url);    
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});