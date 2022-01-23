// Изменяются при каждой сборке в webpack.config.js
const CACHE_NAME = "CACHE_VERSION";
const URLS = [
    "/profile",
    "/forum",
    "/leaderboard",
    "/about",
    "/game",
    'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
];
//

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log("Opened cache");
                return cache.addAll(URLS);
            })
            .catch((err) => {
                console.log(err);
                throw err;
            })
    );
});

this.addEventListener('activate', (event) => {
    event.waitUntil(
      caches.keys().then(names => { 
        return Promise.all(names.map(name => {
            if (name !== CACHE_NAME) {
                return caches.delete(name)
            }
        }));
      })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }

            const fetchRequest = event.request.clone();

            return (
                fetch(fetchRequest)
                    .then((response) => {
                        if (
                            !response ||
                            response.status !== 200 ||
                            !event.request.url.startsWith('http')
                        ) {
                            return response;
                        }

                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        }).catch(error => {
                            console.log(error)
                        });
                        return response;
                    })
            );
        })
    );
});
