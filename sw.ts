/// <reference no-default-lib="true"/>
/// <reference lib="es2017" />
/// <reference lib="webworker" />
const sw = self as unknown as ServiceWorkerGlobalScope & typeof globalThis;

// Helpers
const canBeCached = (request: Request) => request.method === "GET" &&
    request.url.startsWith("http") && !request.url.includes("sockjs-node");
//

// Изменяются при каждой сборке в webpack.config.js
const CACHE_NAME: string = "CACHE_VERSION";
const URLS: string[] = [
    "/bundle.js",
    "/index.html",
    "/profile",
    "/signin",
    "/forum",
    "/leaderboard",
    "/about",
    "/game",
    "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
];
//

sw.addEventListener("install", (event) => {
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

sw.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((names) => {
            return Promise.all(
                names.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});

sw.addEventListener("fetch", (event) => {
    const request = event.request;

    event.respondWith(
        caches.match(request).then((response) => {
            if (response) return response;

            const fetchRequest = request.clone();

            return fetch(fetchRequest).then((response) => {
                if (!canBeCached(request)) return response;

                const responseToCache = response.clone();

                caches
                    .open(CACHE_NAME)
                    .then((cache) => {
                        cache.put(request, responseToCache);
                    })
                    .catch((error) => {
                        console.log(error);
                    });

                return response;
            }).catch(() => {
                if (request.method !== "GET") {
                    event.waitUntil(
                        (async () => {
                            const clientId =
                                event.resultingClientId !== ""
                                    ? event.resultingClientId
                                    : event.clientId;
                            const client = await sw.clients.get(clientId);
            
                            client.postMessage("FORBIDDEN_METHOD");
                        })()
                    );
            
                    return;
                }
            }) as Promise<Response>;
        })
    );
});
