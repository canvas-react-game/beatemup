import { LeaderBoardAction } from "actions/leaderboard.actions"
import { LOAD } from "actions/types/leaderboard.types"
import { LeaderBoardData } from "config/routes/leaderboard"

export interface LeaderBoardState {
    isLoading: boolean
    data: LeaderBoardData
}

export const LEADERBOARD_INIT_STATE : LeaderBoardState = {
    isLoading: false,
    data: []
}

export const leaderBoardReducer = (
    state: LeaderBoardState = LEADERBOARD_INIT_STATE, 
    action: LeaderBoardAction
) => {
    switch(action.type) {
        case LOAD:
            return {
                ...state,
                data: action.payload.data
            }
        default:
            return state
    }
}