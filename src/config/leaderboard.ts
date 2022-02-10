export const TEAM_SCORE = "southParkGameScore";
export const RECORDS_PER_PAGE = 10;

export interface LeaderBoardRecord {
    login: string
    [TEAM_SCORE]: number
}

export type LeaderBoardRecordRequest = {
    data: LeaderBoardRecord,
    ratingFieldName: typeof TEAM_SCORE,
    teamName: "southpark"
}

export type LeaderBoardGetRequest = {
    ratingFieldName: typeof TEAM_SCORE,
    cursor: number,
    limit: typeof RECORDS_PER_PAGE
}

// NOTE: any потому что сюда могут любую какашку положить
export type LeaderBoardData = Array<{data: LeaderBoardRecord & any}>