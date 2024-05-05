import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SuggestionContextProvider } from "./context/SuggestionContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SuggestionContextProvider>
      <App />
    </SuggestionContextProvider>
  </React.StrictMode>
);
