import { LOADING, SIGN_IN, SIGN_OUT } from "@/actions/types/auth.types";
import { checkAccess } from "@/helpers/acess";
import { AuthAction, AuthStages } from "@/actions/auth.actions";

export interface AuthState {
    isSignedIn: boolean;
    isLoading: boolean;
    stage: AuthStages;
}

export const initialState: AuthState = {
    isSignedIn: checkAccess(),
    isLoading: false,
    stage: AuthStages.INIT,
};

// TODO: нужно указать дефолтное значение для action
// eslint-disable-next-line @typescript-eslint/default-param-last
export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                isSignedIn: true,
                isLoading: false,
                stage: AuthStages.DONE,
            };
        case SIGN_OUT:
            return {
                isSignedIn: false,
                isLoading: false,
                stage: AuthStages.DONE,
            };
        case LOADING:
            return {
                isSignedIn: false,
                isLoading: action.payload.isLoading,
                stage: AuthStages.LOADING,
            };
        default:
            return state;
    }
};
