import React from "react";
import {act, renderHook} from "@testing-library/react-hooks";
import useEditMode from "../../components/_customHooks_/useEditMode";

describe("test useEditMode hook", () => {
    it("it renders default value", () => {
        const {result} = renderHook(() => useEditMode(false));
        expect(result.current.isEditing).toEqual(false);
    });

    it("it set value to true when enable edit is called", () => {
        const {result} = renderHook(() => useEditMode(false));
        act(() => {
            result.current.enableEditing();
        });
        expect(result.current.isEditing).toEqual(true);
    });

    it("it set value to true when enable edit is called", () => {
        const {result} = renderHook(() => useEditMode(true));
        act(() => result.current.disableEditing());
        expect(result.current.isEditing).toEqual(false);

    });
});


