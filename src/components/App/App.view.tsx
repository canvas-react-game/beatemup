import React, { useEffect } from "react";
import "antd/dist/antd.css";

import ErrorBoundary from "@/components/ErrorBoundary";
import GameModal from "@/components/GameModal";

import Router from "@/components/Router";

import styles from "./App.module.scss";
import { useServiceWorkers, ModalChild } from "./App.helpers";
import { useDispatch } from "react-redux";
import { getTheme } from "@/actions/theme.actions";
import { useSelector } from "@/hooks/useSelector";

const App = () => {
    const dispatch = useDispatch();

    const { onClose, isActive } = useServiceWorkers();
    const auth = useSelector((state) => state.auth)

    useEffect(() => {
        dispatch(getTheme());
    }, [auth]);

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
