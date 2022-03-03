import express from "express";
import router from "./router";
import cookieParser from "cookie-parser";
import { apiProxy } from "./middlewares";

const app = express();

app.use(express.static(`${__dirname}`));
app.use(cookieParser());
app.use(apiProxy);
app.use("/", router);

export { app };
