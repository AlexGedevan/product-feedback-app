import styled from "styled-components";
import arrowUp from "/assets/shared/icon-arrow-up.svg";
import arrowDown from "/assets/shared/icon-arrow-down.svg";
import Check from "/assets/shared/icon-check.svg";

function FeedbackCategory({
  checked,
  setChecked,
  isSelecting,
  setIsSelecting,
}) {
  return (
    <StyledFeedbackCategory>
      <h2>Category</h2>
      <p>Choose a category for your feedback</p>
      <Select>
        <ChoosenCategory onClick={() => setIsSelecting(!isSelecting)}>
          <p>{checked}</p>
          <img src={isSelecting ? arrowUp : arrowDown} alt="arrow up" />
        </ChoosenCategory>
        {isSelecting && (
          <AbsoluteOptionsDiv>
            <OptionDiv
              onClick={() => {
                setChecked("Feature");
                setIsSelecting(false);
              }}
            >
              <option>Feature</option>
              {checked === "Feature" && <img src={Check} alt="check icon" />}
            </OptionDiv>
            <OptionDiv
              onClick={() => {
                setChecked("UI");
                setIsSelecting(false);
              }}
            >
              <option>UI</option>
              {checked === "UI" && <img src={Check} alt="check icon" />}
            </OptionDiv>
            <OptionDiv
              onClick={() => {
                setChecked("UX");
                setIsSelecting(false);
              }}
            >
              <option>UX</option>
              {checked === "UX" && <img src={Check} alt="check icon" />}
            </OptionDiv>
            <OptionDiv
              onClick={() => {
                setChecked("Enhancement");
                setIsSelecting(false);
              }}
            >
              <option>Enhancement</option>
              {checked === "Enhancement" && (
                <img src={Check} alt="check icon" />
              )}
            </OptionDiv>
            <OptionDiv
              onClick={() => {
                setChecked("Bug");
                setIsSelecting(false);
              }}
            >
              <option>Bug</option>
              {checked === "Bug" && <img src={Check} alt="check icon" />}
            </OptionDiv>
          </AbsoluteOptionsDiv>
        )}
      </Select>
    </StyledFeedbackCategory>
  );
}

export default FeedbackCategory;

const StyledFeedbackCategory = styled.div`
  & > h2 {
    /* font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.023rem;
    letter-spacing: -0.1944444477558136px;
    color: #3a4374; */
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.879rem;
    letter-spacing: -0.1805555522441864px;
    color: #3a4374;
  }
  & > p {
    /* font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.023rem;
    color: #647196; */
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 1.879rem;
    color: #647196;
  }
  @media screen and (min-width: 768px) {
    & > h2 {
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2.023rem;
      letter-spacing: -0.1944444477558136px;
    }
    & > p {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.023rem;
    }
  }
`;

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

const ChoosenCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  & > p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.168rem;
    color: #3a4374;
  }
`;

const AbsoluteOptionsDiv = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35);
  border-radius: 10px;
  left: 0;
  top: 5.517rem;
`;

const Select = styled.div`
  position: relative;
  padding: 1.2rem 2.2rem 1.3rem 2.4rem;
  width: 100%;
  border-radius: 5px;
  margin-top: 1.6rem;
  background: #f7f8fd;
  border: none;
  & > option {
    font-size: 15px;
    font-weight: 400;
    line-height: 21.68px;
    text-align: left;
    color: #3a4374;
  }

  &:focus {
    outline: 1px solid #4661e6;
  }
`;
