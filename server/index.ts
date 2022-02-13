import app from "./server";
import { startApp } from "./utils";

// process.env.PORT нужно для Heroku
const port = process.env.PORT || 3000;

startApp(app, port);
