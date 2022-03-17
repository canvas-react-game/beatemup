import { TopicAction } from "@/actions/topic.actions";
import { LOAD, SET_LOADING } from "@/actions/types/forum.types";

interface TopicData {
    id: number,
    title: string,
    body: string,
    created_at: string,
    user_id: number,
    comments_count: number | null,
}

export interface TopicState {
    isLoading: boolean
    data: TopicData
}

export const TOPIC_INIT_STATE: TopicState = {
    isLoading: false,
    data: {
        id: 0,
        title: "",
        body: "",
        created_at: "",
        user_id: 0,
        comments_count: null,
    },
};

/* eslint-disable @typescript-eslint/default-param-last */
export const topicReducer = (
    state: TopicState = TOPIC_INIT_STATE,
    action: TopicAction,
): TopicState => {
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
