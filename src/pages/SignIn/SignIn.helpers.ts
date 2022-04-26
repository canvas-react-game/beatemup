import { useHistory } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { routes } from "@/config/routes/routes";
import { SignInData } from "@/api/Auth";
import { signIn } from "@/actions/auth.actions";
import { useSelector } from "@/hooks/useSelector";

export enum SignInFieldNames {
    Login = "login",
    Password = "password",
}

export const useSignInForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);

    const onFinish = useCallback(async (values: SignInData) => {
        dispatch(signIn(values, history));
    }, []);

    const onFinishFailed = (errorInfo: Error) => console.log("Failed:", errorInfo);

    return {
        currentPath: routes.signIn.path,
        onFinish,
        onFinishFailed,
        isLoading,
    };
};
