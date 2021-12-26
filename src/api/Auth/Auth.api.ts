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

export interface SignInData {
    login: string;
    password: string;
}

const root = 'auth';

class AuthApi {
     isSuccessfulRequest(response: any, signIn = false) {
        switch (response.status) {
            case 200:
                notification.success({
                    message: signIn ? 'Выполнен вход в приложение' : 'Регистрация прошла успешно'
                });
                return true;
            case 400:
                notification.error({message: 'Отправленные данные не корректны'});
                return false;
            case 401:
                notification.error({message: 'Неверный логин или пароль'});
                return false;
            case 500:
                notification.error({message: 'Произошла неизвестная ошибка'});
                return false;
                default:
                    return false;
        }
    }

    public async signUp(data: SignUpData): Promise<string | null> {
        const response = await APIService.request(Method.POST, data, `${root}/signup`);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result.id ?? null;
            }
        }
        return null;
    }

    public async signIn(data: SignInData): Promise<boolean> {
        const response = await APIService.request(Method.POST, data, `${root}/signup`);
        if (response) {
            return this.isSuccessfulRequest(response, true);
        }
        return false;
    }
}

export default new AuthApi();