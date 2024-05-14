import styled from "styled-components";
import SuggestionItem from "../components/SuggestionItem";
import { useSuggestion } from "../context/SuggestionContext";

function Suggestions() {
  const { suggestionsByCategory } = useSuggestion();

  return (
    <SuggestionsList>
      {suggestionsByCategory?.map((suggestion) => {
        return <SuggestionItem key={suggestion.id} suggestion={suggestion} />;
      })}
    </SuggestionsList>
  );
}

export default Suggestions;

const SuggestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
