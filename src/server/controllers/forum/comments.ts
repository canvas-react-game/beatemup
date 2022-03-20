import { Request, Response } from "express";
import { ValidationError } from "sequelize";
import {
    getDBComments, addDBComment,
} from "@/server/db/forum/actions/comments";
import { createSafeDecorator } from "@/server/utils/safeDecorator";
import { HttpStatuses } from "@/server/utils/httpStatuses";

const commentsErrorHandler = (err: unknown, res: Response) => {
    if (err instanceof ValidationError) {
        return res.status(HttpStatuses.BadRequest).send({ message: "Неверный формат данных" });
    }
    return res.status(HttpStatuses.ServerError).send({ message: "Ошибка сервера" });
};
const Safe = createSafeDecorator(commentsErrorHandler);

class CommentsController {
    @Safe
    async get(req: Request, res: Response) {
        const id = Number(req.params.id);
        const topics = await getDBComments(id);
        if (!topics || !topics.length) {
            return res.status(HttpStatuses.BadRequest).send({ message: "Комментарии отсутствуют" });
        }
        return res.status(HttpStatuses.OK).send(topics);
    }

    @Safe
    async add(req: Request, res: Response) {
        const topic = await addDBComment(req.body);
        if (!topic) {
            return res.status(HttpStatuses.BadRequest).send(
                { message: "Ошибка добавления комментария" },
            );
        }
        return res.status(HttpStatuses.Created).send(topic);
    }
}

export default new CommentsController();
