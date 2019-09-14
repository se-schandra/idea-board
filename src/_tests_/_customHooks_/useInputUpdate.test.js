import React from "react";
import useInputUpdate from "../../components/_customHooks_/useInputUpdate";
import {act, renderHook} from "@testing-library/react-hooks";
import {cleanup} from "@testing-library/react";

describe("test useInputUpdate hook", () => {

    afterEach(() => {
        cleanup();
    });

    it("it renders default value", () => {
        const {result} = renderHook(() => useInputUpdate("initialValue"));
        expect(result.current.value).toEqual("initialValue");
    });

    it("it set value to true when enable edit is called", () => {
        const {result} = renderHook(() => useInputUpdate("initialValue"));

        act(() => {
            result.current.handleOnChange({target: {value: "changedValue"}});
        });
        expect(result.current.value).toEqual("changedValue");

    });

    it("it set value to true when enable edit is called", () => {
        const {result} = renderHook(() => useInputUpdate("initialValue"));
        act(() => {
            result.current.reset();
        });
        expect(result.current.value).toEqual("");

    });

});
