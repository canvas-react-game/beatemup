import express from "express";
import { base } from "@/services/API/API.service";
import {
    apiProxy,
} from "../middlewares";

const apiRouter = express.Router();

apiRouter.all(base+"/*", apiProxy);

export {apiRouter};