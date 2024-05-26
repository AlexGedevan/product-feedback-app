import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../ui/Button";
import { useSuggestion } from "../context/SuggestionContext";
import SuggestionItem from "../components/SuggestionItem";
import CommentsList from "../components/CommentsList";
import { useEffect } from "react";
import AddComent from "../components/AddComent";
import GoBackComponent from "../ui/GoBackComponent";
import MobileButton from "../ui/MobileButton";

function SuggestionComments() {
  const { id } = useParams();
  const { suggestions, onlyStatusSuggestion } = useSuggestion();
  const singleSuggestion = onlyStatusSuggestion.find(
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
          hoverbgcolor="#7C91F9"
          onClick={() => navigate(`/${id}/editFeedback`)}
        >
          Edit Feedback
        </Button>
        <MobileButton
          bgcolor="#4661E6"
          hoverbgcolor="#7C91F9"
          onClick={() => navigate(`/${id}/editFeedback`)}
        >
          Edit Feedback
        </MobileButton>
      </SuggestionCommentsHeader>
      <SuggestionItem suggestion={currentSuggestion} />
      <CommentsList currentSuggestion={currentSuggestion} />

      <AddComent id={id} />
    </StyledSuggestionComments>
  );
}

const StyledSuggestionComments = styled.div`
  /* width: 73rem; */
  width: 100%;
  max-width: 55rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-top: 2.4rem;

  @media screen and (min-width: 768px) {
    width: 100%;
    width: 69.8rem;
    max-width: 110rem;
    margin: 0;
    padding: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 73rem;
    max-width: 73rem;
    margin: 0;
    padding: 0;
  }
`;

const SuggestionCommentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default SuggestionComments;
