export enum SignInFieldNames {
    login = 'login',
    password = 'password'
}

export interface SignInValues {
    login: string,
    password: string,
}

export const useSignInForm = () => {

    const onSubmit = (values: SignInValues) => console.log(values);

    return {
        onSubmit
    };
}