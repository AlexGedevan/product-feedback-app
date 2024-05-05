import styled from "styled-components";
import face from "/assets/user-images/image-suzanne.jpg";

function CommentsList({ currentSuggestion }) {
  return (
    <StyledCommentsList>
      <h2>{currentSuggestion.comments?.length || 0} Comments</h2>
      <Comment>
        <img src={face} alt="face" />
        <CommentContent>
          <CommentUserInformation>
            <div>
              <h2>{currentSuggestion.comments[0].user.name}</h2>
              <h3>@{currentSuggestion.comments[0].user.username}</h3>
            </div>
            <button>Reply</button>
          </CommentUserInformation>
          <p>{currentSuggestion.comments[0].content}</p>
        </CommentContent>
      </Comment>
    </StyledCommentsList>
  );
}

const StyledCommentsList = styled.div``;

const Comment = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
  & > img {
    border-radius: 10000px;
    width: 40px;
    align-self: flex-start;
  }
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  width: 100%;
`;

const CommentUserInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default CommentsList;
