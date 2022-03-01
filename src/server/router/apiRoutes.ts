import express from "express";
import bodyParser from "body-parser";
import TopicController from "@/server/controllers";
import { apiBase } from "@/services/API/API.service";

const apiRouter = express.Router();

apiRouter.get(`${apiBase}/topics`, bodyParser.json(), TopicController.get);
apiRouter.post(`${apiBase}/topics`, bodyParser.json(), TopicController.add);
apiRouter.put(`${apiBase}/topics/:id`, bodyParser.json(), TopicController.update);
apiRouter.delete(`${apiBase}/topics/:id`, bodyParser.json(), TopicController.delete);

export { apiRouter };
