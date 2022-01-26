import React from "react";
import { render } from "@testing-library/react";
import Input from "./Input.view";

describe("Input component", () => {
    test("renders correctly", () => {
        const tree = render(<Input/>);

        expect(tree).toMatchSnapshot();
    });

    test("has no textContent", () => {
        const inputRenderResult = render(<Input/>);
        const input = inputRenderResult.container.firstChild as ChildNode;

        expect(input.textContent).toEqual("");
    });
});
