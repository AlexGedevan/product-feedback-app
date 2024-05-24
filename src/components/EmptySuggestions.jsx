import styled from "styled-components";
import emptySuggestions from "/assets/suggestions/illustration-empty.svg";
import MobileButton from "../ui/MobileButton";

function EmptySuggestions() {
  return (
    <StyledEmptySuggestions>
      <img src={emptySuggestions} alt="empty-suggestions" />
      <h2>There is no feedback yet.</h2>
      <Text>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app
      </Text>
      <ButtonContaner>
        <MobileButton>+ Add Feedback</MobileButton>
      </ButtonContaner>
    </StyledEmptySuggestions>
  );
}

export default EmptySuggestions;

const StyledEmptySuggestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7.6rem 2.4rem;
  background: #fff;

  & > h2 {
    color: #3a4374;
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.25px;
    margin-top: 3.9rem;
  }

  @media screen and (min-width: 768px) {
    padding: 11rem 13.9rem;
  }
`;

const Text = styled.p`
  color: #647196;
  font-size: 1.3rem;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-top: 1.4rem;
`;

const ButtonContaner = styled.div`
  margin-top: 2.4rem;
`;
