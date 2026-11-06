const V="uchen-202611061600";
const FILES=["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "fonts/ibm-plex-mono-latin-400-normal.woff2", "fonts/ibm-plex-mono-latin-500-normal.woff2", "fonts/ibm-plex-mono-latin-ext-400-normal.woff2", "fonts/ibm-plex-mono-latin-ext-500-normal.woff2", "fonts/literata-latin-400-normal.woff2", "fonts/literata-latin-600-normal.woff2", "fonts/literata-latin-ext-400-normal.woff2", "fonts/literata-latin-ext-600-normal.woff2", "fonts/noto-serif-tibetan-tibetan-400-normal.woff2", "fonts/noto-serif-tibetan-tibetan-700-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET"||u.origin!==location.origin)return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).catch(()=>caches.match("index.html"))));});
