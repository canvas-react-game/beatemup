import { useHistory } from "react-router";

import { routes } from "@/config/routes/routes";
import api, { SignUpData } from "@/api/Auth";

enum SignUpFieldNames {
    SecondName = "second_name",
    FirstName = "first_name",
    Email = "email",
    Phone = "phone",
    Login = "login",
    Password = "password",
}

export const useSignUp = () => {
    const history = useHistory();
    const currentPath = routes.signUp.path;

    const fieldSet = [
        {
            name: SignUpFieldNames.SecondName,
            rules: [{ required: true, message: "Введите фамилию" }],
            placeholder: "Фамилия",
        },
        {
            name: SignUpFieldNames.FirstName,
            rules: [{ required: true, message: "Введите имя" }],
            placeholder: "Имя",
        },
        {
            name: SignUpFieldNames.Email,
            rules: [{ required: true, message: "Введите почту" }],
            placeholder: "Эл. почта",
        },
        {
            name: SignUpFieldNames.Phone,
            rules: [{ required: true, message: "Введите телефон" }],
            placeholder: "Телефон",
        },
        {
            name: SignUpFieldNames.Login,
            rules: [{ required: true, message: "Введите логин" }],
            placeholder: "Логин",
        },
        {
            name: SignUpFieldNames.Password,
            rules: [{ required: true, message: "Введите пароль" }],
            placeholder: "Пароль",
            type: "password",
        },
    ];

    const onFinish = async (values: SignUpData) => {
        const response = await api.signUp(values);
        if (response) {
            history.push(routes.signIn.path);
        }
    };

    const onFinishFailed = (errorInfo: Error) =>
        console.log("Failed:", errorInfo);

    return {
        currentPath,
        fieldSet,
        onFinish,
        onFinishFailed,
    };
};
