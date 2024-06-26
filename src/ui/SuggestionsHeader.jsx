import styled from "styled-components";
import iconSuggestions from "/assets/suggestions/icon-suggestions.svg";
import CheckIcon from "./CheckIcon";
import arrowUp from "/assets/shared/icon-white-arrow-up.svg";
import arrowDown from "/assets/shared/icon-white-arrow-down.svg";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useSuggestion } from "../context/SuggestionContext";
import { useNavigate } from "react-router-dom";
import MobileButton from "./MobileButton";

function SuggestionsHeader() {
  const [filter, setFilter] = useState("Most Upvotes");
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { setOnlyStatusSuggestion } = useSuggestion();
  const { render } = useSuggestion();
  const navigate = useNavigate();

  useEffect(() => {
    switch (filter) {
      case "Most Upvotes":
        setOnlyStatusSuggestion((prevSuggestions) =>
          [...prevSuggestions].sort((a, b) => b.upvotes - a.upvotes)
        );
        return;
      case "Least Upvotes":
        setOnlyStatusSuggestion((prevSuggestions) =>
          [...prevSuggestions].sort((a, b) => a.upvotes - b.upvotes)
        );
        return;
      case "Most Comments":
        setOnlyStatusSuggestion((prevSuggestions) =>
          [...prevSuggestions].sort(
            (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0)
          )
        );
        return;
      case "Least Comments":
        setOnlyStatusSuggestion((prevSuggestions) =>
          [...prevSuggestions].sort(
            (a, b) => (a.comments?.length || 0) - (b.comments?.length || 0)
          )
        );
        return;
      default:
        return;
    }
  }, [filter, setOnlyStatusSuggestion, render]);

  const { suggestionsByCategory } = useSuggestion();

  return (
    <StyledSuggestionsHeader>
      <FilterSuggestions>
        <SuggestionsQuantity>
          <img src={iconSuggestions} alt="icon suggestions" />
          <p>{suggestionsByCategory.length} Suggestions</p>
        </SuggestionsQuantity>
        <SortBy onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
          <p>
            Sort by : <span>{filter}</span>
          </p>
          {!isOptionsOpen ? (
            <img src={arrowDown} alt="arrow-down-icon" />
          ) : (
            <img src={arrowUp} alt="arrow-up-icon" />
          )}
        </SortBy>
      </FilterSuggestions>

      <Button
        bgcolor="#AD1FEA"
        hoverbgcolor="#C75AF6"
        onClick={() => navigate("/createFeedback")}
      >
        + Add Feedback
      </Button>
      <MobileButton
        bgcolor="#AD1FEA"
        hoverbgcolor="#C75AF6"
        onClick={() => navigate("/createFeedback")}
      >
        + Add Feedback
      </MobileButton>

      {isOptionsOpen && (
        <FilterOptions>
          <div>
            <Option
              onClick={() => {
                setFilter("Most Upvotes");
                setIsOptionsOpen(false);
              }}
            >
              Most Upvotes
            </Option>
            {filter === "Most Upvotes" && <CheckIcon />}
          </div>
          <div>
            <Option
              onClick={() => {
                setFilter("Least Upvotes");
                setIsOptionsOpen(false);
              }}
            >
              Least Upvotes
            </Option>
            {filter === "Least Upvotes" && <CheckIcon />}
          </div>
          <div>
            <Option
              onClick={() => {
                setFilter("Most Comments");
                setIsOptionsOpen(false);
              }}
            >
              Most Comments
            </Option>
            {filter === "Most Comments" && <CheckIcon />}
          </div>
          <div>
            <Option
              onClick={() => {
                setFilter("Least Comments");
                setIsOptionsOpen(false);
              }}
            >
              Least Comments
            </Option>
            {filter === "Least Comments" && <CheckIcon />}
          </div>
        </FilterOptions>
      )}
    </StyledSuggestionsHeader>
  );
}

export default SuggestionsHeader;

const StyledSuggestionsHeader = styled.div`
  position: relative;
  width: 100%;
  background-color: #373f68;
  padding: 0.8rem 2.4rem;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 1.4rem 1.2rem 1.4rem 2.4rem;
    border-radius: 1rem;
    margin-top: 4rem;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

const FilterSuggestions = styled.div`
  /* position: relative; */
  display: flex;
  align-items: center;
  gap: 3.8rem;
`;

const SuggestionsQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  display: none;

  & > p {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.601rem;
    letter-spacing: -0.25px;
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const SortBy = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  cursor: pointer;

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
  top: 6.8rem;
  left: 3rem;
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

  @media screen and (min-width: 768px) {
    top: 8.8rem;
    left: 22rem;
  }
`;

const Option = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.312rem;
  color: #647196;
  cursor: pointer;

  &:hover {
    color: #ad1fea;
  }
`;
