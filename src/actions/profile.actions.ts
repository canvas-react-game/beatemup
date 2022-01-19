import {Dispatch} from "react";

import api, {UserInfo} from "@/api/Auth/Auth.api";

export const GET_PROFILE = 'GET_PROFILE';
export const SET_PROFILE = 'SET_PROFILE';

export const profileFetchSuccess = (profile: UserInfo) => ({
    type: typeof GET_PROFILE,
    payload: { profile }
})

export const getProfile = () =>
    (dispatch: Dispatch<any>) => {
        api.getUserInfo().then((response) => {
            response && dispatch(profileFetchSuccess(response));
        });
    }
