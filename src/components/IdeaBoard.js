import React, {useEffect} from "react";
import useIdeaState from "./_customHooks_/useIdeaState";
import NewIdea from "./NewIdea";
import SavedIdea from "./SavedIdea";

/**
 * IdeaBoard allows users to add new ideas and view saved idea. By default ideas list is empty.
 */
const IdeaBoard = () => {
    // Set the list of ideas to an empty array and derive methods to update array
    const {ideas, saveNewIdea, updateIdea, deleteIdea, dateSort, changeOrder} = useIdeaState([], "LATEST");

    useEffect(() => {
        //TODO: add ideas array to local storage
    }, [ideas]);

    return (

        <React.Fragment>

            <NewIdea saveNewIdea={saveNewIdea}/>
            {
                //when ideas present show saved ideas and select sort
                ideas && ideas.length > 0 &&
                <div data-testid="saved-ideas-container">
                    <h2>Saved Ideas</h2>
                    <hr/>
                    <div className="saved-ideas-sort">
                        <select data-testid="cta-sort-order" onChange={changeOrder} defaultValue={dateSort}>
                            <option value="LATEST">Latest first</option>
                            <option value="OLDEST">Oldest first</option>
                        </select>
                        <em>Showing {dateSort.toLowerCase()} first</em>
                    </div>
                    {ideas.map((idea, index) => {
                        return <SavedIdea key={index}
                                          idea={idea}
                                          updateIdea={updateIdea.bind(this, index)}
                                          deleteIdea={deleteIdea.bind(this, index)}
                        />;
                    })}
                </div>
            }
        </React.Fragment>

    );
};

export default IdeaBoard;
