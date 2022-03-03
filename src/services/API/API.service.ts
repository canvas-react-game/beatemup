import { isServer } from "../../helpers/environment";

export enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

export const apiBaseUrl = "https://ya-praktikum.tech";
export const apiBase = "/api/v2";
export const baseDomain = "localhost";
export const port = 3000;

class APIService {
    async request(method: Method, url: string, data = {}) {
        const response = await fetch(
            `${isServer ? `${apiBaseUrl}${apiBase}` : apiBase}/${url}`,
            {
                method,
                mode: "cors", // no-cors, *cors, same-origin
                cache: "no-cache",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": "true",
                },
                ...(method !== Method.GET && { body: JSON.stringify(data) }),
            }
        );

        return response ?? null;
    }
}

export default new APIService();
