import APIService from "@/services/API";
import { Method } from "@/services/API/API.service";

export interface ThemeData {
    theme: "light" | "dark";
}

const root = "theme";

class AuthApi {
    public async getTheme(): Promise<ThemeData> {
        const response = await APIService.request(Method.GET, `${root}`);
        if (response.status === 200) {
            const result = await response.json();
            return result ?? null;
        }
        return null;
    }

    public async updateTheme(data: ThemeData): Promise<ThemeData> {
        const response = await APIService.request(Method.PUT, `${root}`, data);
        if (response.status === 200) {
            const result = await response.json();
            return result ?? null;
        }
        return null;
    }
}

export default new AuthApi();
