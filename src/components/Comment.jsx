import styled from "styled-components";

import CommentOrReply from "./CommentOrReply";

function Comment({ comment }) {
  return (
    <CommentAndRaply>
      <StyledComment>
        <CommentOrReply commentOrReply={comment} />
      </StyledComment>
      {comment.replies && (
        <Reply>
          {comment?.replies.map((reply, index) => {
            return <CommentOrReply commentOrReply={reply} key={index} />;
          })}
        </Reply>
      )}
    </CommentAndRaply>
  );
}

export default Comment;

const CommentAndRaply = styled.div``;

const StyledComment = styled.div`
  border-bottom: 1px solid rgba(140, 146, 179, 0.25);
`;

const Reply = styled.div`
  margin-left: 2rem;
  padding-left: 2.4rem;
  border-left: 1px solid rgba(140, 146, 179, 0.25);
`;
