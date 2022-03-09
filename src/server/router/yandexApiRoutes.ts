import express from "express";
import { base } from "@/services/API/API.service";
import {
    apiProxy,
} from "../middlewares";
import { checkAuth } from "@/server/middlewares/auth";

const yandexApiRouter = express.Router();

yandexApiRouter.all(`${base}/*`, apiProxy, checkAuth);

export { yandexApiRouter };
