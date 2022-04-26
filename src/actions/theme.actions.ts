import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { getUserIdCookie } from "@/helpers/acess";

import api, { Theme, ThemeData } from "@/api/Theme/Theme.api";

import {
    SET_THEME,
} from "./types/theme.types";

type ThemeRequest = {
    type: typeof SET_THEME;
    payload: Theme | null;
};

const LIGHT_THEME = "light";
const DARK_THEME = "dark";

// Обновляем тему в DOM
const updateDOMTheme = (theme: string) => {
    if (theme === DARK_THEME) {
        document.body.classList.remove(LIGHT_THEME);
    } else if (theme === LIGHT_THEME) {
        document.body.classList.remove(DARK_THEME);
    }

    document.body.classList.add(theme);
};

export const themeRequest = (data: Theme | null): ThemeRequest => ({
    type: SET_THEME,
    payload: data,
});

// eslint-disable-next-line max-len
export const getTheme = (): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    const id = getUserIdCookie();
    const themeData: ThemeData | null = await api.getTheme(id);
    const theme = themeData?.theme || LIGHT_THEME;
    dispatch(themeRequest(theme));
    //
    updateDOMTheme(theme);
};

// eslint-disable-next-line max-len
export const updateTheme = (data: Theme): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    const id = getUserIdCookie();
    const themeData: ThemeData | null = await api.updateTheme(id, data);
    const theme = themeData?.theme || LIGHT_THEME;
    dispatch(themeRequest(theme));
    //
    updateDOMTheme(theme);
};

// eslint-disable-next-line max-len
export const createTheme = (data: Theme): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    const userId = getUserIdCookie();
    const themeData: ThemeData | null = await api.createTheme({
        theme: data,
        user_id: userId,
    });
    const theme = themeData?.theme || LIGHT_THEME;
    dispatch(themeRequest(theme));
    //
    if (!themeData) return;
    //
    updateDOMTheme(theme);
};

export type ThemeAction =
    | ThemeRequest;
