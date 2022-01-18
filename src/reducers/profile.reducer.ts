import { actions } from "@/actions/profile.actions";
import { UserInfo } from "@/api/Auth";

export interface ProfileState extends UserInfo {}

interface Action {
    type: 'GET_PROFILE' | 'SET_PROFILE',
    payload: UserInfo | {}
}

export const profileReducer = (state: ProfileState | {} = {}, action: Action) => {
    switch (action.type) {
        case actions.GET_PROFILE:
            return {
                ...state,
                ...action.payload
            };
        case actions.SET_PROFILE:
            // todo
            return {
                ...state
            };
        default:
            return state;
    }
}