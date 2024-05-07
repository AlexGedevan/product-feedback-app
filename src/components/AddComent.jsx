import styled from "styled-components";
import Button from "../ui/Button";
import { useSuggestion } from "../context/SuggestionContext";
import { useState } from "react";

function AddComent({ id }) {
  const { suggestions, setSuggestions, currentUser } = useSuggestion();
  const [commentText, setCommentText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!commentText) return;
    const newComment = {
      id: crypto.randomUUID(),
      content: commentText,
      user: { ...currentUser },
    };
    const currentSuggestion = suggestions.findIndex(
      (suggestion) => Number(suggestion.id) === Number(id)
    );

    if (!suggestions[currentSuggestion].comments) {
      let comments = [];
      comments.push(newComment);
      suggestions[currentSuggestion] = {
        ...suggestions[currentSuggestion],
        comments,
      };
      setSuggestions([...suggestions]);
      setCommentText("");
      return;
    }

    suggestions[currentSuggestion].comments = [
      ...suggestions[currentSuggestion].comments,
      newComment,
    ];
    setSuggestions([...suggestions]);
    setCommentText("");
  }

  return (
    <StyledAddComment onSubmit={handleSubmit}>
      <h2>Add Comment</h2>
      <CommentInput
        type="text"
        placeholder="Type your comment here"
        onChange={(e) => setCommentText(e.target.value)}
        value={commentText}
      />
      <SubmitComment>
        <p>250 Characters left</p>
        <Button>Post Comment</Button>
      </SubmitComment>
    </StyledAddComment>
  );
}

export default AddComent;

const StyledAddComment = styled.form`
  padding: 2.4rem 3.2rem 3.2rem 3.4rem;
  background: #ffffff;
  border-radius: 1rem;

  & > h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.601rem;
    letter-spacing: -0.25px;
    color: #3a4374;
  }
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 1.6rem 0rem 4.2rem 2.4rem;
  font-family: inherit;
  margin-top: 2.4rem;
  border: none;
  outline: none;
  background: #f7f8fd;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.168rem;
  color: #3a4374;
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

const SubmitComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;

  & > p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.168rem;
    color: #647196;
  }
`;
