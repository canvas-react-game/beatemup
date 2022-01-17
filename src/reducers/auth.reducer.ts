import {actions} from "@/actions/auth.actions";
import {checkAccess} from "@/helpers/acess";

export interface AuthState {
    isSignedIn: boolean
}

export const authReducer = (state: AuthState = { isSignedIn: checkAccess() }, action: any) => {
    switch (action.type) {
        case actions.LOG_IN:
            return { isSignedIn: true };
        case actions.LOG_OUT:
            return { isSignedIn: false };
        default:
            return state;
    }
}