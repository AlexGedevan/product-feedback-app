import styled from "styled-components";
import SuggestionItem from "../components/SuggestionItem";
import { useSuggestion } from "../context/SuggestionContext";
import EmptySuggestions from "../components/EmptySuggestions";

function Suggestions() {
  const { suggestionsByCategory } = useSuggestion();
  console.log(suggestionsByCategory);
  return (
    <SuggestionsList>
      {suggestionsByCategory?.map((suggestion) => {
        return <SuggestionItem key={suggestion.id} suggestion={suggestion} />;
      })}

      {suggestionsByCategory.length === 0 && <EmptySuggestions />}
    </SuggestionsList>
  );
}

export default Suggestions;

const SuggestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  @media screen and (min-width: 768px) {
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
  }
`;
