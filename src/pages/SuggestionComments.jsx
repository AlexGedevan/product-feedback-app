import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import arrowLeft from "/assets/shared/icon-arrow-left.svg";
import Button from "../ui/Button";
import { useSuggestion } from "../context/SuggestionContext";
import SuggestionItem from "../components/SuggestionItem";
import CommentsList from "../components/CommentsList";
import { useEffect } from "react";
import AddComent from "../components/AddComent";

function SuggestionComments() {
  const { id } = useParams();
  const { suggestions } = useSuggestion();
  const singleSuggestion = suggestions.find(
    (suggestion) => Number(suggestion.id) === Number(id)
  );

  const { setCurrentSuggestion, currentSuggestion } = useSuggestion();

  useEffect(() => {
    setCurrentSuggestion(singleSuggestion);
  }, [setCurrentSuggestion, singleSuggestion]);

  return (
    <StyledSuggestionComments>
      <SuggestionCommentsHeader>
        <Link to={-1}>
          <img src={arrowLeft} alt="arrow-left" />
          <GoBack>Go Back</GoBack>
        </Link>
        <Button bgcolor="#4661E6">Edit Feedback</Button>
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
  & > a {
    display: flex;
    align-items: center;
    gap: 1.567rem;
  }
`;

const GoBack = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.023rem;
  text-align: left;
  color: #647196;
`;

export default SuggestionComments;
