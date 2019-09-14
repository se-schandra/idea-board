/*
* when isEditing is true its components
 * when isEditing is false the button
 * when "cta-new-idea" is clicked saveNewIdea is called IdeaForm is rendered
 * */
import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("EditableIdea", () => {

    it("renders without crashing", () => {
        const {container, getByTestId} = render(<INewIdea/>);
        const addNewButton = getByTestId(container, "cta-add-new");
        addNewButton.toBeInTheDocument();
    });

    it("renders without crashing", () => {
        const {container, getByTestId} = render(<INewIdea/>);
        const addNewButton = getByTestId(container, "cta-add-new");
        addNewButton.toBeInTheDocument();
    });


});
