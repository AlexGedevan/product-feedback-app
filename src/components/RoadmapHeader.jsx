import styled from "styled-components";
import GoBackComponent from "../ui/GoBackComponent";
import Button from "../ui/Button";

function RoadmapHeader() {
  return (
    <StyledRoadmapHeader>
      <RoadmapTitle>
        <GoBackComponent color="#fff" />
        <h2>Roadmap</h2>
      </RoadmapTitle>
      <Button>+ Add Feedback</Button>
    </StyledRoadmapHeader>
  );
}

const StyledRoadmapHeader = styled.div`
  width: 100%;
  padding: 2.7rem 4rem 2.7rem 3.2rem;
  background-color: #373f68;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
`;

const RoadmapTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 3.468rem;
    letter-spacing: -0.3333333432674408px;
  }
`;

export default RoadmapHeader;
