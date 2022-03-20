import { Comment } from "../models/comments";

export const getDBComments = (id: number): Promise<any> => Comment
    .findAll({ where: { topic_id: id } });

// TODO: Разобраться с типами
export const addDBComment = (comment: any): Promise<any> => {
    const data = {
        message: comment?.message,
        user_id: comment?.user_id,
        topic_id: comment?.topic_id,
    } as any;
    return Comment.create(data);
};
