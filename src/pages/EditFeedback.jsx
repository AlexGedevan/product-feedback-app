import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSuggestion } from "../context/SuggestionContext";
import GoBackComponent from "../ui/GoBackComponent";
import { useState } from "react";
import FeedbackCategory from "../components/FeedbackCategory";
import Check from "/assets/shared/icon-check.svg";
import arrowUp from "/assets/shared/icon-arrow-up.svg";
import arrowDown from "/assets/shared/icon-arrow-down.svg";
import Button from "../ui/Button";
function EditFeedback() {
  const { id } = useParams();
  const { suggestions, setSuggestions } = useSuggestion();
  const { title } = suggestions.find(
    (suggestion) => String(suggestion.id) === String(id)
  );

  const [newTitle, setNewTitle] = useState("");
  const [categoryChecked, setCategoryChecked] = useState("Feature");
  const [isSelectingCategory, setIsSelectingCategory] = useState(false);
  const [isSelectingStatus, setIsSelectingStatus] = useState(false);
  const [statusChecked, setStatusChecked] = useState("Planned");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  function handleCancel() {
    setNewTitle("");
    setCategoryChecked("Feature");
    setIsSelectingCategory(false);
    setStatusChecked("Planned");
    setIsSelectingStatus(false);
    setDescription("");
  }

  function handleDelete() {
    setSuggestions(suggestions.filter((sug) => String(sug.id) !== String(id)));
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!newTitle || !description) return;

    const currentSuggestion = {
      title: newTitle,
      description,
      status: statusChecked,
      category: categoryChecked,
    };
    const suggestionIndex = suggestions.findIndex(
      (sugg) => String(sugg.id) === String(id)
    );
    suggestions[suggestionIndex] = {
      ...suggestions[suggestionIndex],
      ...currentSuggestion,
    };
    setSuggestions([...suggestions]);
    navigate("/");
  }

  return (
    <StyledEditFeedback>
      <GoBackComponent />
      <EditFeedbackForm onSubmit={handleSubmit}>
        <h1>{`Editing '${title}'`}</h1>
        <FeedbackTitle>
          <FeedbackTitleHeadline>
            <h2>Feedback Title</h2>
            <p>Add a short, descriptive headline</p>
          </FeedbackTitleHeadline>
          <input
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
          />
          {/* {(error === "all" || error === "title") && (
            <Error>Can't be empty</Error>
          )} */}
        </FeedbackTitle>
        <FeedbackCategory
          checked={categoryChecked}
          setChecked={setCategoryChecked}
          isSelecting={isSelectingCategory}
          setIsSelecting={setIsSelectingCategory}
        />
        <FeedbackStatus>
          <FeedbackStatusHeadline>
            <h1>Update Status</h1>
            <p>Check feedback state</p>
          </FeedbackStatusHeadline>
          <ChoosenStatus
            onClick={() => setIsSelectingStatus(!isSelectingStatus)}
          >
            <p>{statusChecked}</p>
            <img src={isSelectingStatus ? arrowUp : arrowDown} alt="arrow up" />
          </ChoosenStatus>
          <StatusSelector>
            {isSelectingStatus && (
              <AbsoluteStatusDiv>
                <OptionDiv
                  onClick={() => {
                    setStatusChecked("Suggestion");
                    setIsSelectingStatus(false);
                  }}
                >
                  <option>Suggestion</option>
                  {statusChecked === "Suggestion" && (
                    <img src={Check} alt="check icon" />
                  )}
                </OptionDiv>
                <OptionDiv
                  onClick={() => {
                    setStatusChecked("Planned");
                    setIsSelectingStatus(false);
                  }}
                >
                  <option>Planned</option>
                  {statusChecked === "Planned" && (
                    <img src={Check} alt="check icon" />
                  )}
                </OptionDiv>
                <OptionDiv
                  onClick={() => {
                    setStatusChecked("In-Progress");
                    setIsSelectingStatus(false);
                  }}
                >
                  <option>In-Progress</option>
                  {statusChecked === "In-Progress" && (
                    <img src={Check} alt="check icon" />
                  )}
                </OptionDiv>
                <OptionDiv
                  onClick={() => {
                    setStatusChecked("Live");
                    setIsSelectingStatus(false);
                  }}
                >
                  <option>Live</option>
                  {statusChecked === "Live" && (
                    <img src={Check} alt="check icon" />
                  )}
                </OptionDiv>
              </AbsoluteStatusDiv>
            )}
          </StatusSelector>
        </FeedbackStatus>
        <FeedbackDescription>
          <h2>Feedback Detail</h2>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <FeedbackDescriptionContent>
            <FeedbackInput
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </FeedbackDescriptionContent>
        </FeedbackDescription>
        <ButtonsDiv>
          <ButtonsRightDiv>
            <Button bgcolor="#AD1FEA">Edit Feedback</Button>
            <Button bgcolor="#656EA3" onClick={handleCancel}>
              Cancel
            </Button>
          </ButtonsRightDiv>
          <Button bgcolor="#D73737" onClick={handleDelete}>
            Delete
          </Button>
        </ButtonsDiv>
      </EditFeedbackForm>
    </StyledEditFeedback>
  );
}

const StyledEditFeedback = styled.div`
  width: 54rem;
`;

const EditFeedbackForm = styled.form`
  & > h1 {
    font-family: Jost;
    font-size: 24px;
    font-weight: 700;
    line-height: 34.68px;
    letter-spacing: -0.3333333432674408px;
    color: #3a4374;
  }
  margin-top: 6.8rem;
  padding: 5.2rem 4.2rem 0 4.2rem;
  background-color: white;
`;

const FeedbackTitle = styled.div`
  margin-bottom: 2.4rem;
  margin-top: 7.5rem;
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

const FeedbackInput = styled.input`
  margin-top: 1.6rem;
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

const FeedbackDescriptionContent = styled.div``;

const FeedbackDescription = styled.div`
  margin-top: 2.4rem;
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

const ChoosenStatus = styled.div`
  margin-top: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f7f8fd;
  & > p {
    font-size: 15px;
    font-weight: 400;
    line-height: 21.68px;
    color: #3a4374;
  }
  padding: 1.3rem 2.4rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  z-index: -1;
`;

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

const AbsoluteStatusDiv = styled.div`
  z-index: 100;
  position: absolute;
  top: 6.4rem;
  background-color: white;
  width: 100%;
  border-radius: 5px;
`;

const StatusSelector = styled.div`
  position: relative;
`;

const FeedbackStatusHeadline = styled.div`
  & > h1 {
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

const FeedbackStatus = styled.div`
  margin-top: 2.4rem;
  & > p {
    background-color: #f7f8fd;
    font-size: 15px;
    font-weight: 400;
    line-height: 21.68px;
    text-align: left;
    color: #3a4374;
    padding: 1.3rem 2.4rem;
    border-radius: 5px;
  }
`;

const ButtonsRightDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1.6rem;
`;

const ButtonsDiv = styled.div`
  margin-top: 3.2rem;
  display: flex;
  flex-direction: row-reverse;
  gap: 11rem;
`;

export default EditFeedback;
