import React from "react";
import "antd/dist/antd.css";

import {ErrorBoundary} from "@/components/ErrorBoundary";

import {Router} from "../Router";
import styles from "./App.module.scss";

export const App = () => (
    <div className={styles.App}>
        <ErrorBoundary>
            <Router/>
        </ErrorBoundary>
    </div>
);