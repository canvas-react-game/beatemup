import { notification } from "antd";

import APIService from "@/services/API";
import { Method } from "@/services/API/API.service";

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

const root = "auth";

type Request = "signIn" | "signOut" | undefined;

class AuthApi {
    isSuccessfulRequest(response: any, type: Request = undefined) {
        let message = "Регистрация прошла успешно";
        let errorMessage = "Отправленные данные не корректны";
        switch (response.status) {
            case 200:
                if (type) {
                    message = type === "signIn"
                        ? "Выполнен вход в приложение" : "Выполнен выход из приложения";
                }
                notification.success({ message });
                return true;
            case 400:
                if (type === "signIn") {
                    errorMessage = "Пользователь уже авторизован в системе";
                }
                notification.error({ message: errorMessage });
                return false;
            case 401:
                notification.error({ message: "Неверный логин или пароль" });
                return false;
            case 500:
                notification.error({ message: "Произошла неизвестная ошибка" });
                return false;
            default:
                return false;
        }
    }

    public async signUp(data: SignUpData): Promise<string | null> {
        const response = await APIService.request(Method.POST, `${root}/signup`, data);
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
        const response = await APIService.request(Method.POST, `${root}/signin`, data);
        if (response) {
            return this.isSuccessfulRequest(response, "signIn");
        }
        return false;
    }

    public async logOut(): Promise<boolean> {
        const response = await APIService.request(Method.POST, `${root}/logout`);
        if (response) {
            return this.isSuccessfulRequest(response, "signOut");
        }
        return false;
    }
}

export default new AuthApi();
