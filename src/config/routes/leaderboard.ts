export const TEAM_SCORE = "southParkGameScore";

export interface LeaderBoardRecord {
    login: string
    [TEAM_SCORE]: number
}

export type LeaderBoardRecordRequest = {
    data: LeaderBoardRecord,
    ratingFieldName: typeof TEAM_SCORE,
    teamName: "southpark"
}

// NOTE: any потому что сюда могут любую какашку положить
export type LeaderBoardData = Array<{data: LeaderBoardRecord & any}>