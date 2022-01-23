import {AnyAction} from "redux";
import {ThunkAction} from "redux-thunk";

import api, {SignUpData, UserInfo} from "@/api/Auth/Auth.api";
import profileApi from "@/api/Profile/Profile.api";

import {GET_PROFILE, PROFILE_LOADING, SET_PROFILE} from "./types/profile.types";

type ProfileFetched = {
    type: typeof GET_PROFILE;
    payload: { data: UserInfo }
};

type ProfileUploaded = {
    type: typeof SET_PROFILE;
    payload: { data: UserInfo }
};

type ProfileLoading = {
    type: typeof PROFILE_LOADING;
    payload: { isLoading: boolean };
}

export enum ProfileStages {
    INIT = "init",
    LOADING = "loading",
    DONE = "done",
}

const loading = (isLoading: boolean): ProfileLoading => ({
    type: PROFILE_LOADING,
    payload: { isLoading }
})

export const profileFetchSuccess = (data: UserInfo): ProfileFetched => ({
    type: GET_PROFILE ,
    payload: { data }
})

const profileUploadSuccess = (data: UserInfo): ProfileFetched => ({
    type: GET_PROFILE ,
    payload: { data }
})

export const getProfile = (): ThunkAction<void, unknown, unknown, AnyAction> =>
    async (dispatch, _state,) => {
        dispatch(loading(true));
        try {
            const response = await api.getUserInfo();
            if (response) {
                dispatch(profileFetchSuccess(response));
            }
        } catch (error) {
            dispatch(loading(false));
        }
};

export const setProfile = (data: Omit<SignUpData, 'password'>): ThunkAction<void, unknown, unknown, AnyAction> =>
    async (dispatch, _state) => {
        dispatch(loading(true));
        try {
            const response = await profileApi.setProfile(data);
            if (response) {
                dispatch(profileUploadSuccess(response));
            }
        } catch (error) {
            dispatch(loading(false));
        }
    };

export type ProfileAction = ProfileFetched | ProfileUploaded | ProfileLoading;
