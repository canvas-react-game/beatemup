import { HelmetData } from "react-helmet";
const htmlescape = require("htmlescape");

const makeHTMLPage = (
    content: string,
    reduxState = {},
    helmetData: HelmetData
) => `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
                    ${helmetData.title.toString()}
                    ${helmetData.meta.toString()}
                </head>

                <body>
                    <div id="root">${htmlescape(content)}</div>
                    <script type="module" src="/bundle.js"></script>
                    <script>
                        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
                    </script>
                </body>
        </html>
    `;

export { makeHTMLPage };
