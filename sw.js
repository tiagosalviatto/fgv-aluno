/* FGV Aluno — service worker
   Rede primeiro (sempre a versão mais nova quando há internet),
   cache como reserva (o app abre mesmo em modo avião). */
const CACHE = 'fgv-aluno-v3';
const QR_LIB = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';
const ARQUIVOS = [
  './',
  'index.html',
  'css/style.css',
  'js/dados.js',
  'js/app.js',
  'manifest.webmanifest',
  'assets/img/logo-branco.png',
  'assets/img/logo-cor.png',
  'assets/img/foto.jpg',
  'assets/icons/icon-192.png',
  'assets/icons/icon-512.png',
  'assets/icons/maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(async c => {
        await c.addAll(ARQUIVOS);
        try { await c.add(QR_LIB); } catch (err) { /* biblioteca do QR fica para o próximo acesso */ }
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(chaves => Promise.all(chaves.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith(
    // 'no-cache' revalida com o servidor: alterações publicadas chegam na hora
    fetch(req, { cache: 'no-cache' })
      .then(res => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put(req, copia));
        }
        return res;
      })
      .catch(() =>
        caches.match(req, { ignoreSearch: true })
          .then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))
      )
  );
});
