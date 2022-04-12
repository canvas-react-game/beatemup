import React from "react";
import "antd/dist/antd.css";

import ErrorBoundary from "@/components/ErrorBoundary";
import GameModal from "@/components/GameModal";

import Router from "@/components/Router";

import styles from "./App.module.scss";
import { useServiceWorkers, ModalChild } from "./App.helpers";
import { useMountEffect } from "@/hooks/useMountEffect";
import { useDispatch } from "react-redux";
import { getTheme } from "@/actions/theme.actions";

const App = () => {
    const dispatch = useDispatch();

    const { onClose, isActive } = useServiceWorkers();

    useMountEffect(() => {
        dispatch(getTheme());
    });

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
};

export default App;
