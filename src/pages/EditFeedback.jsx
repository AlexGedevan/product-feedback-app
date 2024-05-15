import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSuggestion } from "../context/SuggestionContext";
import GoBackComponent from "../ui/GoBackComponent";
import { useState } from "react";
import FeedbackCategory from "../components/FeedbackCategory";
import DesignMark from "../ui/DesignMark";
import StatusSelector from "../components/StatusSelector";
import FeedbackDescription from "../components/FeedbackDescription";
import Button from "../ui/Button";

import arrowUp from "/assets/shared/icon-arrow-up.svg";
import arrowDown from "/assets/shared/icon-arrow-down.svg";
import editFeedbackIcon from "/assets/shared/icon-edit-feedback.svg";
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
  const [editDescription, setEditDescription] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  function handleCancel() {
    setNewTitle("");
    setCategoryChecked("Feature");
    setIsSelectingCategory(false);
    setStatusChecked("Planned");
    setIsSelectingStatus(false);
    setEditDescription("");
  }

  function handleDelete() {
    setSuggestions(suggestions.filter((sug) => String(sug.id) !== String(id)));
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const suggestionIndex = suggestions.findIndex(
      (sugg) => String(sugg.id) === String(id)
    );
    if (
      !newTitle &&
      !editDescription &&
      categoryChecked.toLocaleLowerCase() ===
        suggestions[suggestionIndex].category.toLocaleLowerCase() &&
      statusChecked.toLocaleLowerCase() ===
        suggestions[suggestionIndex].status.toLocaleLowerCase()
    ) {
      setError(true);
      return;
    }

    const currentSuggestion = {
      title: newTitle !== "" ? newTitle : suggestions[suggestionIndex].title,
      description:
        editDescription !== ""
          ? editDescription
          : suggestions[suggestionIndex].description,
      status: statusChecked,
      category: categoryChecked.toLocaleLowerCase(),
    };
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
        <DesignMark image={editFeedbackIcon} />
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
          {error && <Error>Can't be empty</Error>}
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

          <StatusSelector
            isSelectingStatus={isSelectingStatus}
            setStatusChecked={setStatusChecked}
            setIsSelectingStatus={setIsSelectingStatus}
            statusChecked={statusChecked}
          />
        </FeedbackStatus>

        <FeedbackDescription
          description={editDescription}
          setDescription={setEditDescription}
        />
        {error && <Error>Can't be empty</Error>}
        <ButtonsDiv>
          <ButtonsRightDiv>
            <Button bgcolor="#AD1FEA" hoverbgcolor="#C75AF6">
              Edit Feedback
            </Button>
            <Button
              bgcolor="#3A4374"
              hoverbgcolor="#656EA3"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </ButtonsRightDiv>
          <Button
            bgcolor="#D73737"
            hoverbgcolor="#E98888"
            onClick={handleDelete}
          >
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
    margin-top: 2.4rem;
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

const Error = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.23px;
  text-align: left;
  color: #d73737;
`;

export default EditFeedback;
