import { useHistory } from "react-router-dom";
import { useCallback } from "react";

import { routes } from "@/config/routes/routes";
import api, { SignInData } from "@/api/Auth";
import { setAccess } from "@/helpers/acess";

export enum SignInFieldNames {
    login = "login",
    password = "password",
}

export const useSignInForm = () => {
    const history = useHistory();
    const currentPath = routes.signIn.path;

    const onFinish = useCallback(async (values: SignInData) => {
        const response = await api.signIn(values);
        if (response) {
            setAccess(true);
            history.push(routes.main.path);
        }
    }, []);

    const onFinishFailed = (errorInfo: Error) => console.log("Failed:", errorInfo);

    return {
        currentPath,
        onFinish,
        onFinishFailed,
    };
};
