import express from "express";
import { addTopic, getTopics } from "@/server/controllers";
import { apiBase } from "@/services/API/API.service";
import bodyParser from "body-parser";

const apiRouter = express.Router();

apiRouter.get(apiBase + "/topics", bodyParser.json(), getTopics)
apiRouter.post(apiBase + "/topics", bodyParser.json(), addTopic)

export { apiRouter };
