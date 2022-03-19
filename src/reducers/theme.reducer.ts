import { ThemeAction } from "@/actions/theme.actions";
import { ThemeData } from "@/api/Theme/Theme.api";
import {
    SET_THEME,
} from "@/actions/types/theme.types";

export interface ThemeState {
    data: ThemeData;
}

const initialState: ThemeState = {
    data: {
        theme: "light",
    },
};

/* eslint-disable @typescript-eslint/default-param-last */
export const themeReducer = (
    state: ThemeState = initialState,
    action: ThemeAction,
) => {
    switch (action.type) {
        case SET_THEME:
            return {
                data: { ...action.payload.data },
            };
        default:
            return state;
    }
};
/* eslint-enable @typescript-eslint/default-param-last */
