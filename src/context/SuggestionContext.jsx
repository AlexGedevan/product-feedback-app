import { createContext } from "react";

const SuggestionContext = createContext();

function SuggestionContextProvider({ children }) {
  return (
    <SuggestionContext.Provider value={{}}>
      {children}
    </SuggestionContext.Provider>
  );
}
