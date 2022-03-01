import { Topic } from "../models/topic";

export const getDBTopics = (): Promise<any> => {
    return Topic.findAll()
}

export const getDBTopic = (id: number): Promise<any> => {
    return Topic.findOne({where: {id}})
}

// TODO: Разобраться с типами
export const addDBTopic = (topic: any): Promise<any> => {
    const data = {
        title: topic?.title,
        body: topic?.body,
        user_id: topic?.user_id,
    } as any
    return Topic.create(data)
}

export const updateDBTopic = (id: number, topic: any): Promise<any> => {
    const data = {} as any
    if(topic?.title) data.title = topic.title
    if(topic?.body) data.body = topic.body
    if(topic?.user_id) data.user_id = topic.user_id
    return Topic.update(data, {where: {id}})
}

export const removeDBTopic = (id: number): Promise<any> => {
    return Topic.destroy({
        where: {id}
    })
}