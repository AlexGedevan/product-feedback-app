import styled from "styled-components";
import RoadmapItem from "./RoadmapItem";

function RoadmapStatusBox({ status, description, list, color }) {
  const ItemsTotal = list.filter(
    (item) => item.status === status.toLowerCase()
  ).length;
  return (
    <StyledRoadmapStatusBox>
      <BoxTitle>
        <h2>
          {status} ({ItemsTotal})
        </h2>
        <p>{description}</p>
      </BoxTitle>
      <RoadmapBoxContent>
        {list.map((item) => (
          <RoadmapItem
            item={item}
            list={list}
            status={status}
            color={color}
            key={item.id}
          />
        ))}
      </RoadmapBoxContent>
    </StyledRoadmapStatusBox>
  );
}

const StyledRoadmapStatusBox = styled.div``;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.601rem;
    letter-spacing: -0.25px;
    color: #3a4374;
  }
  & > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.312rem;
    color: #647196;
  }
  margin-bottom: 3.2rem;
`;

const RoadmapBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export default RoadmapStatusBox;
