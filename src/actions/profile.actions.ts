import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import api, { SignUpData, UserInfo } from "@/api/Auth/Auth.api";
import profileApi, { PasswordData } from "@/api/Profile/Profile.api";

import {
    GET_PROFILE,
    PROFILE_LOADING,
    SET_PROFILE,
    SET_PASSWORD,
} from "./types/profile.types";

type ProfileFetched = {
    type: typeof GET_PROFILE;
    payload: { data: UserInfo };
};

type ProfileUploaded = {
    type: typeof SET_PROFILE;
    payload: { data: UserInfo };
};

type ProfileLoading = {
    type: typeof PROFILE_LOADING;
    payload: { isLoading: boolean };
};

type PasswordUpdated = {
    type: typeof SET_PASSWORD;
};

export enum ProfileStages {
    INIT = "init",
    LOADING = "loading",
    DONE = "done",
}

const loading = (isLoading: boolean): ProfileLoading => ({
    type: PROFILE_LOADING,
    payload: { isLoading },
});

export const profileFetchSuccess = (data: UserInfo): ProfileFetched => ({
    type: GET_PROFILE,
    payload: { data },
});

const profileUploadSuccess = (data: UserInfo): ProfileFetched => ({
    type: GET_PROFILE,
    payload: { data },
});

const passwordUpdateSuccess = () => ({
    type: SET_PASSWORD,
});

export const getProfile =
    (): ThunkAction<void, unknown, unknown, AnyAction> =>
    async (dispatch, _state) => {
        dispatch(loading(true));
        try {
            const response = await api.getUserInfo();
            if (response) {
                dispatch(profileFetchSuccess(response));
            } else {
                dispatch(loading(false));
            }
        } catch (error) {
            dispatch(loading(false));
        }
    };

export const setProfile =
    (
        data: Omit<SignUpData, "password">
    ): ThunkAction<void, unknown, unknown, AnyAction> =>
    async (dispatch, _state) => {
        dispatch(loading(true));
        try {
            const response = await profileApi.setProfile(data);
            if (response) {
                dispatch(profileUploadSuccess(response));
            } else {
                dispatch(loading(false));
            }
        } catch (error) {
            dispatch(loading(false));
        }
    };

export const setPassword =
    (data: PasswordData): ThunkAction<void, unknown, unknown, AnyAction> =>
    async (dispatch, _state) => {
        dispatch(loading(true));
        try {
            const response = await profileApi.setPassword(data);
            if (response) {
                dispatch(passwordUpdateSuccess());
            } else {
                dispatch(loading(false));
            }
        } catch (error) {
            dispatch(loading(false));
        }
    };

export type ProfileAction =
    | ProfileFetched
    | ProfileUploaded
    | ProfileLoading
    | PasswordUpdated;
