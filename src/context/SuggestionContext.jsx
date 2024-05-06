import { createContext, useContext, useState } from "react";
import data from "../../data.json";

const SuggestionContext = createContext();

function SuggestionContextProvider({ children }) {
  const [suggestions, setSuggestions] = useState(data.productRequests);
  const [currentSuggestion, setCurrentSuggestion] = useState([]);
  const [replyId, setReplyId] = useState(null);
  return (
    <SuggestionContext.Provider
      value={{
        suggestions,
        setSuggestions,
        currentSuggestion,
        setCurrentSuggestion,
        replyId,
        setReplyId,
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
