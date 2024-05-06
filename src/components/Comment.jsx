import styled from "styled-components";

import CommentOrReply from "./CommentOrReply";
import AddReply from "../ui/AddReply";
import { useState } from "react";

function Comment({ comment }) {
  const [isReply, setIsReply] = useState(false);

  return (
    <CommentAndReply>
      <StyledComment>
        <CommentOrReply setIsReply={setIsReply} commentOrReply={comment} />
      </StyledComment>
      {comment.replies && (
        <Reply>
          {comment?.replies.map((reply, index) => {
            return (
              <CommentOrReply
                setIsReply={setIsReply}
                commentOrReply={reply}
                key={index}
              />
            );
          })}
        </Reply>
      )}
      {isReply && <AddReply alreadyreplied={comment?.replies} />}
    </CommentAndReply>
  );
}

export default Comment;

const CommentAndReply = styled.div`
  border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  padding-bottom: 3.2rem;
`;

const StyledComment = styled.div``;

const Reply = styled.div`
  margin-left: 2rem;
  padding-left: 2.4rem;
  border-left: 1px solid rgba(140, 146, 179, 0.25);
`;
