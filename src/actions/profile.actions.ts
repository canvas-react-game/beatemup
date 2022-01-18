import {Dispatch} from "react";

import api, {UserInfo} from "@/api/Auth/Auth.api";

const GET_PROFILE = 'GET_PROFILE';
const SET_PROFILE = 'SET_PROFILE';

export const actions = { GET_PROFILE , SET_PROFILE }

export const profileFetchSuccess = (data: UserInfo) => ({
    type: GET_PROFILE,
    payload: { ...data }
})

export const getProfile = () =>
    (dispatch: Dispatch<any>) => {
        api.getUserInfo().then((response) => {
            response && dispatch(profileFetchSuccess(response));
        });
    }
