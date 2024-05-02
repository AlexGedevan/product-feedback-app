import styled from "styled-components";
import iconSuggestions from "/assets/suggestions/icon-suggestions.svg";
import CheckIcon from "./CheckIcon";
import arrowUp from "/assets/shared/icon-arrow-up.svg";
import arrowDown from "/assets/shared/icon-arrow-down.svg";

function SuggestionsHeader() {
  return (
    <StyledSuggestionsHeader>
      <FilterSuggestions>
        <SuggestionsQuantity>
          <img src={iconSuggestions} alt="icon suggestions" />
          <p>6 Suggestions</p>
        </SuggestionsQuantity>
        <SortBy>
          <p>
            Sort by : <span>Most Upvotes</span>
          </p>
          <img src={arrowDown} alt="arrow down icon" />
        </SortBy>
      </FilterSuggestions>

      <FilterOptions>
        <div>
          <Option>Most Upvotes</Option>
          <CheckIcon />
        </div>
        <div>
          <Option>Least Upvotes</Option>
          <CheckIcon />
        </div>
        <div>
          <Option>Most Comments</Option>
          <CheckIcon />
        </div>
        <div>
          <Option>Least Comments</Option>
          <CheckIcon />
        </div>
      </FilterOptions>
    </StyledSuggestionsHeader>
  );
}

export default SuggestionsHeader;

const StyledSuggestionsHeader = styled.div`
  position: relative;
  width: 100%;
  background-color: #373f68;
  border-radius: 10px;
  padding: 1.4rem 1.6rem 1.4rem 2.4rem;
`;

const FilterSuggestions = styled.div`
  display: flex;
  align-items: center;
  gap: 3.8rem;
`;

const SuggestionsQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > p {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.601rem;
    letter-spacing: -0.25px;
    color: #ffffff;
  }
`;

const SortBy = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  & > p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.023rem;
    color: #f2f4fe;

    & > span {
      font-weight: 700;
    }
  }

  & > img {
    color: white;
  }
`;

const FilterOptions = styled.div`
  width: 25.5rem;
  background: #fff;
  position: absolute;
  top: 8.8rem;
  left: 19.6rem;
  box-shadow: 0 10px 40px -7px rgba(55, 63, 104, 0.35);
  border-radius: 1rem;
  overflow: hidden;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem 2.4rem;
    border-bottom: 1px solid #3a437434;
  }
`;

const Option = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.312rem;
  color: #647196;
`;
