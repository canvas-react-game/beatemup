import express from "express";
import bodyParser from "body-parser";
import TopicController from "@/server/controllers";
import { apiBase } from "@/services/API/API.service";
import AuthService from "@/server/services/auth";

const apiRouter = express.Router();
const middlewares = [
    bodyParser.json(),
    AuthService.setAuth.bind(AuthService),
    AuthService.checkAuth.bind(AuthService),
];

apiRouter.get(`${apiBase}/topics`, ...middlewares, TopicController.get);
apiRouter.post(`${apiBase}/topics`, ...middlewares, TopicController.add);
apiRouter.put(`${apiBase}/topics/:id`, ...middlewares, TopicController.update);
apiRouter.delete(`${apiBase}/topics/:id`, ...middlewares, TopicController.delete);

export { apiRouter };
