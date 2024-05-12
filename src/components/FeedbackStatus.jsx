import styled from "styled-components";
import Check from "/assets/shared/icon-check.svg";
import arrowUp from "/assets/shared/icon-arrow-up.svg";
import arrowDown from "/assets/shared/icon-arrow-down.svg";

function FeedbackStatus({
  setIsSelectingStatus,
  statusChecked,
  isSelectingStatus,
  setStatusChecked,
}) {
  return (
    <StledFeedbackStatus>
      <FeedbackStatusHeadline>
        <h1>Update Status</h1>
        <p>Check feedback state</p>
      </FeedbackStatusHeadline>
      <ChoosenStatus onClick={() => setIsSelectingStatus(!isSelectingStatus)}>
        <p>{statusChecked}</p>
        <img src={isSelectingStatus ? arrowUp : arrowDown} alt="arrow up" />
      </ChoosenStatus>
      <StatusSelector>
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
      </StatusSelector>
    </StledFeedbackStatus>
  );
}

export default FeedbackStatus;

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

const StatusSelector = styled.div`
  position: relative;
`;

const FeedbackStatusHeadline = styled.div`
  & > h1 {
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.023rem;
    letter-spacing: -0.1944444477558136px;
    color: #3a4374;
  }
  & > p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.023rem;
    color: #647196;
  }
`;

const ChoosenStatus = styled.div`
  margin-top: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f7f8fd;
  & > p {
    font-size: 15px;
    font-weight: 400;
    line-height: 21.68px;
    color: #3a4374;
  }
  padding: 1.3rem 2.4rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  z-index: -1;
`;

const StledFeedbackStatus = styled.div`
  margin-top: 2.4rem;
  & > p {
    background-color: #f7f8fd;
    font-size: 15px;
    font-weight: 400;
    line-height: 21.68px;
    text-align: left;
    color: #3a4374;
    padding: 1.3rem 2.4rem;
    border-radius: 5px;
  }
`;
