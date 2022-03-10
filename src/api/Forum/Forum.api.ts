import { notification } from "antd";
import APIService, { Method } from "services/API/API.service";

type ForumData = {};

const root = "api/local/forum";

class ForumApi {
    isSuccessfulRequest(response: Response) {
        const errorMessage = "Отправленные данные не корректны";
        switch (response.status) {
            case 200:
                return true;
            case 400:
                notification.error({ message: errorMessage });
                return false;
            case 401:
                notification.error({ message: "Ошибка авторизации" });
                return false;
            case 500:
                notification.error({ message: "Произошла неизвестная ошибка" });
                return false;
            default:
                return false;
        }
    }

    public async getTopics(): Promise<ForumData[] | []> {
        const response = await APIService.request(Method.GET, root);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result ?? [];
            }
        }
        return [];
    }
}

export default new ForumApi();
