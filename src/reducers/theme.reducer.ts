import { ThemeAction } from "@/actions/theme.actions";
import { Theme } from "@/api/Theme/Theme.api";
import { SET_THEME } from "@/actions/types/theme.types";

const initialState: Theme = null;

/* eslint-disable @typescript-eslint/default-param-last */
export const themeReducer = (
    state: Theme = initialState,
    action: ThemeAction,
) => {
    switch (action.type) {
        case SET_THEME:
            return action.payload;
        default:
            return state;
    }
};
/* eslint-enable @typescript-eslint/default-param-last */
