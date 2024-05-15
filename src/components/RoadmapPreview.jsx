import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Roadmap() {
  const navigate = useNavigate();
  return (
    <StyledRoadMap>
      <RoadmapView>
        <h2>Roadmap</h2>
        <p onClick={() => navigate("/roadmap")}>View</p>
      </RoadmapView>
      <Rows>
        <Row>
          <div>
            <Circle />
            <p>Planned</p>
          </div>
          <span>2</span>
        </Row>
        <Row>
          <div>
            <Circle />
            <p>In-Progress</p>
          </div>
          <span>3</span>
        </Row>
        <Row>
          <div>
            <Circle />
            <p>Live</p>
          </div>
          <span>1</span>
        </Row>
      </Rows>
    </StyledRoadMap>
  );
}

export default Roadmap;

const StyledRoadMap = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.9rem 2.4rem 2.4rem 2.4rem;
`;

const RoadmapView = styled.div`
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  & > h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.601rem;
    letter-spacing: -0.25px;
    color: #3a4374;
  }

  & > p {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.879rem;
    color: #4661e6;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    & > p {
      margin-left: 1.6rem;
      font-size: 16px;
      font-weight: 400;
      line-height: 23.12px;
      color: #647196;
    }
  }

  & > span {
    font-size: 16px;
    font-weight: 700;
    line-height: 23.12px;
    color: #647196;
  }
`;

const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 10000px;
  background-color: #f49f85;
`;
