import React from "react";
import useEditMode from "./_customHooks_/useEditMode";
import IdeaForm from "./IdeaForm";

const SavedIdea = ({idea, updateIdea, deleteIdea}) => {
    const {isEditing, enableEditing, disableEditing} = useEditMode(false);

    const formatDate = (date) => {
        return date.toLocaleString("en-GB");
    };

    return (
        <section>
            {
                !isEditing ?
                    <div>
                        <summary>{idea.title}</summary>
                        <p>{idea.description}</p>
                        <em>Last Updated: {formatDate(idea.lastUpdate)}</em>
                        <button onClick={deleteIdea}>Delete</button>
                        <button onClick={enableEditing}>Edit</button>
                    </div>
                    : <IdeaForm idea={idea} saveIdea={updateIdea}
                                closeForm={disableEditing}/>
            }

        </section>
    );
};

export default SavedIdea;
