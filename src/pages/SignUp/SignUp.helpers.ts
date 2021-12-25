import {useHistory} from "react-router";

import {routes} from "@/config/routes/routes";
import api, {SignUpData} from '@/api/Auth';

enum SignUpFieldNames {
    secondName = 'second_name',
    firstName = 'first_name',
    email = 'email',
    phone = 'phone',
    login = 'login',
    password = 'password',
}

export const useSignUp = () => {
    const history = useHistory();
    const currentPath = `/#${routes.signUp.path}`;

    const fieldSet = [
        {name: SignUpFieldNames.secondName, rules: [{ required: true, message: 'Введите фамилию' }], placeholder: 'Фамилия'},
        {name: SignUpFieldNames.firstName, rules: [{ required: true, message: 'Введите имя' }], placeholder: 'Имя'},
        {name: SignUpFieldNames.email, rules: [{ required: true, message: 'Введите почту' }], placeholder: 'Эл. почта'},
        {name: SignUpFieldNames.phone, rules: [{ required: true, message: 'Введите телефон' }], placeholder: 'Телефон'},
        {name: SignUpFieldNames.login, rules: [{ required: true, message: 'Введите логин' }], placeholder: 'Логин'},
        {
            name: SignUpFieldNames.password, rules: [{ required: true, message: 'Введите пароль' }], placeholder: 'Пароль',
            type:'password'
        },
    ]

    const onFinish = async (values: SignUpData) => {
        const response = await api.signUp(values);
        if (response) {
            history.push(routes.signIn.path);
        }
    }

    const onFinishFailed = (errorInfo: Error) => console.log('Failed:', errorInfo);

    return {
        currentPath,
        fieldSet,
        onFinish,
        onFinishFailed
    };
}