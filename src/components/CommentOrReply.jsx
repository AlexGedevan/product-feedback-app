import styled from "styled-components";
import { useSuggestion } from "../context/SuggestionContext";

function CommentOrReply({ commentOrReply, setCurrentId, commentId }) {
  const { setReplyId, replyId, setCommentId } = useSuggestion();

  function handleWhosReplying(id) {
    if (replyId === id) {
      setReplyId(null);
      setCurrentId(0);
      return;
    }
    setReplyId(id);
    setCurrentId(id);
    setCommentId(commentId);
  }

  const { content, user, id } = commentOrReply;
  return (
    <StyledCommentorReply>
      <img src={user.image} alt="face" />
      <CommentContent>
        <CommentUserInformation>
          <User>
            <h2>{user.name}</h2>
            <h3>@{user.username}</h3>
          </User>
          <p
            onClick={() => {
              handleWhosReplying(id);
            }}
          >
            Reply
          </p>
        </CommentUserInformation>
        <p>
          {commentOrReply.replyingTo && (
            <ReplyingTo>@{commentOrReply.replyingTo} </ReplyingTo>
          )}
          {content}
        </p>
      </CommentContent>
    </StyledCommentorReply>
  );
}

export default CommentOrReply;

const StyledCommentorReply = styled.div`
  width: 100%;
  display: flex;
  gap: 3.2rem;
  margin-top: 2.8rem;

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

  & > p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.168rem;
    color: #647196;
  }
`;

const CommentUserInformation = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > p {
    border: none;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.879px;
    color: #4661e6;
    transition: all 0.3s;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

const User = styled.div`
  & > h2 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.023rem;
    letter-spacing: -0.1944444477558136px;
    color: #3a4374;
  }

  & > h3 {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.023rem;
    color: #647196;
  }
`;

const ReplyingTo = styled.span`
  color: #ad1fea;
  font-weight: 700;
`;
