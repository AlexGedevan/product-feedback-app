import styled from "styled-components";
import RoadmapHeader from "../components/RoadmapHeader";
import RoadmapStatusBox from "../components/RoadmapStatusBox";
import { useSuggestion } from "../context/SuggestionContext";

function Roadmap() {
  const { roadmapList } = useSuggestion();
  return (
    <StyledRoadmap>
      <RoadmapHeader />
      <RoadmapContainer>
        <RoadmapStatusBox
          status="Planned"
          description="Ideas prioritized for research"
          list={roadmapList.filter((item) => item.status === "planned")}
          color="#F49F85"
        />
        <RoadmapStatusBox
          status="In-Progress"
          description="Currently Being Developed"
          list={roadmapList.filter((item) => item.status === "in-progress")}
          color="#AD1FEA"
        />
        <RoadmapStatusBox
          status="Live"
          description="Released Features"
          list={roadmapList.filter((item) => item.status === "live")}
          color="#62BCFA"
        />
      </RoadmapContainer>
    </StyledRoadmap>
  );
}

const StyledRoadmap = styled.div`
  width: 111rem;
`;

const RoadmapContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-top: 4.8rem;
`;

export default Roadmap;
