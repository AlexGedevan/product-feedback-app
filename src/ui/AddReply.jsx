import styled from "styled-components";
import Button from "./Button";
import { useSuggestion } from "../context/SuggestionContext";
import { useState } from "react";

function AddReply({ alreadyreplied }) {
  const { suggestions, setSuggestions } = useSuggestion();
  const [replyText, setReplyText] = useState();
  const { replyId } = useSuggestion();

  function handleSubmit(e) {
    e.preventDefault();

    const suggestion = suggestions.find(
      (suggestion) => suggestion?.comments?.id == replyId
    );
    console.log(suggestion);

    // const newReply = {
    //   id: crypto.randomUUID(),
    //   content: replyText,
    // };
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
