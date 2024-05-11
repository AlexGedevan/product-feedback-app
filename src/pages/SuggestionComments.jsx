import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import { useSuggestion } from "../context/SuggestionContext";
import SuggestionItem from "../components/SuggestionItem";
import CommentsList from "../components/CommentsList";
import { useEffect } from "react";
import AddComent from "../components/AddComent";
import GoBackComponent from "../ui/GoBackComponent";

function SuggestionComments() {
  const { id } = useParams();
  const { suggestions } = useSuggestion();
  const singleSuggestion = suggestions.find(
    (suggestion) => String(suggestion.id) === String(id)
  );

  const { setCurrentSuggestion, currentSuggestion } = useSuggestion();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentSuggestion(singleSuggestion);
  }, [setCurrentSuggestion, singleSuggestion]);

  return (
    <StyledSuggestionComments>
      <SuggestionCommentsHeader>
        <GoBackComponent />
        <Button
          bgcolor="#4661E6"
          onClick={() => navigate(`/${id}/editFeedback`)}
        >
          Edit Feedback
        </Button>
      </SuggestionCommentsHeader>
      <SuggestionItem suggestion={currentSuggestion} />
      <CommentsList currentSuggestion={currentSuggestion} />

      <AddComent id={id} />
    </StyledSuggestionComments>
  );
}

const StyledSuggestionComments = styled.div`
  width: 73rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const SuggestionCommentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SuggestionComments;
