import {Request, Response} from "express"
import { ValidationError } from "sequelize"
import { addDBTopic, getDBTopics } from "@/server/db/forum/actions/topics"
import { createSafeDecorator } from "@/server/utils/safeDecorator"

const topicErrorHandler = (err: unknown, res: Response) => {
    if(err instanceof ValidationError) {
        return res.status(400).send({message: "Неверный формат данных"})
    } else {
        return res.status(500).send({message: "Ошибка сервера"})
    }
}
const Safe = createSafeDecorator(topicErrorHandler)

class TopicController {

    @Safe
    async get(req: Request, res: Response) {
        const topics = await getDBTopics()
        if(!topics || !topics.length) {
            return res.status(400).send({message: "Топики отсутствуют"})
        }
        return res.status(200).send(topics)
    }

    @Safe
    async add(req: Request, res: Response) {
        const topic = await addDBTopic(req.body)
        if(!topic) {
            return res.status(400).send({message: "Ошибка добавления топика"})
        }
        return res.status(200).send(topic)
    }

}

export default new TopicController()