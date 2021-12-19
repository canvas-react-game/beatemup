enum SignUpFieldNames {
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
    const fieldSet = [
        {name: SignUpFieldNames.surname, rules: [{ required: true, message: 'Введите фамилию' }], placeholder: 'Фамилия'},
        {name: SignUpFieldNames.firstname, rules: [{ required: true, message: 'Введите имя' }], placeholder: 'Имя'},
        {name: SignUpFieldNames.mail, rules: [{ required: true, message: 'Введите почту' }], placeholder: 'Эл. почта'},
        {name: SignUpFieldNames.phone, rules: [{ required: true, message: 'Введите телефон' }], placeholder: 'Телефон'},
        {name: SignUpFieldNames.login, rules: [{ required: true, message: 'Введите логин' }], placeholder: 'Логин'},
        {name: SignUpFieldNames.password, rules: [{ required: true, message: 'Введите пароль' }], placeholder: 'Пароль',
            type:'password'},
    ]

    const onSubmit = (values: SignUpValues) => console.log(values);

    return {
        fieldSet,
        onSubmit
    };
}