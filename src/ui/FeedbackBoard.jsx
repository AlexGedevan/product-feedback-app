import styled from "styled-components";

function FeedbackBoard() {
  return (
    <StyledFeedbackBoard>
      <FrontendMentor>
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </FrontendMentor>
      <BoardCategories>
        <div className="first-row">
          <p className="active">All</p>
          <p>UI</p>
          <p>UX</p>
        </div>
        <div className="second-row">
          <p>Enhancement</p>
          <p>Bug</p>
        </div>
        <div className="third-row">
          <p>Feature</p>
        </div>
      </BoardCategories>
      <RoadMap>
        <RoadmapView>
          <h2>Roadmap</h2>
          <p>View</p>
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
      </RoadMap>
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

const Circle = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 10000px;
  background-color: #f49f85;
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

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
  }
`;

const FrontendMentor = styled.div`
  background-image: radial-gradient(
    circle at 104% -10%,
    #e84d70,
    #a337f6 56%,
    #28a7ed 106%
  );
  border-radius: 10px;
  padding: 6.2rem 7.8rem 2.4rem 2.4rem;

  & > h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.89rem;
    letter-spacing: -0.25px;
    color: #ffffff;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.168rem;
    color: #ffffff;
    opacity: 75%;
  }
`;

const BoardCategories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2.4rem 5rem 2.4rem 2.4rem;
  background-color: white;
  border-radius: 10px;
  & > div {
    display: flex;
    & > p {
      font-size: 1.3rem;
      font-weight: 600;
      line-height: 1.879rem;
      padding: 0.5rem 1.6rem 0.6rem 1.6rem;
      border-radius: 1rem;
      background-color: #f2f4ff;
      color: #4661e6;
    }
    & > .active {
      background-color: #4661e6;
      color: white;
    }
  }

  & > .first-row {
    gap: 0.8rem;
  }
  & > .second-row {
    gap: 1.4rem;
  }
`;

const RoadMap = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.9rem 2.4rem 2.4rem 2.4rem;
`;
