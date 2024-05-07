import { Link } from "react-router-dom";
import arrowLeft from "/assets/shared/icon-arrow-left.svg";
import styled from "styled-components";

function GoBackComponent() {
  return (
    <StyledGoBackComponent>
      <Link to={-1}>
        <img src={arrowLeft} alt="arrow-left" />
        <GoBack>Go Back</GoBack>
      </Link>
    </StyledGoBackComponent>
  );
}

const StyledGoBackComponent = styled.div`
  & > a {
    display: flex;
    align-items: center;
    gap: 1.567rem;
  }
`;

const GoBack = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.023rem;
  text-align: left;
  color: #647196;
`;

export default GoBackComponent;
