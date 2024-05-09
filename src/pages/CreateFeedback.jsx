import styled from "styled-components";
import GoBackComponent from "../ui/GoBackComponent";

function CreateFeedback() {
  return (
    <StyledCreateFeedback>
      <GoBackComponent />
      <CreateFeedbackForm>
        <h1>Create New Feedback</h1>
        <FeedbackTitle>
          <FeedbackTitleHeadline>
            <h2>Feedback Title</h2>
            <p>Add a short, descriptive headline</p>
          </FeedbackTitleHeadline>
          <input />
        </FeedbackTitle>
        <FeedbackCategory>
          <h2>Category</h2>
          <p>Choose a category for your feedback</p>
          <Select>
            <option>Feature</option>
            <option>Enhancement</option>
            <option>UI</option>
            <option>UX</option>
            <option>Bug</option>
          </Select>
        </FeedbackCategory>
        <FeedbackDescription>
          <h2>Feedback Detail</h2>
          <p>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
        </FeedbackDescription>
        <FeedbackInput />
      </CreateFeedbackForm>
    </StyledCreateFeedback>
  );
}

const StyledCreateFeedback = styled.div`
  width: 54rem;
`;

const CreateFeedbackForm = styled.div`
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
    text-align: left;
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

const Select = styled.select`
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

const FeedbackInput = styled.input``;

export default CreateFeedback;
