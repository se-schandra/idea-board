import {useState} from "react";

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
