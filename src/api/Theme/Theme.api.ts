import { Method, LocalAPIService } from "@/services/API/API.service";

export type Theme = "light" | "dark" | null;
export type ThemeData = {
    theme: Theme;
    user_id: string;
    id?: number
};

const root = "themes";

class ThemeApi {
    public async getTheme(id: string): Promise<ThemeData | null> {
        const response = await LocalAPIService.request(Method.GET, `${root}/${id}`);

        if (response.status === 200) {
            const result = await response.json();
            return result ?? null;
        }

        return null;
    }

    public async updateTheme(id: string, data: Theme): Promise<Theme | null> {
        // eslint-disable-next-line max-len
        const response = await LocalAPIService.request(Method.PUT, `${root}/${id}`, { theme: data });
        if (response.status === 200) {
            const result = await response.json();
            return result ?? null;
        }
        return null;
    }

    public async createTheme(data: ThemeData): Promise<ThemeData | null> {
        const response = await LocalAPIService.request(Method.POST, root, data);
        if (response.status === 200) {
            const result = await response.json();
            return result ?? null;
        }
        return null;
    }
}

export default new ThemeApi();
