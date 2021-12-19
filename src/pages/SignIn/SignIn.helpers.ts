export enum SignInFieldNames {
    login = 'login',
    password = 'password'
}

interface SignInValues {
    login: string,
    password: string,
}

export const useSignInForm = () => {

    const onFinish = (values: SignInValues) => console.log(values);
    const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo);

    return {
        onFinish,
        onFinishFailed
    };
}