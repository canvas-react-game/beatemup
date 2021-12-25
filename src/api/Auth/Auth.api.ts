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

class AuthApi {
    public async signUp(data: SignUpData): Promise<string | null> {
        const response = await APIService.request(Method.POST, data, `${root}/signup`);
        return response ? response.id : null;
    }
}

export default new AuthApi();