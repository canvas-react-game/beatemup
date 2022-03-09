export enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

export const root = "https://ya-praktikum.tech";
export const base = "/api/v2";
export const apiBase = "/api/local";

class APIService {
    async request(method: Method, url: string, data = {}) {
        const response = await fetch(`${base}/${url}`, {
            method,
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": "true",
            },
            ...(method !== Method.GET && { body: JSON.stringify(data) }),
        });
        return response ?? null;
    }
}

export default new APIService();
