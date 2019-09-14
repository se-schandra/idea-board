import React from "react";
import {cleanup, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IdeaForm from "../components/IdeaForm";


describe("IdeaForm renders idea details in form", () => {
    const now = new Date();
    const idea = {
        title: "an idea",
        description: "description of idea",
        lastUpdate: now
    };

    const saveIdea = jest.fn(() => {
    });
    const closeForm = jest.fn(() => {
    });

    afterEach(() => {
        cleanup();
    });

    it("renders without crashing", () => {
        render(<IdeaForm/>);

        const formSelector = document.querySelector("form");
        expect(formSelector).toBeInTheDocument();
        expect(formSelector.children.length).toBe(4);
        expect(formSelector).toHaveAttribute("role", "idea-form");
    });

    it("renders blank form when idea is undefined", () => {
        render(<IdeaForm saveIdea={saveIdea} closeForm={closeForm}/>);

        const formSelector = document.querySelector("form");
        expect(formSelector).toBeInTheDocument();
        expect(formSelector.children.length).toBe(4);
        expect(formSelector).toHaveAttribute("role", "idea-form");
    });

    it("renders idea details when idea is defined", () => {
        render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);

        const formSelector = document.querySelector("form");
        expect(formSelector).toBeInTheDocument();
        expect(formSelector.children.length).toBe(4);
        expect(formSelector).toHaveAttribute("role", "idea-form");
    });

    it("Save the idea when form is Save button is clicked", () => {
        render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);
    });

    it("Cannot save idea with empty title", () => {
        render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);
    });

    it("Cannot save idea with description title", () => {
        render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);
    });

    it("Idea description can have max length of 140", () => {
        render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);
    });

    it("unmounts the form when Cancel button is clicked", () => {
        render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);
    });


});
