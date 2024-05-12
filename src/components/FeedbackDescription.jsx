import styled from "styled-components";

function FeedbackDescription({ description, setDescription }) {
  return (
    <StyledFeedbackDescription>
      <h2>Feedback Detail</h2>
      <p>
        Include any specific comments on what should be improved, added, etc.
      </p>
      <FeedbackDescriptionContent>
        <FeedbackInput
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FeedbackDescriptionContent>
    </StyledFeedbackDescription>
  );
}

export default FeedbackDescription;

const StyledFeedbackDescription = styled.div`
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
