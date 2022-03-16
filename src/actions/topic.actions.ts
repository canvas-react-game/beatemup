// import { LeaderBoardData } from "config/leaderboard";
import { ForumState } from "reducers/forum.reducer";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { LOAD, SET_LOADING } from "./types/topic.types";
import api from "../api/Forum";

export type TopicAction = GetTopic | SetLoading;

type GetTopic = {
    type: typeof LOAD,
    payload: Pick<ForumState, "data">
};

const getTopic = (data: any): GetTopic => ({
    type: LOAD,
    payload: { data },
});

type SetLoading = {
    type: typeof SET_LOADING,
    payload: Pick<ForumState, "isLoading">
};

const setLoading = (isLoading: boolean): SetLoading => ({
    type: SET_LOADING,
    payload: { isLoading },
});

export const loadTopic = (id: number):
ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    dispatch(setLoading(true));
    try {
        const data = await api.getTopic(id);
        if (data) {
            dispatch(getTopic(data));
        }
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
    }
};
