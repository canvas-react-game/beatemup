// import "../wdyr.js";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import configureStore from "@/store/store";

import App from "./components/App";

import "./styles/index.scss";

const store = configureStore();
const render = navigator.onLine ? ReactDOM.hydrate : ReactDOM.render;

render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
