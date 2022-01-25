import React, { FC } from "react";
import { render } from "@testing-library/react";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Main from "@/pages/Main";
import { Provider } from "react-redux";
import { makeStore } from "@/helpers/tests/makeStore";
import { compose } from "@/helpers/tests/compose";

describe("Main page", () => {

    function withRouter(Component: FC): FC {
        const history = createMemoryHistory({ initialEntries: ['/'] });
        return () => (
            <Router history={history}>
                <Component />
            </Router>
        )
    }

    function withStore(Component: FC): FC {
        const store = makeStore();
        return () =>  (
            <Provider store={store}>
                <Component />
            </Provider>
        )
    }

    test("renders correctly", () => {
        const MainComposed = compose(withRouter, withStore)(Main)
        const tree = render(<MainComposed />);

        expect(tree).toMatchSnapshot();
    });

    test("has correct title", () => {
        const MainComposed = compose(withRouter, withStore)(Main)

        const title = "Игра";
        const main = render(<MainComposed />);

        expect(main.findAllByText(title)).toBeTruthy();
    });
});
