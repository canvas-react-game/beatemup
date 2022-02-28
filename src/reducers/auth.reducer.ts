import {
    LOADING,
    SIGN_IN,
    SIGN_OUT,
    SIGN_IN_OAUTH,
} from "@/actions/types/auth.types";
import { checkAccess } from "@/helpers/acess";
import { AuthAction, AuthStages } from "@/actions/auth.actions";

export interface AuthState {
    isSignedIn: boolean;
    isSignedInOAuth: boolean;
    isLoading: boolean;
    stage: AuthStages;
}

export const initialState: AuthState = {
    isSignedIn: checkAccess(),
    isSignedInOAuth: checkAccess(),
    isLoading: false,
    stage: AuthStages.INIT,
};

// eslint-disable @typescript-eslint/default-param-last
export const authReducer = (
    state: AuthState = initialState,
    action: AuthAction,
) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                isSignedIn: true,
                isSignedInOAuth: false,
                isLoading: false,
                stage: AuthStages.DONE,
            };
        case SIGN_IN_OAUTH:
            return {
                isSignedIn: false,
                isSignedInOAuth: true,
                isLoading: false,
                stage: AuthStages.DONE,
            };
        case SIGN_OUT:
            return {
                isSignedIn: false,
                isSignedInOAuth: false,
                isLoading: false,
                stage: AuthStages.DONE,
            };
        case LOADING:
            return {
                isSignedIn: false,
                isSignedInOAuth: false,
                isLoading: action.payload.isLoading,
                stage: AuthStages.LOADING,
            };
        default:
            return state;
    }
};
