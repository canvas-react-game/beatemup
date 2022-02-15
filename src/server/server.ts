import express from "express";
import { limiterMiddleware, serverRenderMiddleware } from "./middlewares";

const app = express();

app.use(express.static(`${__dirname}`));
app.use(limiterMiddleware);

app.get("/*", serverRenderMiddleware);

export { app };
