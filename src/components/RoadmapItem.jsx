import styled from "styled-components";
import arrowUp from "/assets/shared/icon-arrow-up.svg";
import commentIcon from "/assets/shared/icon-comments.svg";
import { useNavigate } from "react-router-dom";
function RoadmapItem({ item, list, status, color }) {
  const navigate = useNavigate();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <StyledRoadmapItem
      color={color}
      onClick={() => navigate(`/${item.id}/comments`)}
    >
      <ItemStatus>
        <Circle color={color}></Circle>
        <h2>{capitalizeFirstLetter(item.status)}</h2>
      </ItemStatus>
      <ItemTitle>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </ItemTitle>
      <ItemCategory>
        <p>{capitalizeFirstLetter(item.category)}</p>
      </ItemCategory>
      <ItemUpvotesAndComments>
        <ItemUpvotes>
          <img src={arrowUp} alt="arrow up" />
          <p>{item.upvotes}</p>
        </ItemUpvotes>
        <ItemComments>
          <img src={commentIcon} alt="comment icon" />
          <p>{"comments" in item ? item.comments.length : 0}</p>
        </ItemComments>
      </ItemUpvotesAndComments>
    </StyledRoadmapItem>
  );
}

const StyledRoadmapItem = styled.div`
  width: 35rem;
  padding: 2.5rem 3.2rem 3.2rem;
  border-top: 4px solid ${(props) => props.color};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: white;
  cursor: pointer;
`;

const ItemStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  & > h2 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.312rem;
    color: #647196;
  }
`;

const ItemTitle = styled.div`
  margin-top: 8px;
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
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100000px;
  background-color: ${(props) => props.color};
`;

const ItemCategory = styled.div`
  margin-top: 1.6rem;
  width: 7.7rem;
  border-radius: 10px;
  padding: 5px 17px 6px 16px;
  background-color: #f2f4ff;
  text-align: center;
  & > p {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.879rem;
    color: #4661e6;
  }
`;

const ItemUpvotesAndComments = styled.div`
  margin-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemUpvotes = styled.div`
  padding: 11px 12.5px 10px 16px;
  display: flex;
  align-items: center;
  gap: 9.5px;
  background-color: #f2f4ff;
  border-radius: 10px;
  & > p {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.879rem;
    letter-spacing: -0.1805555522441864px;
    color: #3a4374;
  }
`;

const ItemComments = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  & > p {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.879rem;
    letter-spacing: -0.1805555522441864px;
    color: #3a4374;
  }
`;
export default RoadmapItem;
