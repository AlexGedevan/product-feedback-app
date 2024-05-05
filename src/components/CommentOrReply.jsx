import styled from "styled-components";
import face from "/assets/user-images/image-suzanne.jpg";

function CommentOrReply({ commentOrReply }) {
  const { content } = commentOrReply;
  //   const { content: replyContent } = reply;
  return (
    <StyledCommentorReply>
      <img src={face} alt="face" />
      <CommentContent>
        <CommentUserInformation>
          <User>
            <h2>Elijah Moss</h2>
            <h3>@hexagon.bestagon</h3>
          </User>
          <p>Reply</p>
        </CommentUserInformation>
        <p>{content}</p>
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
  padding-bottom: 3.2rem;

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
