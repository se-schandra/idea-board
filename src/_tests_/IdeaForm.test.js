import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IdeaForm from "../components/IdeaForm";

describe("IdeaForm renders idea details in form", () => {
    const now = new Date();
    const idea = {
        title: "an idea",
        description: "description of idea",
        lastUpdate: now
    };

    let saveIdea, closeForm;

    beforeEach(() => {
        saveIdea = jest.fn(() => {
        });
        closeForm = jest.fn(() => {
        });
    });

    afterEach(() => {
        saveIdea = undefined;
        closeForm = undefined;
        cleanup();
    });

    it("renders without crashing", () => {
        render(<IdeaForm saveIdea={saveIdea} closeForm={closeForm}/>);

        const formSelector = document.querySelector("form");
        expect(formSelector).toBeInTheDocument();
        expect(formSelector.children.length).toBe(4);

        const input = document.querySelector("input");
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("placeholder", "Title");
        expect(input).toHaveAttribute("maxlength", "30");
        expect(input).toHaveAttribute("required");

        const textarea = document.querySelector("textarea");
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveAttribute("placeholder", "Description");
        expect(textarea).toHaveAttribute("maxlength", "140");
        expect(textarea).toHaveAttribute("required");

    });

    it("renders blank form when idea is undefined", () => {
        const {getByText} = render(<IdeaForm saveIdea={saveIdea} closeForm={closeForm}/>);
        expect(document.querySelector("input")).toHaveTextContent("");
        expect(document.querySelector("textarea")).toHaveTextContent("");
        expect(getByText("Save")).toBeInTheDocument();
        expect(getByText("Cancel")).toBeInTheDocument();

    });

    it("renders idea details when idea is defined", () => {
        const {getByText} = render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);
        expect(document.querySelector("input")).toHaveValue("an idea");
        expect(document.querySelector("textarea")).toHaveValue("description of idea");
        expect(getByText("Save")).toBeInTheDocument();
        expect(getByText("Cancel")).toBeInTheDocument();
    });

    it("Calls saveidea function is called with updated details when Save button is clicked", () => {
        const {getByText} = render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);

        fireEvent.change(document.querySelector("input"), {target: {value: "changed title"}});
        fireEvent.click(getByText("Save"));

        expect(saveIdea).toHaveBeenCalled();
        const saveIdeaArg = saveIdea.mock.calls[0][0];
        expect(saveIdeaArg.title).toEqual("changed title");
        expect(saveIdeaArg.description).toEqual("description of idea");
        expect(closeForm).toHaveBeenCalled();

        expect(document.body).toContainHTML("");
    });

    it("Unmounts the form when Cancel button is clicked", () => {
        const {getByText} = render(<IdeaForm idea={idea} saveIdea={saveIdea} closeForm={closeForm}/>);
        fireEvent.click(getByText("Cancel"));
        expect(closeForm).toHaveBeenCalledTimes(1);

        expect(document.body).toContainHTML("");
    });


});
