import React from "react";
import useEditMode from "./_customHooks_/useEditMode";
import IdeaForm from "./IdeaForm";
import PropTypes from "prop-types";

/**
 * SavedIdea component allows user to view exiting idea list and allows them to delete or edit the contents of saved idea
 * @param idea
 * @param updateIdea : function to update idea
 * @param deleteIdea: function to delet idea
 */
const SavedIdea = ({idea, updateIdea, deleteIdea}) => {
    const {isEditing, enableEditing, disableEditing} = useEditMode(false);

    return (
        <section>
            {
                !isEditing ?
                    <div data-testid="saved-idea">
                        <summary>{idea.title}</summary>
                        <p>{idea.description}</p>
                        <em>Last Updated: {idea.lastUpdate.toLocaleString("en-GB")}</em>
                        <button data-testid="delete-idea" onClick={deleteIdea}>Delete</button>
                        <button data-testid="edit-idea" onClick={enableEditing}>Edit</button>
                    </div>
                    : <IdeaForm idea={idea} saveIdea={updateIdea}
                                closeForm={disableEditing}/>
            }

        </section>
    );
};

SavedIdea.propTypes = {
    idea: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        lastUpdate: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    updateIdea: PropTypes.func.isRequired,
    deleteIdea: PropTypes.func.isRequired
};
export default SavedIdea;
