import React from "react";
import useEditMode from "./_customHooks_/useEditMode";
import IdeaForm from "./IdeaForm";

const Idea = ({idea, updateIdea, deleteIdea, saveNewIdea, isNew}) => {
    const {isEditing, enableEditing, disableEditing} = useEditMode(false);

    const formatDate = (date) => {
        return date.toLocaleString("en-GB");
    };

    return (
        <section>
            {
                isNew ?
                    !isEditing ?
                        <button data-testid="cta-add-new" onClick={enableEditing}>Add new idea</button>
                        : <IdeaForm idea={undefined} saveIdea={saveNewIdea}
                                    closeForm={disableEditing}/>
                    :

                    <div>
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
                    </div>
            }

        </section>
    );
};

export default Idea;
