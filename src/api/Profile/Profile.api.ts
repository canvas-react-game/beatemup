import { notification } from "antd";

import APIService from "@/services/API";
import { Method } from "@/services/API/API.service";
import {SignUpData, UserInfo} from "@/api/Auth";

const root = "user";

export interface PasswordData {
    oldPassword: string,
    newPassword: string
}

class ProfileApi {
    isSuccessfulRequest(response: Response) {
        let errorMessage = "Отправленные данные не корректны";
        switch (response.status) {
            case 200:
                notification.success({ message: 'Данные успешно изменены' });
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

    public async setProfile(data: Omit<SignUpData, 'password'>): Promise<UserInfo | null> {
        const response = await APIService.request(Method.PUT, `${root}/profile`, data);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result ?? null;
            }
        }
        return null;
    }

    public async setPassword(data: PasswordData): Promise<boolean> {
        const response = await APIService.request(Method.PUT, `${root}/password`, data);
        if (response) {
            return this.isSuccessfulRequest(response);
        }
        return false;
    }

    // todo
    public async setAvatar(data: any): Promise<UserInfo | null> {
        const response = await APIService.request(Method.PUT, `${root}/avatar`, data);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result ?? null;
            }
        }
        return null;
    }

}

export default new ProfileApi();
