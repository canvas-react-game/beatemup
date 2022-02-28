import express from "express";
import cookieParser from "cookie-parser";
import { appRouter } from "./router/appRoutes";
import { apiRouter } from "./router";

const app = express();

app.use(express.static(`${__dirname}`));
app.use(cookieParser());
app.use(apiRouter);
app.use(appRouter);

export { app };
