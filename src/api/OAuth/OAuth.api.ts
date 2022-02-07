import { notification } from "antd";

import APIService from "@/services/API";
import { Method } from "@/services/API/API.service";

const root = "oauth";

class OAuthApi {
    isSuccessfulRequest(response: Response) {
        let message = "Вход выполнен успешно";
        let errorMessage = "Отправленные данные не корректны";
        switch (response.status) {
            case 200:
                notification.success({message});
                return true;
            case 400:
                notification.error({message: errorMessage});
                return false;
            case 401:
                notification.error({message: "Ошибка доступа"});
                return false;
            case 500:
                notification.error({message: "Произошла неизвестная ошибка"});
                return false;
            default:
                return false;
        }
    }

    public async getServiceId(redirectURI: string): Promise<{service_id: string} | null> {
        const response = await APIService.request(
            Method.GET, `${root}/yandex/service-id`, redirectURI);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result.service_id ?? null;
            }
        }
        return null;
    }
}

export default new OAuthApi();
