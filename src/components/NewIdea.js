import React from "react";
import PropTypes from "prop-types";
import useEditMode from "./_customHooks_/useEditMode";
import IdeaForm from "./IdeaForm";

/**
 * NewIdea component allows users to add new idea to exsting list
 * @param saveNewIdea : function to add new idea
 */
const NewIdea = ({saveNewIdea}) => {

    const {isEditing, enableEditing, disableEditing} = useEditMode(false);

    return (
        <div data-testid="new-idea-container">
            {
                !isEditing ?
                    <button data-testid="cta-add-new" onClick={enableEditing}>Add new idea</button>
                    : <IdeaForm idea={undefined} saveIdea={saveNewIdea}
                                closeForm={disableEditing}/>
            }
        </div>
    )

};

NewIdea.propTypes = {
    saveNewIdea: PropTypes.func.isRequired
};

export default NewIdea;
