/// <reference lib="WebWorker" />
declare const self: ServiceWorkerGlobalScope;
export type {};

// Helpers
const canBeCached = (request: Request) =>
    request.method === "GET" &&
    request.url.startsWith("http") &&
    !request.url.includes("sockjs-node");
//

// Изменяются при каждой сборке в webpack.config.js
const CACHE_NAME: string = "CACHE_VERSION";
const URLS: string[] = [
    "/profile",
    "/forum",
    "/leaderboard",
    "/about",
    "/game",
    "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
];
//

self.addEventListener("install", (event) => {
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

self.addEventListener("activate", (event) => {
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

self.addEventListener("fetch", (event) => {
    const request = event.request;

    if (request.method !== "GET") {
        // event.respondWith(
        //     fetch(request).catch(function () {
        //         return caches.match("/offline");
        //     }) as Promise<Response>
        // );
        return;
    }

    event.respondWith(
        caches.match(request).then((response) => {
            if (response) return response;

            const fetchRequest = request.clone();

            return fetch(fetchRequest).then((response) => {
                if (canBeCached(request)) return response;

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
            }) as Promise<Response>;
        })
    );
});
