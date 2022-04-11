import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { getCookie } from "@/helpers/acess";

import api, { Theme } from "@/api/Theme/Theme.api";

import {
    SET_THEME,
} from "./types/theme.types";

type ThemeRequest = {
    type: typeof SET_THEME;
    payload: Theme | null;
};

export const themeRequest = (data: Theme | null): ThemeRequest => ({
    type: SET_THEME,
    payload: data,
});

// eslint-disable-next-line max-len
export const getTheme = (): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    const id = getCookie("userId") || "";
    const response: any = await api.getTheme(id);
    dispatch(themeRequest(response ? response.theme : response));

    if (response.theme === "dark") {
        document.body.classList.remove("light");
    } else if (response.theme === "light") {
        document.body.classList.remove("dark");
    }

    document.body.classList.add(response.theme);
};

// eslint-disable-next-line max-len
export const updateTheme = (data: Theme): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    const id = getCookie("userId") || "";
    const response: any = await api.updateTheme(id, data);
    dispatch(themeRequest(response ? response.theme : response));

    if (response.theme === "dark") {
        document.body.classList.remove("light");
    } else if (response.theme === "light") {
        document.body.classList.remove("dark");
    }

    document.body.classList.add(response.theme);
};

// eslint-disable-next-line max-len
export const createTheme = (data: Theme): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    const userId = getCookie("userId") || "";

    const response: any = await api.createTheme({
        theme: data,
        user_id: userId,
    });
    dispatch(themeRequest(response ? response.theme : response));

    if (!response) return;

    if (response.theme === "dark") {
        document.body.classList.remove("light");
    } else if (response.theme === "light") {
        document.body.classList.remove("dark");
    }

    document.body.classList.add(response.theme);
};

export type ThemeAction =
    | ThemeRequest;
