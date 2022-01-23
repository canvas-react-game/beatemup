import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.view";

import "./styles/table.scss";
import "./styles/input.scss";
import "./styles/button.scss";

ReactDOM.render(<App />, document.getElementById("root"));

function startServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("./sw.js")
                .then((registration) => {
                    console.log(
                        "ServiceWorker registration successful ",
                        registration.scope,
                    );
                })
                .catch((error: string) => {
                    console.log("ServiceWorker registration failed: ", error);
                });
        });
    }
}

startServiceWorker();
