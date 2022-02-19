import express from "express";
import router from "./router";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.static(`${__dirname}`));
app.use(cookieParser());
app.use("/", router);

export { app };
