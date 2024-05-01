import styled from "styled-components";

function BoardCategories() {
  return (
    <StyledBoardCategories>
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
    </StyledBoardCategories>
  );
}

export default BoardCategories;

const StyledBoardCategories = styled.div`
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
