import { LOG_IN, LOG_OUT } from "@/actions/auth.actions";
import {checkAccess} from "@/helpers/acess";

export interface AuthState {
    isSignedIn: boolean
}

interface Action {
    type: typeof LOG_IN | typeof LOG_OUT,
    payload: { isSignedIn: boolean }
}

export const authReducer = (state: AuthState = { isSignedIn: checkAccess() }, action: Action) => {
    switch (action.type) {
        case LOG_IN:
            return { isSignedIn: true };
        case LOG_OUT:
            return { isSignedIn: false };
        default:
            return state;
    }
}