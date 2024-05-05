import styled from "styled-components";

import CommentOrReply from "./CommentOrReply";

function Comment({ comment }) {
  console.log(comment);
  return (
    <>
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
    </>
  );
}

export default Comment;

const StyledComment = styled.div`
  border-bottom: 1px solid rgba(140, 146, 179, 0.25);
`;

const Reply = styled.div`
  padding-left: 4.5rem;
`;
