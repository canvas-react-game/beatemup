import {notification} from "antd";

import APIService from "@/services/API";
import {Method} from "@/services/API/API.service";

export interface SignUpData {
    second_name: string;
    first_name: string;
    email: string;
    phone: string;
    login: string;
    password: string;
}

const root = 'auth';

class SignUpApi {
    async processResponseStatus(response: any) {
        switch (response.status) {
            case 200:
                notification.success({message: 'Регистрация прошла успешно'});
                return await response.json();
            case 400:
                notification.error({message: 'Отправленные данные не корректны'});
                break;
            case 401:
                notification.error({message: 'Неверный логин или пароль'});
                break;
            case 500:
                notification.error({message: 'Произошла неизвестная ошибка'});
                break;
        }
    }

    public async signUp(data: SignUpData): Promise<string | null> {
        const response = await APIService.request(Method.POST, data, `${root}/signup`);
        if (response) {
            const result = await this.processResponseStatus(response);
            return result ? result.id : null;
        }
        return null;
    }
}

export default new SignUpApi();