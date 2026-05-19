const CACHE_NAME = 'bjj-manager-cache-v5';
const urlsToCache = [
  '/',
  '/index.html',
  '/login.html',
  '/dashboard.html',
  '/portal_aluno.html',
  '/alunos.html',
  '/certificados.html',
  '/competicoes.html',
  '/curriculo.html',
  '/financeiro.html',
  '/historico.html',
  '/loja.html',
  '/planos.html',
  '/turmas.html',
  '/super_admin.html',
  '/validar.html',
  '/termos.html',
  '/menu.js',
  '/logo_bjj_manager.png',
  '/manifest.json',
  '/manifest_portal.json',
  '/manifest_sa.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Tenta adicionar cada recurso individualmente, ignorando falhas
        return Promise.allSettled(
          urlsToCache.map(url => 
            cache.add(url).catch(err => console.log(`Cache failed for ${url}:`, err))
          )
        );
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Ignora requisições para APIs externas e extensões
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  // Ignora requisições para arquivos que podem causar erro
  if (event.request.url.includes('chrome-extension')) return;
  if (event.request.url.includes('firestore.googleapis.com')) return;
  
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Só cacheia respostas bem-sucedidas
        if (networkResponse && networkResponse.status === 200) {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
