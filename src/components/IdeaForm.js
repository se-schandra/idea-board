import React, {useEffect, useRef} from "react";
import useInputUpdate from "./_customHooks_/useInputUpdate";
import PropTypes from "prop-types";


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
        <form role="idea-form" onSubmit={addIdea}>
            <input placeholder="Title" defaultValue={title.value} maxLength="30"
                   ref={titleRef} required/>
            <textarea placeholder="Description"
                      defaultValue={description.value} required
                      ref={descriptionRef} maxLength="140"/>
            <button type="submit">Save</button>
            <button type="button" onClick={closeForm}>Cancel</button>
        </form>
    );
};

IdeaForm.propTypes = {
    idea: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        lastUpdate: PropTypes.instanceOf(Date).isRequired,
    }),
    saveIdea: PropTypes.func.isRequired,
    closeForm: PropTypes.func.isRequired
};

export default IdeaForm;
