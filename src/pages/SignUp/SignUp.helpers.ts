import {useState, ChangeEvent} from "react";

export enum SignUpFieldNames {
    surname = 'surname',
    firstname = 'firstname',
    mail = 'mail',
    phone = 'phone',
    login = 'login',
    password = 'password',
}

export interface SignUpValues {
    surname: string;
    firstname: string;
    mail: string;
    phone: string;
    login: string;
    password: string;
}

export const useSignUp = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const onLoginChange = (e: ChangeEvent<HTMLInputElement>) =>
        setLogin(e.currentTarget.value);
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.currentTarget.value);

    const onSubmit = (values: SignUpValues) => console.log(values);

    return {
        login,
        password,
        onLoginChange,
        onPasswordChange,
        onSubmit
    };
}