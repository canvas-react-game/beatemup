import {Request, Response} from "express"
import { ValidationError } from "sequelize"
import { addDBTopic, getDBTopics } from "@/server/db/forum/actions/topics"

export const getTopics = async (req: Request, res: Response) => {
    try {
        const topics = await getDBTopics()
        if(!topics || !topics.length) {
            return res.status(400).send({message: "Топики отсутствуют"})
        }
        return res.status(200).send(topics)
    }
    catch(err) {
        console.log(err)
        return res.status(500).send({message: "Ошибка сервера"})
    }
}

export const addTopic = async (req: Request, res: Response) => {
    try {
        const topic = await addDBTopic(req.body)
        if(!topic) {
            return res.status(400).send({message: "Ошибка добавления топика"})
        }
        return res.status(200).send(topic)
    }
    catch(err) {
        if(err instanceof ValidationError) {
            return res.status(400).send({message: "Ошибка добавления топика. Неверный формат данных"})
        } else {
            return res.status(500).send({message: "Ошибка сервера"})
        }
    }
}