import express from "express";
import router from "./router";

const app = express();

app.use(express.static(`${__dirname}`));
app.use("/", router);

export { app };
