import express from "express";
import { base } from "@/services/API/API.service";
import {
    apiProxy,
} from "../middlewares";

const yandexApiRouter = express.Router();

yandexApiRouter.all(`${base}/*`, apiProxy);

export { yandexApiRouter };
