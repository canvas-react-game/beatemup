import { LeaderBoardAction } from "@/actions/leaderboard.actions";
import { LOAD, SET_LOADING } from "@/actions/types/forum.types";
// import { LeaderBoardData } from "@/config/leaderboard";

export interface ForumState {
    isLoading: boolean
    // todo
    data: any
}

export const FORUM_INIT_STATE: ForumState = {
    isLoading: false,
    data: [],
};

/* eslint-disable @typescript-eslint/default-param-last */
export const forumReducer = (
    state: ForumState = FORUM_INIT_STATE,
    action: LeaderBoardAction,
): ForumState => {
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                data: action.payload.data,
            };
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        default:
            return state;
    }
};
/* eslint-enable @typescript-eslint/default-param-last */
