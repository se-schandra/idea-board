import React from "react";
import useEditMode from "./_customHooks_/useEditMode";
import IdeaForm from "./IdeaForm";

const SavedIdea = ({idea, updateIdea, deleteIdea}) => {
    const {isEditing, enableEditing, disableEditing} = useEditMode(false);

    return (
        <section>
            {
                !isEditing ?
                    <div role="saved-idea">
                        <summary>{idea.title}</summary>
                        <p>{idea.description}</p>
                        <em>Last Updated: {idea.lastUpdate.toLocaleString("en-GB")}</em>
                        <button role="delete-idea" onClick={deleteIdea}>Delete</button>
                        <button role="edit-idea" onClick={enableEditing}>Edit</button>
                    </div>
                    : <IdeaForm idea={idea} saveIdea={updateIdea}
                                closeForm={disableEditing}/>
            }

        </section>
    );
};

export default SavedIdea;
