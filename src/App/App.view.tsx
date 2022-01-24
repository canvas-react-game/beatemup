import React, { useEffect } from "react";
import "antd/dist/antd.css";

import ErrorBoundary from "@/components/ErrorBoundary";

import Router from "../Router";
import styles from "./App.module.scss";

const App = () => {
    useEffect(() => {
        function startServiceWorker() {
            if ("serviceWorker" in navigator) {
                window.addEventListener("load", () => {
                    navigator.serviceWorker
                        .register("./sw.ts")
                        .then((registration) => {
                            console.log(
                                "ServiceWorker registration successful ",
                                registration.scope
                            );
                        })
                        .catch((error: string) => {
                            console.log(
                                "ServiceWorker registration failed: ",
                                error
                            );
                        });
                });
            }
        }

        startServiceWorker();
    }, []);

    return (
        <div className={styles.App}>
            <ErrorBoundary>
                <Router />
            </ErrorBoundary>
        </div>
    );
};

export default App;
