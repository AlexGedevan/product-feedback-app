import styled from "styled-components";
import RoadmapHeader from "../components/RoadmapHeader";
import RoadmapStatusBox from "../components/RoadmapStatusBox";
import { useSuggestion } from "../context/SuggestionContext";
import RoadmapStatus from "../components/RoadmapStatus";
import MobileChoosenStatus from "../components/MobileChoosenStatus";
import { useState } from "react";

function Roadmap() {
  const { roadmapList } = useSuggestion();
  const [currentStatus, setCurrentStatus] = useState("Planned");

  const PlanedTotal = roadmapList.filter(
    (item) => "planned" === item.status
  ).length;

  const InProgressTotal = roadmapList.filter(
    (item) => "in-progress" === item.status
  ).length;

  const LiveTotal = roadmapList.filter((item) => "live" === item.status).length;

  const currentStatusText = () => {
    if (currentStatus === "Planned") {
      return "Ideas prioritized for research";
    } else if (currentStatus === "In-progress") {
      return "Currently being developed";
    } else if (currentStatus === "Live") {
      return "Released features";
    }
  };

  const currentTotalLength = () => {
    if (currentStatus === "Planned") {
      return PlanedTotal;
    } else if (currentStatus === "In-progress") {
      return InProgressTotal;
    } else if (currentStatus === "Live") {
      return LiveTotal;
    }
  };
  return (
    <StyledRoadmap>
      <RoadmapHeader />

      <MobileBoxTitle>
        <RoadmapStatus
          status="Planned"
          ItemsTotal={PlanedTotal}
          currentStatus={currentStatus}
          onClick={() => setCurrentStatus("Planned")}
        />
        <RoadmapStatus
          status="In-progress"
          ItemsTotal={InProgressTotal}
          currentStatus={currentStatus}
          onClick={() => setCurrentStatus("In-progress")}
        />
        <RoadmapStatus
          status="Live"
          ItemsTotal={LiveTotal}
          currentStatus={currentStatus}
          onClick={() => setCurrentStatus("Live")}
        />
      </MobileBoxTitle>

      <MobileChoosenStatus
        currentStatus={currentStatus}
        currentStatusText={currentStatusText()}
        currentTotalLength={currentTotalLength()}
      />

      <RoadmapContainerMobile>
        {currentStatus === "Planned" && (
          <RoadmapStatusBox
            status="Planned"
            description="Ideas prioritized for research"
            list={roadmapList.filter((item) => item.status === "planned")}
            color="#F49F85"
          />
        )}
        {currentStatus === "In-progress" && (
          <RoadmapStatusBox
            status="In-Progress"
            description="Currently Being Developed"
            list={roadmapList.filter((item) => item.status === "in-progress")}
            color="#AD1FEA"
          />
        )}
        {currentStatus === "Live" && (
          <RoadmapStatusBox
            status="Live"
            description="Released Features"
            list={roadmapList.filter((item) => item.status === "live")}
            color="#62BCFA"
          />
        )}
      </RoadmapContainerMobile>

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
  width: 37.5rem;

  @media screen and (min-width: 768px) {
    width: 69.8rem;
  }
  @media screen and (min-width: 1440px) {
    width: 110rem;
  }
`;

const MobileBoxTitle = styled.div`
  padding: 2.4rem 2rem;
  border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  /* margin-top: 4.8rem; */
  margin-top: 2.4rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: space-between;
  }
`;

const RoadmapContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  /* margin-top: 4.8rem; */
  margin-top: 2.4rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default Roadmap;
