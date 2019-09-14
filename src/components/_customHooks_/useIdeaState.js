import {useEffect, useState} from "react";

export default (initialIdeasList, initialDateSort = "LATEST") => {

    const [ideas, setIdeas] = useState(initialIdeasList);
    const [dateSort, setDateSort] = useState(initialDateSort);

    const compareIdeas = (a, b) => {
        const firstTime = a.lastUpdate.getTime(),
            secondTime = b.lastUpdate.getTime();
        return dateSort === "LATEST" ? secondTime - firstTime : firstTime - secondTime;
    };

    //add new idea
    const saveNewIdea = (idea) => {
        setIdeas([idea, ...ideas].sort(compareIdeas));
    };

    //update existing idea
    const updateIdea = (ideaIndex, newIdea) => {
        const newIdeas = ideas.map((idea, index) => index === ideaIndex ? newIdea : idea).sort(compareIdeas);
        setIdeas(newIdeas);
    };

    //delete an idea
    const deleteIdea = (ideaIndex) => {
        const newIdeas = ideas.filter((_, index) => index !== ideaIndex);
        setIdeas(newIdeas);
    };

    //change ideas sort
    const changeOrder = (e) => {
        setDateSort(e.target.value);
    };

    //on sort change reorder ideas
    useEffect(() => {
        setIdeas([...ideas].sort(compareIdeas));
    }, [dateSort]);

    return {ideas, saveNewIdea, updateIdea, deleteIdea, dateSort, changeOrder};
};
