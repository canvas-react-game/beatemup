import React, {FC} from "react";
import Router from "../Router";
import ErrorBoundary from "../components/ErrorBoundary";
import "antd/dist/antd.css";
import styles from './App.module.scss';

const App: FC = () => {
        return (
            <div className={styles.App}>
                <ErrorBoundary>
                    <Router/>
                </ErrorBoundary>
            </div>
        );
}
export default App;