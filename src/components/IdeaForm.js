import React, {useEffect, useRef} from "react";
import PropTypes from "prop-types";

/**
 * IdeaForm is editbale form to add new or update saved idea
 * @param idea
 * @param saveIdea: function to save idea
 * @param closeForm: function to cancel editing
 */
const IdeaForm = ({idea, saveIdea, closeForm}) => {

    const title = idea ? idea.title : "";
    const description = idea ? idea.description : "";
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);

    //on submit handler, gets current value of tile and description and calls save function to save it to ideas list
    const saveChanges = (event) => {
        event.preventDefault();
        saveIdea(
            {
                title: titleRef.current.value,
                description: descriptionRef.current.value,
                lastUpdate: new Date()
            }
        );
        closeForm();

    };

    //on component mount focus input field
    useEffect(() => {
        titleRef.current.focus();
    }, []);

    return (
        <form role="idea-form" onSubmit={saveChanges}>
            <input placeholder="Title" defaultValue={title} maxLength="30"
                   ref={titleRef} required/>
            <textarea placeholder="Description"
                      defaultValue={description} required
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
