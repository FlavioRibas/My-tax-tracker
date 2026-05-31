const CACHE_NAME="physio-tax-receipt-tracker-v3-ocr";
const FILES=["./","./index.html","./manifest.webmanifest","./icon.svg","./README.md"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES)))});
self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
