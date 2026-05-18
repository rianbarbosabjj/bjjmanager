// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyAkIk25LZptKw_N_UJsDO418IwMZNZXBeI",
    authDomain: "bjj-maneger.firebaseapp.com",
    projectId: "bjj-maneger",
    storageBucket: "bjj-maneger.firebasestorage.app",
    messagingSenderId: "415548255893",
    appId: "1:415548255893:web:61186696fe097be870759c"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Notificações em segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Mensagem em background:', payload);
    
    const notificationTitle = payload.notification?.title || payload.data?.title || 'BJJ Manager';
    const notificationOptions = {
        body: payload.notification?.body || payload.data?.body || 'Nova atualização',
        icon: '/logo_bjj_manager.png',
        badge: '/logo_bjj_manager.png',
        vibrate: [200, 100, 200],
        requireInteraction: true,
        data: {
            url: payload.data?.url || '/portal_aluno.html',
            click_action: payload.fcmOptions?.link || payload.data?.click_action
        }
    };
    
    self.registration.showNotification(notificationTitle, notificationOptions);
});

// Clique na notificação
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    const urlToOpen = event.notification.data?.url || '/portal_aluno.html';
    
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then((windowClients) => {
                for (let client of windowClients) {
                    if (client.url.includes(urlToOpen) && 'focus' in client) {
                        return client.focus();
                    }
                }
                if (clients.openWindow) {
                    return clients.openWindow(urlToOpen);
                }
            })
    );
});
