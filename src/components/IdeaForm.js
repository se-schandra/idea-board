import React, {useEffect, useRef} from "react";
import useInputUpdate from "./_customHooks_/useInputUpdate";


const IdeaForm = ({idea, saveIdea, closeForm}) => {

    const title = useInputUpdate(idea ? idea.title : "");
    const description = useInputUpdate(idea ? idea.description : "");
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);


    const addIdea = (event) => {
        event.preventDefault();
        saveIdea(
            {
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                lastUpdate: new Date()
            }
        );

        titleRef.current.value = "";
        descriptionRef.current.value = "";
        closeForm();

    };

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    return (
        <form onSubmit={addIdea}>
            <input placeholder="Add a title" defaultValue={title.value}
                   ref={titleRef} required/>
            <textarea placeholder="Add a description"
                      defaultValue={description.value} required
                      ref={descriptionRef} maxLength="140"/>
            <button type="submit">Save</button>
            <button type="button" onClick={closeForm}>Cancel</button>
        </form>
    );
};

export default IdeaForm;
