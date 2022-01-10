const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(express.static(`${__dirname}/dist`));

// NOTE: Базовая защита от DDOS
const limiter = rateLimit({
    windowMs: 20 * 60 * 1000,
    max: 100,
});
app.use(limiter);

const port = 3000;

app.get("*", (req, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

// process.env.PORT нужно для Heroku
app.listen(process.env.PORT || port, () => {
    console.log(`Server started on port ${process.env.PORT || port}`);
});