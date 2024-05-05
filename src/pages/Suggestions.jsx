import styled from "styled-components";
import SuggestionItem from "../components/SuggestionItem";

function Suggestions() {
  return (
    <SuggestionsList>
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
      <SuggestionItem />
    </SuggestionsList>
  );
}

export default Suggestions;

const SuggestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
