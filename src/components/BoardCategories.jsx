import { useEffect } from "react";
import styled from "styled-components";
import { useSuggestion } from "../context/SuggestionContext";

function BoardCategories() {
  const {
    onlyStatusSuggestion,
    setSuggestionsByCategory,
    activeCategory,
    setActiveCategory,
  } = useSuggestion();

  useEffect(() => {
    if (activeCategory === "all") {
      setSuggestionsByCategory([...onlyStatusSuggestion]);
    } else {
      const filteredSuggestions = onlyStatusSuggestion.filter(
        (suggestion) => suggestion.category === activeCategory
      );

      setSuggestionsByCategory(filteredSuggestions);
    }
  }, [activeCategory, onlyStatusSuggestion, setSuggestionsByCategory]);

  return (
    <StyledBoardCategories>
      <div className="first-row">
        <p
          className={activeCategory === "all" ? "active" : ""}
          onClick={() => setActiveCategory("all")}
        >
          All
        </p>
        <p
          className={activeCategory === "ui" ? "active" : ""}
          onClick={() => setActiveCategory("ui")}
        >
          UI
        </p>
        <p
          className={activeCategory === "ux" ? "active" : ""}
          onClick={() => setActiveCategory("ux")}
        >
          UX
        </p>
      </div>
      <div className="second-row">
        <p
          className={activeCategory === "enhancement" ? "active" : ""}
          onClick={() => setActiveCategory("enhancement")}
        >
          Enhancement
        </p>
        <p
          className={activeCategory === "bug" ? "active" : ""}
          onClick={() => setActiveCategory("bug")}
        >
          Bug
        </p>
      </div>
      <div className="third-row">
        <p
          className={activeCategory === "feature" ? "active" : ""}
          onClick={() => setActiveCategory("feature")}
        >
          Feature
        </p>
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
      cursor: pointer;
      transition: all 0.3s;
    }

    & > p:hover {
      background-color: #cfd7ff;
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

  @media screen and (min-width: 768px) {
    padding: 2.4rem 1.8rem 3.6rem 2.4rem;
  }
`;
