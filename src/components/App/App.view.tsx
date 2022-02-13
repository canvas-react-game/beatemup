import { hot } from "react-hot-loader/root";
import React from "react";
import "antd/dist/antd.css";

import ErrorBoundary from "@/components/ErrorBoundary";
import GameModal from "@/components/GameModal";

import Router from "@/components/Router";
import styles from "./App.module.scss";

import { useServiceWorkers, ModalChild } from "./App.helpers";

const App = hot(() => {
    const { onClose, isActive } = useServiceWorkers();

    return (
        <div className={styles.App}>
            <GameModal isActive={isActive} title="Ошибка">
                <ModalChild onClose={onClose} />
            </GameModal>

            <ErrorBoundary>
                <Router />
            </ErrorBoundary>
        </div>
    );
});

export default App;
