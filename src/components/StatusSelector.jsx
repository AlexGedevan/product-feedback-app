import styled from "styled-components";
import Check from "/assets/shared/icon-check.svg";

function StatusSelector({
  isSelectingStatus,
  setStatusChecked,
  setIsSelectingStatus,
  statusChecked,
}) {
  return (
    <StyledStatusSelector>
      {isSelectingStatus && (
        <AbsoluteStatusDiv>
          <OptionDiv
            onClick={() => {
              setStatusChecked("Suggestion");
              setIsSelectingStatus(false);
            }}
          >
            <option>Suggestion</option>
            {statusChecked === "Suggestion" && (
              <img src={Check} alt="check icon" />
            )}
          </OptionDiv>
          <OptionDiv
            onClick={() => {
              setStatusChecked("Planned");
              setIsSelectingStatus(false);
            }}
          >
            <option>Planned</option>
            {statusChecked === "Planned" && (
              <img src={Check} alt="check icon" />
            )}
          </OptionDiv>
          <OptionDiv
            onClick={() => {
              setStatusChecked("In-Progress");
              setIsSelectingStatus(false);
            }}
          >
            <option>In-Progress</option>
            {statusChecked === "In-Progress" && (
              <img src={Check} alt="check icon" />
            )}
          </OptionDiv>
          <OptionDiv
            onClick={() => {
              setStatusChecked("Live");
              setIsSelectingStatus(false);
            }}
          >
            <option>Live</option>
            {statusChecked === "Live" && <img src={Check} alt="check icon" />}
          </OptionDiv>
        </AbsoluteStatusDiv>
      )}
    </StyledStatusSelector>
  );
}

const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1.2rem 2.4rem 1.3rem 2.4rem;
  & > option {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.312rem;
    color: #647196;
  }
`;

const AbsoluteStatusDiv = styled.div`
  z-index: 100;
  position: absolute;
  top: 6.4rem;
  background-color: white;
  width: 100%;
  border-radius: 5px;
`;

const StyledStatusSelector = styled.div`
  position: relative;
`;

export default StatusSelector;
