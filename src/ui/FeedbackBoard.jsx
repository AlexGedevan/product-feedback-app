import styled from "styled-components";
import FrontendMentor from "../components/FrontendMentor";
import BoardCategories from "../components/BoardCategories";
import RoadmapPreview from "../components/RoadmapPreview";

function FeedbackBoard() {
  return (
    <StyledFeedbackBoard>
      <FrontendMentor />
      <BoardCategories />
      <RoadmapPreview />
    </StyledFeedbackBoard>
  );
}

export default FeedbackBoard;

const StyledFeedbackBoard = styled.div`
  /* width: 25.5rem; */

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  & > div:nth-child(2) {
    display: none;
  }

  & > div:nth-child(3) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    & > div:nth-child(2) {
      display: flex;
    }

    & > div:nth-child(3) {
      display: block;
    }
  }
`;
