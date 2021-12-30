export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE'
}

const root  = 'https://ya-praktikum.tech/api/v2';

class APIService {
    async request(method: Method, data = {}, url: string) {
        const response = await fetch(`${root}/${url}`, {
            method,
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response ?? null;
    }
}

export default new APIService();