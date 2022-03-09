import express from "express";
import bodyParser from "body-parser";
import { checkAuth } from "server/middlewares/auth";
import TopicController from "@/server/controllers";
import { apiBase } from "@/services/API/API.service";

const apiRouter = express.Router();
const middlewares = [
    bodyParser.json(),
    checkAuth,
];

apiRouter.get(`${apiBase}/topics`, ...middlewares, TopicController.get);
apiRouter.post(`${apiBase}/topics`, ...middlewares, TopicController.add);
apiRouter.put(`${apiBase}/topics/:id`, ...middlewares, TopicController.update);
apiRouter.delete(`${apiBase}/topics/:id`, ...middlewares, TopicController.delete);

export { apiRouter };
