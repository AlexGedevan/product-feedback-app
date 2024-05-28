import styled from "styled-components";
import RoadmapItem from "./RoadmapItem";
import RoadmapStatus from "./RoadmapStatus";

function RoadmapStatusBox({ status, description, list, color }) {
  const ItemsTotal = list.filter(
    (item) => item.status === status.toLowerCase()
  ).length;

  return (
    <StyledRoadmapStatusBox>
      <BoxTitle>
        <RoadmapStatus status={status} ItemsTotal={ItemsTotal} />
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

const StyledRoadmapStatusBox = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: flex-start; */
  width: 35rem;
  @media screen and (min-width: 768px) {
    width: 22.3rem;
  }
  @media screen and (min-width: 1440px) {
    width: 35rem;
  }
`;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  display: none;
  margin-bottom: 3.2rem;

  & > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.312rem;
    color: #647196;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

const RoadmapBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export default RoadmapStatusBox;
