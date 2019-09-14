import React from "react";
import useInputUpdate from "../../components/_customHooks_/useInputUpdate";
import testHook from "./testUtil";

describe("test useInputUpdate hook", () => {

    let results;

    beforeEach(() => {
        testHook(() => {
            results = useInputUpdate("initialValue");
        });
    });

    it("it renders default value", () => {
        expect(results.value).toEqual("initialValue");
    });

    it("it set value to true when enable edit is called", () => {
        const event = {
            target: {value: "changedValue"}
        };
        results.handleOnChange(event);
        expect(results.value).toEqual("changedValue");

    });

    it("it set value to true when enable edit is called", () => {
        results.reset();
        expect(results.value).toEqual("");

    });
});
