import React, { FC } from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { Provider } from "react-redux";
import Profile from "@/pages/Profile";
import { makeStore } from "@/helpers/tests/makeStore";
import { compose } from "@/helpers/tests/compose";

describe("Profile page", () => {
    function withRouter(Component: FC): FC {
        const history = createMemoryHistory({ initialEntries: ["/"] });
        return () => (
            <Router history={history}>
                <Component />
            </Router>
        );
    }

    function withStore(Component: FC): FC {
        const store = makeStore();
        return () => (
            <Provider store={store}>
                <Component />
            </Provider>
        );
    }

    test("renders correctly", () => {
        const ProfileComposed = compose(withRouter, withStore)(Profile);
        const tree = render(<ProfileComposed />);

        expect(tree).toMatchSnapshot();
    });

    // Решение бага с тестом ниже
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // Deprecated
            removeListener: jest.fn(), // Deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
    test("creating component changes profile store state to loading", async () => {
        const store = makeStore();
        const history = createMemoryHistory({ initialEntries: ["/"] });
        const ProfileComposed = () => (<Router history={history}>
            <Provider store={store}>
                <Profile />
            </Provider>
        </Router>);

        render(<ProfileComposed />);

        expect(store.getState().profile["stage"] === "loading").toBe(true);
    });
});
