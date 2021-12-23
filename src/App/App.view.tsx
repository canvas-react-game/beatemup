import React, { FC } from "react";
import "antd/dist/antd.css";

import ErrorBoundary from "@/components/ErrorBoundary";

import Router from "../Router";
import styles from "./App.module.scss";

const App: FC = () => (
    <div className={styles.App}>
        <ErrorBoundary>
            <Router/>
        </ErrorBoundary>
    </div>
);
export default App;