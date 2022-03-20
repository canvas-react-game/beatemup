import { Comment } from "../models/comments";

export const getDBComments = (topicId: number): Promise<any> => Comment.findByPk(topicId);

// TODO: Разобраться с типами
export const addDBComment = (comment: any): Promise<any> => {
    const data = {
        message: comment?.message,
        user_id: comment?.user_id,
        topic_id: comment?.topic_id,
    } as any;
    return Comment.create(data);
};
