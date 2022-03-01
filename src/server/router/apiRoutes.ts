import express from "express";
import TopicController from "@/server/controllers";
import { apiBase } from "@/services/API/API.service";
import bodyParser from "body-parser";

const apiRouter = express.Router();

apiRouter.get(apiBase + "/topics", bodyParser.json(), TopicController.get)
apiRouter.post(apiBase + "/topics", bodyParser.json(), TopicController.add)

export { apiRouter };
