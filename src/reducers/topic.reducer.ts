import { TopicAction } from "@/actions/topic.actions";
import { TOPIC_LOAD, TOPIC_SET_LOADING } from "@/actions/types/topic.types";

export interface TopicEditData {
    title: string,
    body: string,
}

interface TopicData extends TopicEditData {
    id: number,
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
        case TOPIC_LOAD:
            return {
                ...state,
                data: action.payload.data,
            };
        case TOPIC_SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        default:
            return state;
    }
};
/* eslint-enable @typescript-eslint/default-param-last */
