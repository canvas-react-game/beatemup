//import { LeaderBoardData } from "config/leaderboard";
import { ForumState } from "reducers/forum.reducer";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { LOAD, SET_LOADING } from "./types/forum.types";
import forumApi from "../api/Forum";

export type LeaderBoardAction = GetForumTopics | SetLoading;

type GetForumTopics = {
    type: typeof LOAD,
    payload: Pick<ForumState, "data">
};
const getTopics = (data: any[]): GetForumTopics => ({
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

export const loadForumTopics = ():
    ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    dispatch(setLoading(true));
    try {
        const data = await forumApi.getTopics();
        if (data) {
            dispatch(getTopics(data));
        }
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
    }
};
