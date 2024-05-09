import styled from "styled-components";
import GoBackComponent from "../ui/GoBackComponent";
import Button from "../ui/Button";
import arrowUp from "/assets/shared/icon-arrow-up.svg";
import arrowDown from "/assets/shared/icon-arrow-down.svg";
import Check from "/assets/shared/icon-check.svg";
import { useState } from "react";
import { useSuggestion } from "../context/SuggestionContext";
import { useNavigate } from "react-router-dom";

function CreateFeedback() {
  const [isSelecting, setIsSelecting] = useState(false);
  const [checked, setChecked] = useState("Feature");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { setSuggestions } = useSuggestion();
  const navigate = useNavigate();

  function handleSubmit() {
    const newItem = {
      id: crypto.randomUUID(),
      title,
      category: checked,
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
        <h1>Create New Feedback</h1>
        <FeedbackTitle>
          <FeedbackTitleHeadline>
            <h2>Feedback Title</h2>
            <p>Add a short, descriptive headline</p>
          </FeedbackTitleHeadline>
          <input onChange={(e) => setTitle(e.target.value)} />
        </FeedbackTitle>
        <FeedbackCategory>
          <h2>Category</h2>
          <p>Choose a category for your feedback</p>
          <Select>
            <ChoosenCategory onClick={() => setIsSelecting(!isSelecting)}>
              <p>{checked}</p>
              <img src={isSelecting ? arrowUp : arrowDown} alt="arrow up" />
            </ChoosenCategory>
            {isSelecting && (
              <AbsoluteOptionsDiv>
                <OptionDiv
                  onClick={() => {
                    setChecked("Feature");
                    setIsSelecting(false);
                  }}
                >
                  <option>Feature</option>
                  {checked === "Feature" && (
                    <img src={Check} alt="check icon" />
                  )}
                </OptionDiv>
                <OptionDiv
                  onClick={() => {
                    setChecked("UI");
                    setIsSelecting(false);
                  }}
                >
                  <option>UI</option>
                  {checked === "UI" && <img src={Check} alt="check icon" />}
                </OptionDiv>
                <OptionDiv
                  onClick={() => {
                    setChecked("UX");
                    setIsSelecting(false);
                  }}
                >
                  <option>UX</option>
                  {checked === "UX" && <img src={Check} alt="check icon" />}
                </OptionDiv>
                <OptionDiv
                  onClick={() => {
                    setChecked("Enchancement");
                    setIsSelecting(false);
                  }}
                >
                  <option>Enhancement</option>
                  {checked === "Enhancement" && (
                    <img src={Check} alt="check icon" />
                  )}
                </OptionDiv>
                <OptionDiv
                  onClick={() => {
                    setChecked("Bug");
                    setIsSelecting(false);
                  }}
                >
                  <option>Bug</option>
                  {checked === "Bug" && <img src={Check} alt="check icon" />}
                </OptionDiv>
              </AbsoluteOptionsDiv>
            )}
          </Select>
        </FeedbackCategory>
        <FeedbackDescription>
          <h2>Feedback Detail</h2>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
        </FeedbackDescription>
        <FeedbackContent>
          <FeedbackInput onChange={(e) => setDescription(e.target.value)} />
          <p>Can't be empty</p>
        </FeedbackContent>
        <ButtonsDiv>
          <Button bgcolor="#656EA3">Cancel</Button>
          <Button bgcolor="#C75AF6">Add Feedback</Button>
        </ButtonsDiv>
      </CreateFeedbackForm>
    </StyledCreateFeedback>
  );
}

const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1.2rem 2.4rem 1.3rem 2.4rem;
  & > option {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.312rem;
    color: #647196;
  }
`;

const ChoosenCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.168rem;
    color: #3a4374;
  }
`;

const AbsoluteOptionsDiv = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35);
  border-radius: 10px;
  left: 0;
  top: 5.517rem;
`;

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

const FeedbackCategory = styled.div`
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

const Select = styled.div`
  position: relative;
  padding: 1.2rem 2.2rem 1.3rem 2.4rem;
  width: 100%;
  border-radius: 5px;
  margin-top: 1.6rem;
  background: #f7f8fd;
  border: none;
  & > option {
    font-size: 15px;
    font-weight: 400;
    line-height: 21.68px;
    text-align: left;
    color: #3a4374;
  }

  &:focus {
    outline: 1px solid #4661e6;
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

const FeedbackContent = styled.div`
  & > p {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.23px;
    text-align: left;
    color: #d73737;
  }
`;

export default CreateFeedback;
