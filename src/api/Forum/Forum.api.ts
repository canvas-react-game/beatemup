import { notification } from "antd";
import { Method, LocalAPIService } from "@/services/API/API.service";
import { TopicEditData } from "@/reducers/topic.reducer";
import { CommentsData, CommentsEditData } from "@/reducers/comments.reducer";

type ForumData = {};

const topicRoot = "topics";
const commentsRoot = "comments";

class ForumApi {
    isSuccessfulRequest(response: Response) {
        const errorMessage = "Отправленные данные не корректны";
        switch (response.status) {
            case 200:
            case 201:
                return true;
            case 400:
                notification.error({ message: errorMessage });
                return false;
            case 401:
                notification.error({ message: "Ошибка авторизации" });
                return false;
            case 500:
                notification.error({ message: "Произошла неизвестная ошибка" });
                return false;
            default:
                return false;
        }
    }

    public async getTopics(): Promise<ForumData[] | []> {
        const response = await LocalAPIService.request(Method.GET, topicRoot);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result ?? [];
            }
        }
        return [];
    }

    public async getComments(id: number): Promise<CommentsData[] | []> {
        const response = await LocalAPIService.request(Method.GET, `${commentsRoot}/${id}`);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result ?? [];
            }
        }
        return [];
    }

    public async getTopic(id: number): Promise<ForumData | null> {
        const response = await LocalAPIService.request(Method.GET, `${topicRoot}/${id}`);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result ?? null;
            }
        }
        return null;
    }

    public async createTopic(data: TopicEditData): Promise<boolean> {
        const response = await LocalAPIService.request(Method.POST, topicRoot, data);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result;
            }
        }
        return false;
    }

    public async createComment(data: CommentsEditData): Promise<boolean> {
        const response = await LocalAPIService.request(Method.POST, commentsRoot, data);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result;
            }
        }
        return false;
    }

    public async updateTopic(id: number, data: TopicEditData): Promise<TopicEditData | null> {
        const response = await LocalAPIService.request(Method.PUT, `${topicRoot}/${id}`, data);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result ?? null;
            }
        }
        return null;
    }
}

export default new ForumApi();
