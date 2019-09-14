import {useState} from "react";

export default (initialValue) => {
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
}
