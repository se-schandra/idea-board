import {useState} from "react";

/**
 * Custom Hook to manage input
 * @param initialValue
 * @returns {{value: any | (), handleOnChange: handleOnChange, reset: reset}}
 */
const useInputUpdate = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    function handleOnChange(e) {
        const inputValue = e.target.value;
        setValue(inputValue);
    }

    function reset() {
        setValue("");
    }

    return {
        value,
        handleOnChange,
        reset
    }
};


export default useInputUpdate;
