import { CommentsEditData, CommentsState } from "reducers/comments.reducer";
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { LOAD, SET_LOADING } from "./types/topic.types";
import api from "../api/Forum";

export type CommentAction = GetComment | SetLoading;

type GetComment = {
    type: typeof LOAD,
    payload: Pick<CommentsState, "data">
};

const getComment = (data: any): GetComment => ({
    type: LOAD,
    payload: { data },
});

type SetLoading = {
    type: typeof SET_LOADING,
    payload: Pick<CommentsState, "isLoading">
};

const setLoading = (isLoading: boolean): SetLoading => ({
    type: SET_LOADING,
    payload: { isLoading },
});

export const loadComment = (id: number):
ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    dispatch(setLoading(true));
    try {
        const data = await api.getComments(id);
        if (data) {
            dispatch(getComment(data));
        }
        dispatch(setLoading(false));
    } catch (error) {
        dispatch(setLoading(false));
    }
};

export const createComment = (
    data: CommentsEditData,
): ThunkAction<void, unknown, unknown, AnyAction> => async (dispatch, _state) => {
    dispatch(setLoading(true));
    try {
        const response = await api.createComment(data);
        if (response) {
            //history.push(routes.forum.path);
        } else {
            dispatch(setLoading(false));
        }
    } catch (error) {
        dispatch(setLoading(false));
    }
};
