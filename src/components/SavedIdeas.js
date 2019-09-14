import React from "react";
import Idea from "./Idea";

const SavedIdeas = ({changeOrder, dateSort, ideas, updateIdea, deleteIdea}) => {
    return (
        <div data-testid="saved-ideas-container">
            <h2>Saved Ideas</h2>
            <hr/>
            <select data-testid="cta-sort-order" onChange={changeOrder} defaultValue={dateSort}>
                <option value="LATEST">Latest first</option>
                <option value="OLDEST">Oldest first</option>
            </select>
            {ideas.map((idea, index) => {
                return <Idea key={index}
                             isNew="false"
                             idea={idea}
                             updateIdea={updateIdea.bind(this, index)}
                             deleteIdea={deleteIdea.bind(this, index)}
                />;
            })}
        </div>
    );
};

export default SavedIdeas;
