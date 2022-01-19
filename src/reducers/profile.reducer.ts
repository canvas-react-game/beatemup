import { GET_PROFILE, SET_PROFILE } from "@/actions/profile.actions";
import { UserInfo } from "@/api/Auth";

export interface ProfileState extends UserInfo {}

interface Action {
    type: typeof GET_PROFILE | typeof SET_PROFILE,
    payload: UserInfo
}

export const profileReducer = (state: ProfileState | {} = {}, action: Action) => {
    switch (action.type) {
        case GET_PROFILE:
            console.log('payload:', action.payload);
            return {
                 ...action.payload
            };
        case SET_PROFILE:
            // todo
            return {
                ...state
            };
        default:
            return state;
    }
}