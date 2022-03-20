import { CommentAction } from "@/actions/comments.actions";
import { LOAD, SET_LOADING } from "@/actions/types/forum.types";

export interface CommentsData {
    id: number,
    message: string,
    user_id: number,
    parent_id: number,
    topic_id: number,
}

export interface CommentsState {
    isLoading: boolean
    data: CommentsData[]
}

export const COMMENTS_INIT_STATE: CommentsState = {
    isLoading: false,
    data: [],
};

/* eslint-disable @typescript-eslint/default-param-last */
export const commentsReducer = (
    state: CommentsState = COMMENTS_INIT_STATE,
    action: CommentAction,
): CommentsState => {
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
