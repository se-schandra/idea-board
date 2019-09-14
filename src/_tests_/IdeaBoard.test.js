import React from "react";
import {cleanup, fireEvent, render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IdeaBoard from "../components/IdeaBoard";

describe("IdeaList displays ideas", () => {

    afterEach(() => {
        cleanup();
    });

    it("IdeaBoard contains a button to add new idea when no save ideas", () => {
        const {getByText, queryByTestId} = render(<IdeaBoard/>);
        expect(getByText("Add new idea")).toBeInTheDocument();
        expect(queryByTestId("cta-sort-order")).toBeNull();
        expect(queryByTestId("saved-ideas-container")).toBeNull();
    });

    it("IdeaBoard shows idea when new idea is added", () => {

        const {getByText, queryByTestId} = render(<IdeaBoard/>);

        fireEvent.click(getByText("Add new idea"));
        fireEvent.click(getByText("Save"));

        expect(getByText("Saved Ideas")).toBeInTheDocument();
        expect(queryByTestId("cta-sort-order")).toBeInTheDocument();
        expect(queryByTestId("saved-ideas-container")).toBeInTheDocument();
    });

    it("On date sort change ideas' sorting is updated ", () => {
        const {getByText, queryByTestId} = render(<IdeaBoard/>);
        fireEvent.click(getByText("Add new idea"));
        fireEvent.click(getByText("Save"));

        expect(getByText("Showing latest first")).toBeInTheDocument();
        fireEvent.change(queryByTestId("cta-sort-order"), {target: {value: "OLDEST"}});
        expect(getByText("Showing oldest first")).toBeInTheDocument();
    });

});
