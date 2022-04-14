import { notification } from "antd";

import APIService from "@/services/API";
import { Method } from "@/services/API/API.service";
import { SignUpData, UserInfo } from "@/api/Auth";

const root = "user";

export interface PasswordData {
    oldPassword: string,
    newPassword: string
}

enum ProfileDataType {
    Common = "Common",
    Password = "Password",
}

type DisplayName = {
    display_name: ""
}

class ProfileApi {
    isSuccessfulRequest(response: Response, dataType?: ProfileDataType) {
        const errorMessage = "Отправленные данные не корректны";
        let message = "Данные успешно изменены";
        if (dataType) {
            message = dataType === ProfileDataType.Common ? "Данные профиля успешно изменены"
                : "Пароль успешно изменен";
        }
        switch (response.status) {
            case 200:
                notification.success({ message });
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

    public async setProfile(data: Omit<SignUpData, "password">): Promise<UserInfo | null> {
        const requestData: Omit<SignUpData, "password"> & DisplayName = {
            ...data, 
            display_name: ""
        }
        const response = await APIService.request(Method.PUT, `${root}/profile`, requestData);
        if (response) {
            const success = this.isSuccessfulRequest(response, ProfileDataType.Common);
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
            return this.isSuccessfulRequest(response, ProfileDataType.Password);
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
