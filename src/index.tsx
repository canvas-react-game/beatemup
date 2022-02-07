import React from "react";
//import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "@/store/store";
import { BrowserRouter } from "react-router-dom";
//import {hot} from "react-hot-loader";

import App from "./App/App.view";
import "./styles/table.scss";
import "./styles/input.scss";
import "./styles/button.scss";
import { hydrate } from "react-dom";

const {store} = configureStore();

// const HotApp = hot(App) as React.FC;

const Application = (
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);

const root = document.querySelector('#root');

hydrate(Application, root);

// ReactDOM.render(<Provider store={store}>
//     <App />
// </Provider>, document.getElementById("root"));
