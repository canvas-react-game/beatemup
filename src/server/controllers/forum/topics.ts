import { Request, Response } from "express";
import { ValidationError } from "sequelize";
import {
    addDBTopic, getDBTopics, updateDBTopic, removeDBTopic, getDBTopic,
} from "@/server/db/forum/actions/topics";
import { createSafeDecorator } from "@/server/utils/safeDecorator";
import { HttpStatuses } from "@/server/utils/httpStatuses";

const topicErrorHandler = (err: unknown, res: Response) => {
    if (err instanceof ValidationError) {
        return res.status(HttpStatuses.BadRequest).send({ message: "Неверный формат данных" });
    }
    return res.status(HttpStatuses.ServerError).send({ message: "Ошибка сервера" });
};
const Safe = createSafeDecorator(topicErrorHandler);

class TopicController {
    @Safe
    async get(req: Request, res: Response) {
        const topics = await getDBTopics();
        if (!topics || !topics.length) {
            return res.status(HttpStatuses.BadRequest).send({ message: "Топики отсутствуют" });
        }
        return res.status(HttpStatuses.OK).send(topics);
    }

    @Safe
    async add(req: Request, res: Response) {
        const topic = await addDBTopic(req.body);
        if (!topic) {
            return res.status(HttpStatuses.BadRequest).send(
                { message: "Ошибка добавления топика" },
            );
        }
        return res.status(HttpStatuses.Created).send(topic);
    }

    @Safe
    async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const resultArray = await updateDBTopic(id, req.body);
        const result = resultArray[0];
        if (!result) {
            return res.status(HttpStatuses.BadRequest).send({ message: "Ошибка изменения топика" });
        }
        const topic = await getDBTopic(id);
        return res.status(HttpStatuses.OK).send(topic);
    }

    @Safe
    async delete(req: Request, res: Response) {
        const id = Number(req.params.id);
        const result = await removeDBTopic(id);
        if (!result) {
            return res.status(HttpStatuses.BadRequest).send({ message: "Ошибка удаления топика" });
        }
        return res.status(HttpStatuses.OK).sendStatus(HttpStatuses.OK);
    }
}

export default new TopicController();
