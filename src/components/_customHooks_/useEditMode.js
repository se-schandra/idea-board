import {useState} from "react";

/**
 * Custom hook toggle edit mode of component
 * @param initialValue value of edit mode
 * @returns {{isEditing: any | (), enableEditing: enableEditing, disableEditing: disableEditing}}
 */

const useEditMode = (initialValue) => {
    const [isEditing, setEdit] = useState(initialValue);

    const disableEditing = () => {
        setEdit(false);
    };

    const enableEditing = () => {
        setEdit(true);
    };

    return {
        isEditing, enableEditing, disableEditing
    }
};

export default useEditMode;
