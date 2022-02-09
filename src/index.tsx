//import "../wdyr.js";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "@/store/store";

import App from "./components/App";

import "./styles/index.scss";

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById("root"));
