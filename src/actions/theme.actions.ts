import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { notification } from "antd";

import api, { ThemeData } from "@/api/Theme/Theme.api";

import {
    SET_THEME,
} from "./types/theme.types";

type ThemeRequest = {
    type: typeof SET_THEME;
    payload: { data: ThemeData | null };
};

export const themeRequest = (data: ThemeData | null): ThemeRequest => ({
    type: SET_THEME,
    payload: { data },
});

// eslint-disable-next-line max-len
export const getTheme = (): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    try {
        const response = await api.getTheme();
        dispatch(themeRequest(response));
    } catch (error) {
        notification.error({ message: "Произошла неизвестная ошибка" });
    }
};

// eslint-disable-next-line max-len
export const setTheme = (data: ThemeData): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    try {
        const response = await api.updateTheme(data);
        dispatch(themeRequest(response));
    } catch (error) {
        notification.error({ message: "Произошла неизвестная ошибка" });
    }
};

export type ThemeAction =
    | ThemeRequest;
