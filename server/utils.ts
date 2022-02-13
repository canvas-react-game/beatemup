import { Express } from "express";

const htmlescape = require("htmlescape");

const makeHTMLPage = (content: string) => `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Game</title>
                </head>

                <body>
                    <div id="root">${htmlescape(content)}</div>
                </body>
        </html>
    `;

const startApp = (app: Express, port: number | string) => {
    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
};

export { makeHTMLPage, startApp };
