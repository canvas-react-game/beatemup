import {useState, ChangeEvent} from "react";

export enum LoginFieldNames {
    login = 'login',
    password = 'password'
}

export interface LoginValues {
    login: string,
    password: string,
}

export const useLogin = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) =>
        setLogin(e.currentTarget.value);
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.currentTarget.value);

    const onSubmit = (values: LoginValues) => console.log(values);

    return {
        login,
        password,
        onLoginChange,
        onPasswordChange,
        onSubmit
    };
}