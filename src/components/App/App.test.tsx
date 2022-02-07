import React from "react";
import { mount } from "enzyme";
import App from "@/components/App";

describe("App component", () => {
    test("App renders correctly", () => {
        const tree = mount(<App/>);

        expect(tree).toMatchSnapshot();
    });
});
