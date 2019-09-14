import {useState} from "react";

const useInputUpdate = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    function handleOnChange(e) {
        const inputValue = e.target.value;

        if (!inputValue || inputValue.length === 0) {
            //TODO show error next to field
        }

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
