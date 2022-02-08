import { notification } from "antd";

import APIService from "@/services/API";
import { Method } from "@/services/API/API.service";
import { LeaderBoardData, LeaderBoardRecord, LeaderBoardRecordRequest, TEAM_SCORE } from "config/routes/leaderboard";

const root = "leaderboard";

// enum LeaderBoardAPIMethods {
//     GetLeaderBoard = "GetLeaderBoard",
//     PostLeaderBoardRecord = "PostLeaderBoardRecord",
// }
// type LeaderBoardRequestType = LeaderBoardAPIMethods.GetLeaderBoard | 
//                         LeaderBoardAPIMethods.PostLeaderBoardRecord 

class LeaderBoardApi {

    public async getLeaderBoard(): Promise<LeaderBoardData | null> {
        const response = await APIService.request(Method.POST, `${root}/all`);
        if (response.ok) {
            // notification.success({ message: "" });
            const result = await response.json();
            return result ?? null;
        }
        if(response.status >= 400 && response.status < 500) {
            // notification.success({ message: "" });
        }
        if(response.status >= 500) {
            notification.success({ message: "Не удалось получить данные лидерборда" });
        }
        return null;
    }

    public async createLeaderBoardRecord(data: LeaderBoardRecord): Promise<boolean | null> {
        const body: LeaderBoardRecordRequest = {
            data,
            ratingFieldName: TEAM_SCORE,
            teamName: "southpark"
        }
        const response = await APIService.request(Method.POST, `${root}`, body);
        if (response.ok) {
            // notification.success({ message: "" });
            const result = await response.json();
            return result ?? null;
        }
        if(response.status >= 400 && response.status < 500) {
            // notification.success({ message: "" });
        }
        if(response.status >= 500) {
            notification.success({ message: "Не удалось получить данные лидерборда" });
        }
        return null;
    }
}

export default new LeaderBoardApi()