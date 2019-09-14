import React from "react";
import useEditMode from "./_customHooks_/useEditMode";
import IdeaForm from "./IdeaForm";


const NewIdea = ({saveNewIdea}) => {

    const {isEditing, enableEditing, disableEditing} = useEditMode(false);

    return (
        !isEditing ?
            <button data-testid="cta-add-new" onClick={enableEditing}>Add new idea</button>
            : <IdeaForm idea={undefined} saveIdea={saveNewIdea}
                        closeForm={disableEditing}/>
    )

};

export default NewIdea;
