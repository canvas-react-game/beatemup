import {Dispatch} from "react";

import api, { SignInData } from "@/api/Auth";
import {routes} from "@/config/routes/routes";

import { setAccess } from "@/helpers/acess";

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

export const actions = { LOG_IN , LOG_OUT }

export const signInSuccess = () => ({
    type: actions.LOG_IN,
    payload: { isSignedIn: true }
})

export const signOutSuccess = {
    type: actions.LOG_OUT,
    payload: { isSignedIn: false }
}

export const signIn = (values: SignInData, history: any) => {
    return (dispatch: Dispatch<any>) => {
        api.signIn(values).then((response) => {
            if (response) {
                dispatch(signInSuccess());
                setAccess(true);
                history.push(routes.main.path);
            }
        });
    }
}
