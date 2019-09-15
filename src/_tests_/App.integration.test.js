import App from "../App";
import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("App renders without crash", () => {

    afterEach(() => {
        cleanup();
    });

    it("renders add new button and no saved ideas", () => {
        render(<App/>);
        //renders new-idea-container and no saved ideas
        const children = document.querySelector("div.container").children;
        expect(children.length).toEqual(1);
        expect(children[0]).toHaveAttribute("data-testid", "new-idea-container");
    });


    it("can add new idea", () => {
        const {getByText, getByPlaceholderText, getByTestId, queryByTestId} = render(<App/>);

        //click add new idea and save an idea
        fireEvent.click(getByText("Add new idea"));

        getByPlaceholderText("Title").value = "My new idea";
        getByPlaceholderText("Description").value = "And its description";
        const now = new Date();

        fireEvent.click(getByText("Save"));

        expect(getByTestId("saved-ideas-container")).toBeInTheDocument();
        expect(getByTestId("cta-sort-order")).toBeInTheDocument();
        expect(getByText("Showing latest first")).toBeInTheDocument();

        const savedIdea = queryByTestId("saved-idea");
        expect(savedIdea).toBeInTheDocument();
        expect(savedIdea.querySelector("summary")).toHaveTextContent("My new idea");
        expect(savedIdea.querySelector("p")).toHaveTextContent("And its description");
        expect(savedIdea.querySelector("em")).toContainHTML(`Last Updated: ${now.toLocaleString("en-GB")}`);
    });

    it("can edit a saved idea ", () => {
        const {getByText, getByPlaceholderText, getByTestId, queryByTestId} = render(<App/>);

        //click add new idea and save an idea
        fireEvent.click(getByText("Add new idea"));

        getByPlaceholderText("Title").value = "My new idea";
        getByPlaceholderText("Description").value = "And its description";

        fireEvent.click(getByText("Save"));

        //edit saved idea
        fireEvent.click(getByTestId("edit-idea"));

        expect(queryByTestId("saved-idea")).toBeNull();

        const savedIdeaTitleInput = document.querySelector("input");
        expect(savedIdeaTitleInput).toHaveValue("My new idea");
        expect(document.querySelector("textarea")).toHaveValue("And its description");
        fireEvent.change(savedIdeaTitleInput, {target: {value: "changed title"}});

        fireEvent.click(getByText("Save"));
        expect(queryByTestId("saved-idea")).toBeInTheDocument();
        expect(queryByTestId("saved-idea").querySelector("summary")).toHaveTextContent("changed title");
    });

    it("can delete a saved idea ", () => {
        const {getByText, getByPlaceholderText, getByTestId, queryByTestId} = render(<App/>);

        //click add new idea and save an idea
        fireEvent.click(getByText("Add new idea"));

        getByPlaceholderText("Title").value = "My new idea";
        getByPlaceholderText("Description").value = "And its description";
        fireEvent.click(getByText("Save"));

        //delete saved idea
        fireEvent.click(getByTestId("delete-idea"));

        expect(queryByTestId("saved-idea")).toBeNull();

        expect(queryByTestId("saved-ideas-container")).toBeNull();
        const children = document.querySelector("div.container").children;
        expect(children.length).toEqual(1);
        expect(children[0]).toHaveAttribute("data-testid", "new-idea-container");
    });


    it("can sort ideas ", () => {
        const {getByText, getByPlaceholderText, queryByTestId} = render(<App/>);

        //click add two new ideas and save an idea
        fireEvent.click(getByText("Add new idea"));
        getByPlaceholderText("Title").value = "My new idea 1";
        getByPlaceholderText("Description").value = "And its description 1";
        fireEvent.click(getByText("Save"));

        fireEvent.click(getByText("Add new idea"));
        getByPlaceholderText("Title").value = "My new idea 2";
        getByPlaceholderText("Description").value = "And its description 2";
        fireEvent.click(getByText("Save"));

        const summaries = document.querySelectorAll("summary"),
            descriptions = document.querySelectorAll("p");
        expect(summaries[0]).toHaveTextContent("My new idea 2");
        expect(descriptions[0]).toHaveTextContent("And its description 2");
        expect(summaries[1]).toHaveTextContent("My new idea 1");
        expect(descriptions[1]).toHaveTextContent("And its description 1");

        //change sort to OLDEST first

        fireEvent.change(queryByTestId("cta-sort-order"), {target: {value: "OLDEST"}});
        expect(getByText("Showing oldest first")).toBeInTheDocument();

        const changed_summaries = document.querySelectorAll("summary"),
            changed_descriptions = document.querySelectorAll("p");
        expect(changed_summaries[0]).toHaveTextContent("My new idea 1");
        expect(changed_descriptions[0]).toHaveTextContent("And its description 1");
        expect(changed_summaries[1]).toHaveTextContent("My new idea 2");
        expect(changed_descriptions[1]).toHaveTextContent("And its description 2");
    });


});
