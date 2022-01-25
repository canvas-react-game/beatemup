import React from "react";
import { render } from "@testing-library/react";
import {Main} from "@/pages/Main";

import configureStore from "@/store/store";
import { Provider } from "react-redux";

describe("Main page", () => {

    function makeStore() {
        return configureStore();
    }

    test("renders correctly", () => {
        const store = makeStore();
        const tree = render(
            <Provider store={store}>
                <Main/>
            </Provider>
        );

        expect(tree).toMatchSnapshot();
    });

    test("has correct title", () => {
        const store = makeStore();

        const title = "Игра";
        const main = render(
            <Provider store={store}>
                <Main/>
            </Provider>
        );

        expect(main.findAllByText(title)).toBeTruthy();
    });
});
