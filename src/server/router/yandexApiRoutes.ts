import express from "express";
import { base } from "@/services/API/API.service";
import {
    apiProxy,
} from "../middlewares";
import AuthService from "@/server/services/auth";

const yandexApiRouter = express.Router();

yandexApiRouter.all(`${base}/*`, apiProxy, AuthService.setAuth.bind(AuthService));

export { yandexApiRouter };
