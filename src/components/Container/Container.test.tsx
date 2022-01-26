import React from "react";
import { render } from "@testing-library/react";
import Container from "@/components/Container";

describe("Container component", () => {
    test("renders correctly", () => {
        const tree = render(<Container/>);

        expect(tree).toMatchSnapshot();
    });
});
