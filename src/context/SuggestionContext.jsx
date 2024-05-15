import { createContext, useContext, useState } from "react";
import data from "../../data.json";

const SuggestionContext = createContext();

function SuggestionContextProvider({ children }) {
  const [suggestions, setSuggestions] = useState(
    data.productRequests.filter((sug) => sug.status === "suggestion")
  );
  const [roadmapList, setRoadmapList] = useState(
    data.productRequests.filter((sug) => sug.status !== "suggestion")
  );
  const [currentSuggestion, setCurrentSuggestion] = useState([]);
  const [currentUser, setCurrentUser] = useState(data.currentUser);
  const [replyId, setReplyId] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const [render, setRender] = useState(false);
  const [upvotedList, setUpvotedList] = useState([]);
  const [suggestionsByCategory, setSuggestionsByCategory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
        setSuggestions,
        currentSuggestion,
        setCurrentSuggestion,
        replyId,
        setReplyId,
        currentUser,
        setCurrentUser,
        commentId,
        setCommentId,
        render,
        setRender,
        upvotedList,
        setUpvotedList,
        suggestionsByCategory,
        setSuggestionsByCategory,
        activeCategory,
        setActiveCategory,
        roadmapList,
        setRoadmapList,
      }}
    >
      {children}
    </SuggestionContext.Provider>
  );
}

function useSuggestion() {
  const context = useContext(SuggestionContext);
  if (!context) throw new Error("Context was used outside the box");
  return context;
}

export { SuggestionContextProvider, useSuggestion };
