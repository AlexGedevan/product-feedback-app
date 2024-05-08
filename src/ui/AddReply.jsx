import styled from "styled-components";
import Button from "./Button";
import { useSuggestion } from "../context/SuggestionContext";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AddReply({ alreadyreplied }) {
  const { suggestions, setSuggestions } = useSuggestion();
  const [replyText, setReplyText] = useState("");
  const { replyId, setReplyId, currentUser, commentId } = useSuggestion();
  const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();

    const suggestionIndex = suggestions.findIndex(
      (item) => item.id === Number(id)
    );

    const commentIndex = suggestions[suggestionIndex].comments.findIndex(
      (com) => com.id === commentId
    );

    const replyIndex = suggestions[suggestionIndex].comments[
      commentIndex
    ].replies?.findIndex((rep) => rep.id === replyId);

    const newReply = {
      id: crypto.randomUUID(),
      content: replyText,
      replyingTo:
        replyIndex !== -1 &&
        "replies" in suggestions[suggestionIndex].comments[commentIndex]
          ? suggestions[suggestionIndex]?.comments[commentIndex]?.replies[
              replyIndex
            ]?.user.username
          : suggestions[suggestionIndex].comments[commentIndex].user.username,
      user: { ...currentUser },
    };

    if (!("replies" in suggestions[suggestionIndex].comments[commentIndex])) {
      let replies = [];
      replies.push(newReply);
      suggestions[suggestionIndex].comments[commentIndex] = {
        ...suggestions[suggestionIndex].comments[commentIndex],
        replies,
      };
      setSuggestions([...suggestions]);
    } else {
      suggestions[suggestionIndex].comments[commentIndex].replies.push(
        newReply
      );
      suggestions[suggestionIndex].comments[commentIndex] = {
        ...suggestions[suggestionIndex].comments[commentIndex],
      };
      setSuggestions([...suggestions]);
    }
    setReplyId(null);
  }

  return (
    <StyledAddReply alreadyreplied={alreadyreplied} onSubmit={handleSubmit}>
      <ReplyInput
        type="text"
        alreadyreplied={alreadyreplied}
        placeholder="Type your reply here"
        onChange={(e) => setReplyText(e.target.value)}
        value={replyText}
      />
      <Button width="11.7rem">Post Reply</Button>
    </StyledAddReply>
  );
}

export default AddReply;

const StyledAddReply = styled.form`
  margin-left: ${(props) => (props.alreadyreplied ? "11.7rem" : "7.2rem")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;
  margin-top: 2.4rem;

  & > button {
    align-self: flex-start;
  }
`;

const ReplyInput = styled.input`
  padding: 1.6rem 0rem 4.2rem 2.4rem;
  width: ${(props) => (props.alreadyreplied ? "75%" : "77%")};
  border: none;
  outline: none;
  border-radius: 0.5rem;

  &::placeholder {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.168rem;
    color: #8c92b3;
  }

  &:focus {
    outline: 1px solid #4661e6;
  }
`;
