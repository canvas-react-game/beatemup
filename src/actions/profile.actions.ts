import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import api, { UserInfo } from "@/api/Auth/Auth.api";

import { GET_PROFILE } from "./types/profile.types";

type ProfileFetched = {
    type: typeof GET_PROFILE;
    payload: { profile: UserInfo };
}

export const profileFetchSuccess = (profile: UserInfo): ProfileFetched => ({
    type: GET_PROFILE ,
    payload: { profile }
})

export const getProfile = (): ThunkAction<void, unknown, unknown, AnyAction> =>
    async (dispatch, _state,) => {
    try {
        const response = await api.getUserInfo();
        if (response) {
            dispatch(profileFetchSuccess(response));
        }
    } catch (error) {
        //dispatch(signInFailure(error));
    }
};

export type ProfileAction = ProfileFetched;
