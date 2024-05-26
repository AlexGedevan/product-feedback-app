import styled from "styled-components";

function MobileChoosenStatus({
  currentStatus,
  currentStatusText,
  currentTotalLength,
}) {
  return (
    <StyledMobileChoosenStatus>
      <h2>
        {currentStatus} ({currentTotalLength})
      </h2>
      <p>{currentStatusText}</p>
    </StyledMobileChoosenStatus>
  );
}

export default MobileChoosenStatus;

const StyledMobileChoosenStatus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding-top: 2.4rem;
  padding-left: 2.4rem;

  & > h2 {
    color: #3a4374;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  }

  & > p {
    color: #647196;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
