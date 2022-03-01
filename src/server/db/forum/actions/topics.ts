import { Topic } from "../models/topic";

export const getDBTopics = (): Promise<any> => {
    return Topic.findAll()
}

export const addDBTopic = (topic: any): Promise<any> => {
    const data = {
        title: topic.title,
        body: topic.body,
        user_id: topic.user_id,
    } as any
    return Topic.create(data)
}