import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "@/store/store";

import App from "./App/App.view";
import "./styles/table.scss";
import "./styles/input.scss";
import "./styles/button.scss";

const store = configureStore();

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById("root"));
