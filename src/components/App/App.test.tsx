import React from "react";
import { mount, shallow } from "enzyme";
import App from "@/components/App";

jest.mock("@/components/App", () => function App() {
    return (
        <div className="App">

        </div>
    );
});

describe("App component", () => {
    test("mock App renders correctly", () => {
        const tree = mount(<App/>);

        expect(tree).toMatchSnapshot();
    });

    test("mock App should be Truthy", () => {
        const AppComponent = mount(<App/>);
        expect(AppComponent).toBeTruthy();
    });

    test("mock App should have correct className", () => {
        const APP_CLASSNAME = "App";
        const AppWrapper = shallow(<App/>);

        const AppComponent = AppWrapper.find("div");

        expect(AppComponent.hasClass(APP_CLASSNAME)).toBe(true);
    });
});
