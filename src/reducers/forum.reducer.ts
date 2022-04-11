import { ForumAction } from "@/actions/forum.actions";
import { FORUM_LOAD, FORUM_SET_LOADING } from "@/actions/types/forum.types";

export interface ForumState {
    isLoading: boolean
    data: any
}

export const FORUM_INIT_STATE: ForumState = {
    isLoading: false,
    data: [],
};

/* eslint-disable @typescript-eslint/default-param-last */
export const forumReducer = (
    state: ForumState = FORUM_INIT_STATE,
    action: ForumAction,
): ForumState => {
    switch (action.type) {
        case FORUM_LOAD:
            return {
                ...state,
                data: action.payload.data,
            };
        case FORUM_SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        default:
            return state;
    }
};
/* eslint-enable @typescript-eslint/default-param-last */
