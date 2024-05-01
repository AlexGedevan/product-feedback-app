import styled from "styled-components";
import FrontendMentor from "../components/FrontendMentor";
import BoardCategories from "../components/BoardCategories";
import Roadmap from "../components/Roadmap";

function FeedbackBoard() {
  return (
    <StyledFeedbackBoard>
      <FrontendMentor />
      <BoardCategories />
      <Roadmap />
    </StyledFeedbackBoard>
  );
}

export default FeedbackBoard;

const StyledFeedbackBoard = styled.div`
  width: 25.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;
