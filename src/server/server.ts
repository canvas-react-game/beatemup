import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import { apiRouter, appRouter, yandexApiRouter } from "./router";

const app = express();

app.use(express.static(`${__dirname}`));
app.use(cookieParser());
app.use(apiRouter);
app.use(yandexApiRouter);
app.use(appRouter);

export { app };
