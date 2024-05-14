import styled from "styled-components";
import GoBackComponent from "../ui/GoBackComponent";
import Button from "../ui/Button";
import DesignMark from "../ui/DesignMark";
import FeedbackCategory from "../components/FeedbackCategory";
import newFeedback from "/assets/shared/icon-new-feedback.svg";

import { useState } from "react";
import { useSuggestion } from "../context/SuggestionContext";
import { useNavigate } from "react-router-dom";

function CreateFeedback() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [checked, setChecked] = useState("Feature");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const { setSuggestions } = useSuggestion();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!description && !title) {
      setError("all");
      return;
    } else if (!title) {
      setError("title");
      return;
    } else if (!description) {
      setError("description");
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      title,
      category: checked.toLowerCase(),
      upvotes: 0,
      status: "suggestion",
      description,
    };
    setSuggestions((suggestions) => [...suggestions, newItem]);
    navigate("/");
  }

  return (
    <StyledCreateFeedback>
      <GoBackComponent />
      <CreateFeedbackForm onSubmit={handleSubmit}>
        <DesignMark image={newFeedback} />
        <h1>Create New Feedback</h1>
        <FeedbackTitle>
          <FeedbackTitleHeadline>
            <h2>Feedback Title</h2>
            <p>Add a short, descriptive headline</p>
          </FeedbackTitleHeadline>
          <input onChange={(e) => setTitle(e.target.value)} />
          {(error === "all" || error === "title") && (
            <Error>Can't be empty</Error>
          )}
        </FeedbackTitle>
        <FeedbackCategory
          checked={checked}
          setChecked={setChecked}
          isSelecting={isSelecting}
          setIsSelecting={setIsSelecting}
        />
        <FeedbackDescription>
          <h2>Feedback Detail</h2>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
        </FeedbackDescription>
        <FeedbackDescriptionContent>
          <FeedbackInput onChange={(e) => setDescription(e.target.value)} />
          {(error === "all" || error === "description") && (
            <Error>Can't be empty</Error>
          )}
        </FeedbackDescriptionContent>
        <ButtonsDiv>
          <Button bgcolor="#3A4374" hoverbgcolor="#656EA3">
            Cancel
          </Button>
          <Button bgcolor="#AD1FEA" hoverbgcolor="#C75AF6">
            Add Feedback
          </Button>
        </ButtonsDiv>
      </CreateFeedbackForm>
    </StyledCreateFeedback>
  );
}

const StyledCreateFeedback = styled.div`
  width: 54rem;
`;

const CreateFeedbackForm = styled.form`
  background-color: #ffffff;
  margin-top: 6.8rem;
  padding: 5.2rem 4.2rem 4rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  & > h1 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.468rem;
    letter-spacing: -0.3333333432674408px;
    color: #3a4374;
  }
`;

const FeedbackTitle = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  & > input {
    padding: 1.2rem 0 1.4rem 2.4rem;
    border-radius: 5px;
    border: none;
    background-color: #f7f8fd;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.168rem;
    font-family: inherit;
    color: #3a4374;

    &:focus {
      outline: 1px solid #4661e6;
    }
  }
`;

const FeedbackTitleHeadline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  & > h2 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.023rem;
    letter-spacing: -0.1944444477558136px;
    color: #3a4374;
  }
  & > p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.023rem;
    color: #647196;
  }
`;

const FeedbackDescription = styled.div`
  & > h2 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.023rem;
    letter-spacing: -0.1944444477558136px;
    color: #3a4374;
  }

  & > p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.023rem;
    color: #647196;
  }
`;

const FeedbackInput = styled.input`
  padding: 1.3rem 0 4rem 2.4rem;
  width: 100%;
  border: none;
  border-radius: 5px;

  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2.168rem;
  font-family: inherit;
  color: #3a4374;
  background-color: #f7f8fd;
  &:focus {
    outline: 1px solid #4661e6;
  }
`;

const ButtonsDiv = styled.div`
  margin-top: -0.8rem;
  align-self: flex-end;
  display: flex;
  gap: 1.6rem;
`;

const FeedbackDescriptionContent = styled.div``;

const Error = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.23px;
  text-align: left;
  color: #d73737;
`;

export default CreateFeedback;
