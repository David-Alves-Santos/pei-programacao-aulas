/* Necessário para o navegador oferecer "Instalar". Não guarda nada em cache:
   o sistema sempre carrega a versão mais nova e os dados vêm direto do banco. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
