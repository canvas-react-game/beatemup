import { useHistory } from "react-router-dom";
import { useCallback } from "react";

import { routes } from "@/config/routes/routes";
import { SignInData } from "@/api/Auth";
import {useDispatch} from "react-redux";
import {signIn} from "@/actions/auth.actions";

export enum SignInFieldNames {
    login = "login",
    password = "password",
}

export const useSignInForm = () => {
    const history = useHistory();
    const currentPath = routes.signIn.path;
    const dispatch = useDispatch();

    const onFinish = useCallback(async (values: SignInData) => {
        dispatch(signIn(values, history));
    }, []);

    const onFinishFailed = (errorInfo: Error) => console.log("Failed:", errorInfo);

    return {
        currentPath,
        onFinish,
        onFinishFailed,
    };
};
