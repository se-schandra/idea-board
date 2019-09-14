import React from "react";
import {act, renderHook} from "@testing-library/react-hooks";
import useIdeaState from "../../components/_customHooks_/useIdeaState";
import {cleanup} from "@testing-library/react";

describe("test useIdeaState hook", () => {

    const addMinutes = (minutes) => {
        return new Date((new Date()).getTime() + minutes * 60000);
    };

    const createAnIdea = (title, description, date) => {
        return {
            title,
            description,
            lastUpdate: date || new Date()
        }
    };

    const getIdeasArray = () => {
        return [
            createAnIdea("Idea1", "Idea1 description", addMinutes(1)),
            createAnIdea("Idea2", "Idea2 description", addMinutes(2)),
            createAnIdea("Idea3", "Idea3 description", addMinutes(3))
        ];
    };

    afterEach(() => {
        cleanup();
    });

    it("it renders the default values", () => {
        const {result} = renderHook(() => useIdeaState([], "LATEST"));

        expect(result.current.ideas.length).toEqual(0);
        expect(result.current.dateSort).toEqual("LATEST");
    });

    it("it can save a new idea in current sort order", () => {
        const {result} = renderHook(() => useIdeaState([createAnIdea("A title", "a description", new Date())], "LATEST"));

        expect(result.current.ideas.length).toEqual(1);

        const secondIdeaDate = new Date();

        act(() => {
            result.current.saveNewIdea(createAnIdea("Another title", "another description", secondIdeaDate));
        });

        expect(result.current.ideas.length).toEqual(2);

        const firstIdea = result.current.ideas[0];
        expect(firstIdea.title).toEqual("Another title");
        expect(firstIdea.description).toEqual("another description");
        expect(firstIdea.lastUpdate.getTime()).toEqual(secondIdeaDate.getTime());

        const secondIdea = result.current.ideas[1];
        expect(secondIdea.title).toEqual("A title");
        expect(secondIdea.description).toEqual("a description");
    });

    it("it can delete a given idea", () => {

        const {result} = renderHook(() => useIdeaState(getIdeasArray(), "LATEST"));

        expect(result.current.ideas.length).toEqual(3);

        act(() => {
            result.current.deleteIdea(1);
        });

        expect(result.current.ideas.length).toEqual(2);
        expect(result.current.ideas[0].title).toEqual("Idea3");
        expect(result.current.ideas[1].title).toEqual("Idea1");
    });

    it("it can update a given idea and resorts the ideas", () => {

        const {result} = renderHook(() => useIdeaState(getIdeasArray(), "LATEST"));

        expect(result.current.ideas.length).toEqual(3);

        act(() => {
            result.current.updateIdea(1, createAnIdea("changed title", "changed description", addMinutes(10)));
        });

        expect(result.current.ideas.length).toEqual(3);
        expect(result.current.ideas[0].title).toEqual("changed title");
        expect(result.current.ideas[1].title).toEqual("Idea3");
        expect(result.current.ideas[2].title).toEqual("Idea1");
    });

    it("it can change the order of sorting", () => {
        const {result} = renderHook(() => useIdeaState(getIdeasArray(), "LATEST"));

        act(() => {
            result.current.changeOrder({target: {value: "OLDEST"}});
        });

        expect(result.current.ideas.length).toEqual(3);
        expect(result.current.ideas[0].title).toEqual("Idea1");
        expect(result.current.ideas[1].title).toEqual("Idea2");
        expect(result.current.ideas[2].title).toEqual("Idea3");

    });

});


