import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import api, { SignInData } from "@/api/Auth";
import { routes } from "@/config/routes/routes";
import { setAccess } from "@/helpers/acess";

import { History } from "history";
import { SIGN_IN, SIGN_OUT } from "./types/auth.types";

type SignedIn = {
    type: typeof SIGN_IN;
};

type SignedOut = {
    type: typeof SIGN_OUT;
};

export const signInSuccess = (): SignedIn => ({ type: SIGN_IN })

export const signOutSuccess = (): SignedOut => ({ type: SIGN_OUT })

export const signIn = (
    data: SignInData,
    history: History
): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state,) => {
    try {
        const response = await api.signIn(data)
        if (response) {
            dispatch(signInSuccess());
            setAccess(true);
            history.push(routes.main.path);
        }
    } catch (error) {
        //dispatch(signInFailure(error));
    }
};

export const signOut = (
    history: History
): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state,) => {
    try {
        const response = await api.logOut();
        if (response) {
            dispatch(signOutSuccess());
            setAccess(false);
            history.push(routes.signIn.path);
        }
    } catch (error) {
        //dispatch(signInFailure(error));
    }
};

export type AuthAction = SignedOut | SignedIn;
