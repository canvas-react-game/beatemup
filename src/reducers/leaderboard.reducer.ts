import { LeaderBoardAction } from "@/actions/leaderboard.actions"
import { LOAD, SET_LOADING } from "@/actions/types/leaderboard.types"
import { LeaderBoardData } from "@/config/leaderboard"

export interface LeaderBoardState {
    isLoading: boolean
    data: LeaderBoardData
}

export const LEADERBOARD_INIT_STATE: LeaderBoardState = {
    isLoading: false,
    data: []
}

export const leaderBoardReducer = (
    state: LeaderBoardState = LEADERBOARD_INIT_STATE, 
    action: LeaderBoardAction
): LeaderBoardState => {
    switch(action.type) {
        case LOAD:
            return {
                ...state,
                data: action.payload.data
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        default:
            return state
    }
}