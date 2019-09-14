import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NewIdea from "../components/NewIdea";


describe("New Idea renders new idea elements", () => {

    afterEach(() => {
        cleanup();
    });

    it("renders without crashing", () => {
        const {getByTestId} = render(<NewIdea/>);

        const container = getByTestId("new-idea-container");
        expect(container).toBeInTheDocument();
        expect(container.children.length).toBe(1);
        expect(container).toContainHTML(`<div data-testid="new-idea-container"><button data-testid="cta-add-new">Add new idea</button></div>`);
    });

    it("add new button has on click handler enables editing", () => {
        const {getByTestId, queryByRole} = render(<NewIdea/>);

        const addNewIdea = getByTestId("cta-add-new");
        fireEvent.click(addNewIdea);

        expect(addNewIdea).not.toBeInTheDocument();
        expect(getByTestId("new-idea-container").children.length).toBe(1);
        expect(queryByRole("idea-form")).toBeInTheDocument();
    });

    it("Cancel form button stops editing", () => {
        const {getByTestId, getByText, queryByRole} = render(<NewIdea/>);

        fireEvent.click(getByTestId("cta-add-new"));
        fireEvent.click(getByText("Cancel"));

        expect(getByTestId("new-idea-container").children.length).toBe(1);
        expect(queryByRole("idea-form")).not.toBeInTheDocument();

        expect(getByTestId("cta-add-new")).toBeInTheDocument();

    });

});
