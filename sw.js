var V="campocerto-2146885317",F=["./", "index.html", "styles.css", "shell.js", "app.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "img/pasto.jpg", "img/gado.jpg", "img/bezerro.jpg", "img/cerca.jpg", "img/bebedouro.jpg", "img/curral.jpg", "img/chuva.jpg"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}));self.clients.claim()});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(V).then(function(x){x.put(e.request,c)});return r}).catch(function(){return caches.match(e.request,{ignoreSearch:true})}))});
