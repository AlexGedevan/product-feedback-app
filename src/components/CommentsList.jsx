import styled from "styled-components";

import Comment from "./Comment";
import { useSuggestion } from "../context/SuggestionContext";

function CommentsList() {
  const { currentSuggestion } = useSuggestion();

  return (
    <StyledCommentsList>
      <h2>{currentSuggestion.comments?.length || 0} Comments</h2>
      {currentSuggestion.comments?.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </StyledCommentsList>
  );
}

const StyledCommentsList = styled.div`
  padding: 2.4rem 3.2rem 4.8rem 3.2rem;
  background: #ffffff;
  border-radius: 10px;

  & > h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.601rem;
    letter-spacing: -0.25px;
    color: #3a4374;
  }
`;

export default CommentsList;
