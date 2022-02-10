import { LeaderBoardData } from "config/leaderboard";
import { LeaderBoardState } from "reducers/leaderboard.reducer";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { LOAD, SET_LOADING } from "./types/leaderboard.types";
import LeaderboardApi from "../api/Leaderboard"

export type LeaderBoardAction = GetLeaderBoard | SetLoading;

type GetLeaderBoard = {
    type: typeof LOAD,
    payload: Pick<LeaderBoardState, "data">
}
const getLeaderBoard = (data: LeaderBoardData): GetLeaderBoard => ({
    type: LOAD,
    payload: {data}
})

type SetLoading = {
    type: typeof SET_LOADING,
    payload: Pick<LeaderBoardState, "isLoading">
}
const setLoading = (isLoading: boolean): SetLoading => ({
    type: SET_LOADING,
    payload: {isLoading} 
})

export const loadLeaderBoard = 
    (cursor: number): ThunkAction<void, unknown, unknown, AnyAction> => 
    async (dispatch, _state) => {
        dispatch(setLoading(true));
        try {
            const data = await LeaderboardApi.getLeaderBoard(cursor);
            if (data) {
                dispatch(getLeaderBoard(data))
            }             
            dispatch(setLoading(false));
        } catch (error) {
            dispatch(setLoading(false));
        }
}