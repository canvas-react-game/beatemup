import { notification } from "antd";
import { Method, LocalAPIService } from "@/services/API/API.service";
import { TopicEditData } from "@/reducers/topic.reducer";
import { CommentsData } from "@/reducers/comments.reducer";

type ForumData = {};

const root = "topics";

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
        const response = await LocalAPIService.request(Method.GET, root);
        if (response) {
            const success = this.isSuccessfulRequest(response);
            if (success) {
                const result = await response.json();
                return result ?? [];
            }
        }
        return [];
    }

    public async getComments(): Promise<CommentsData[] | []> {
        // todo
        const response = await LocalAPIService.request(Method.GET, root);
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
        const response = await LocalAPIService.request(Method.GET, `${root}/${id}`);
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
        const response = await LocalAPIService.request(Method.POST, root, data);
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
        const response = await LocalAPIService.request(Method.PUT, `${root}/${id}`, data);
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
