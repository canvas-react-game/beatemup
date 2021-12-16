import React, {FC} from "react";
import Router from "../Router";
import ErrorBoundary from "../components/ErrorBoundary";
import "antd/dist/antd.css";

const App: FC = () => {
        return (
            <>
                <ErrorBoundary>
                    <Router/>
                </ErrorBoundary>
            </>
        );
}
export default App;