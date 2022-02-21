import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { History } from "history";
import api, { SignInData } from "@/api/Auth";
import { routes } from "@/config/routes/routes";
import { setAccess } from "@/helpers/acess";

import { LOADING, SIGN_IN, SIGN_OUT } from "./types/auth.types";

type SignedIn = {
    type: typeof SIGN_IN;
};

type SignedOut = {
    type: typeof SIGN_OUT;
};

type Loading = {
    type: typeof LOADING;
    payload: { isLoading: boolean };
};

export enum AuthStages {
    INIT = "init",
    LOADING = "loading",
    DONE = "done",
}

const loading = (isLoading: boolean): Loading => ({
    type: LOADING,
    payload: { isLoading },
});

const signInSuccess = (): SignedIn => ({ type: SIGN_IN });

const signOutSuccess = (): SignedOut => ({ type: SIGN_OUT });

export const signIn = (
    data: SignInData,
    history: History,
): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    dispatch(loading(true));
    try {
        const response = await api.signIn(data);
        if (response) {
            dispatch(signInSuccess());
            setAccess(true);
            history.push(routes.main.path);
        } else {
            dispatch(loading(false));
        }
    } catch (error) {
        dispatch(loading(false));
    }
};

export const signInOAuth = (
    history: History,
): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    dispatch(signInSuccess());
    setAccess(true);
    history.push(routes.main.path);
};

export const signOut = (
    history: History,
): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    dispatch(loading(true));
    try {
        const response = await api.logOut();
        if (response) {
            dispatch(signOutSuccess());
            setAccess(false);
            history.push(routes.signIn.path);
        } else {
            dispatch(loading(false));
        }
    } catch (error) {
        dispatch(loading(false));
    }
};

export type AuthAction = SignedOut | SignedIn | Loading;
