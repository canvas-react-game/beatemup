import { SIGN_IN, SIGN_OUT } from "@/actions/types/auth.types";
import { checkAccess } from "@/helpers/acess";
import { AuthAction } from "actions/auth.actions";

export interface AuthState {
    isSignedIn: boolean
}

export const initialState: AuthState = {
    isSignedIn: checkAccess()
};

export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case SIGN_IN:
            return { isSignedIn: true };
        case SIGN_OUT:
            return { isSignedIn: false };
        default:
            return state;
    }
}