import styled from "styled-components";

import CommentOrReply from "./CommentOrReply";
import AddReply from "../ui/AddReply";

import { useSuggestion } from "../context/SuggestionContext";
import { useState } from "react";

function Comment({ comment }) {
  const [anyId, setAnyId] = useState(0);
  const { replyId } = useSuggestion();

  return (
    <CommentAndReply>
      <StyledComment>
        <CommentOrReply commentOrReply={comment} setAnyId={setAnyId} />
      </StyledComment>
      {comment.replies && (
        <Reply>
          {comment?.replies.map((reply, index) => {
            return (
              <CommentOrReply
                commentOrReply={reply}
                key={index}
                setAnyId={setAnyId}
              />
            );
          })}
        </Reply>
      )}
      {replyId === anyId && <AddReply alreadyreplied={comment?.replies} />}
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
