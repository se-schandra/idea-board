import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SavedIdea from "../components/SavedIdea";

describe("SavedIdea renders new idea elements", () => {
    const now = new Date();
    const idea = {
        title: "an idea",
        description: "description of idea",
        lastUpdate: now
    };
    const updateIdea = jest.fn(() => {
    });
    const deleteIdea = jest.fn(() => {
    });

    afterEach(() => {
        cleanup();
    });

    it("renders without crashing", () => {
        render(<SavedIdea idea={idea} updateIdea={updateIdea} deleteIdea={deleteIdea}/>);

        const section = document.querySelector("section");
        expect(section).toBeInTheDocument();
        expect(section.children.length).toBe(1);
    });

    it("by default Saved idea displays idea details", () => {

        const {getByTestId} = render(<SavedIdea idea={idea} updateIdea={updateIdea} deleteIdea={deleteIdea}/>);
        const container = getByTestId("saved-idea");
        expect(container).toBeInTheDocument();
        expect(container.children.length).toBe(5);

        expect(document.querySelector("summary")).toHaveTextContent("an idea");
        expect(document.querySelector("p")).toHaveTextContent("description of idea");
        expect(document.querySelector("em")).toHaveTextContent(`Last Updated: ${now.toLocaleDateString("en-GB")}`);
        expect(document.querySelectorAll("button")[0]).toHaveTextContent("Delete");
        expect(document.querySelectorAll("button")[1]).toHaveTextContent("Edit");
    });

    it("Edit mode can be enabled by Edit button", () => {
        const {getByTestId} = render(<SavedIdea idea={idea} updateIdea={updateIdea} deleteIdea={deleteIdea}/>);
        const editButton = getByTestId("edit-idea");
        fireEvent.click(editButton);
        expect(getByTestId("idea-form")).toBeInTheDocument();

    });

    it("Delete button unmount the Saved Idea", () => {
        const {getByTestId} = render(<SavedIdea idea={idea} updateIdea={updateIdea} deleteIdea={deleteIdea}/>);
        const deleteIdeaBtn = getByTestId("delete-idea");
        fireEvent.click(deleteIdeaBtn);
        expect(document.body).toContainHTML("");
    });
});
