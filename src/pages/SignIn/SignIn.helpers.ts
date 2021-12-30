import {routes} from '@/config/routes/routes';

export enum SignInFieldNames {
    login = 'login',
    password = 'password'
}

interface SignInValues {
    login: string,
    password: string,
}

export const useSignInForm = () => {
    const currentPath = `/#${routes.signIn.path}`;

    const onFinish = (values: SignInValues) => console.log(values);
    const onFinishFailed = (errorInfo: any) => console.log('Failed:', errorInfo);

    return {
        currentPath,
        onFinish,
        onFinishFailed
    };
}