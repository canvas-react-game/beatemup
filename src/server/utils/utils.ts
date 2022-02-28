import { HelmetData } from "react-helmet";

const makeHTMLPage = (
    hostUrl: string,
    content: string,
    reduxState = {},
    helmetData: HelmetData
) => {
    return `
        <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link rel="stylesheet" href="${hostUrl}/main.css"> 
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
                    ${helmetData.title.toString()}
                    ${helmetData.meta.toString()}
                </head>

                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
                    </script>
                    <script type="module" src="${hostUrl}/bundle.js"></script>
                </body>
        </html>
    `;
};

export { makeHTMLPage };
