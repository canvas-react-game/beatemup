import { TopicAction } from "@/actions/topic.actions";
import { LOAD, SET_LOADING } from "@/actions/types/forum.types";
// import { LeaderBoardData } from "@/config/leaderboard";

export interface TopicState {
    isLoading: boolean
    data: any
}

export const TOPIC_INIT_STATE: TopicState = {
    isLoading: false,
    data: {},
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
