import styled from "styled-components";
import arrowUp from "/assets/shared/icon-arrow-up.svg";
import arrowUpWhite from "/assets/shared/icon-white-arrow-up.svg";
import commentIcon from "/assets/shared/icon-comments.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useSuggestion } from "../context/SuggestionContext";

function SuggestionItem({ suggestion }) {
  const { id: paramsId } = useParams();
  const { upvotes, title, description, category, comments, id } = suggestion;
  const {
    suggestions,
    setSuggestions,
    render,
    setRender,
    upvotedList,
    setUpvotedList,
    onlyStatusSuggestion,
    setOnlyStatusSuggestion,
  } = useSuggestion();
  const isUpVoted = upvotedList.includes(String(id));

  const navigate = useNavigate();

  const commentsCount = comments ? comments.length : 0;

  function handleNavigate() {
    if (paramsId) return;
    navigate(`${id}/comments`);
  }

  function handleUpVote(e) {
    e.stopPropagation();
    if (!upvotedList.includes(String(id))) {
      setUpvotedList((list) => [...list, String(id)]);
      const readIndex = suggestions.findIndex((sug) => sug.id === id);
      // suggestions[readIndex].upvotes += 1;
      const onlyStatusSuggestionIndex = onlyStatusSuggestion.findIndex(
        (sug) => sug.id === id
      );
      onlyStatusSuggestion[onlyStatusSuggestionIndex].upvotes += 1;
      setSuggestions([...suggestions]);
      setOnlyStatusSuggestion([...onlyStatusSuggestion]);
    } else {
      setUpvotedList((list) => list.filter((item) => item !== String(id)));
      const readIndex = suggestions.findIndex((sug) => sug.id === id);
      const onlyStatusSuggestionIndex = onlyStatusSuggestion.findIndex(
        (sug) => sug.id === id
      );
      // suggestions[readIndex].upvotes -= 1;
      onlyStatusSuggestion[onlyStatusSuggestionIndex].upvotes -= 1;

      setSuggestions([...suggestions]);
      setOnlyStatusSuggestion([...onlyStatusSuggestion]);
    }
    setRender(!render);
    // setIsUpVoted(!isUpVoted);
  }
  return (
    <StyledSuggestionsItem onClick={handleNavigate}>
      <VoteAndContent>
        <Upvote onClick={handleUpVote} isupvoted={isUpVoted.toString()}>
          {!isUpVoted ? (
            <img src={arrowUp} alt="arrow-up-icon" />
          ) : (
            <img src={arrowUpWhite} alt="arrow-up-icon" />
          )}
          <span>{upvotes}</span>
        </Upvote>
        <SuggestionContent>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Category>{category}</Category>
        </SuggestionContent>
      </VoteAndContent>
      <SuggestionComments length={commentsCount}>
        <img src={commentIcon} alt="comment-icon" />
        <span>{commentsCount}</span>
      </SuggestionComments>
    </StyledSuggestionsItem>
  );
}

export default SuggestionItem;

const StyledSuggestionsItem = styled.div`
  padding: 2.8rem 3.2rem;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    & h2 {
      color: #4661e6;
    }
  }
`;

const VoteAndContent = styled.div`
  display: flex;
  gap: 4rem;
`;

const Upvote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  background-color: ${(props) =>
    props.isupvoted === "true" ? "#4661E6" : "#f2f4fe"};
  padding: 1.4rem 0.9rem 0.8rem 0.9rem;
  border-radius: 10px;
  height: 5.3rem;
  align-self: flex-start;
  transition: all 0.3s;
  width: 4rem;

  & > span {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.879rem;
    letter-spacing: -0.1805555522441864px;
    color: ${(props) => (props.isupvoted === "true" ? "#fff" : "#3a4374")};
  }

  &:hover {
    background-color: ${(props) =>
      props.isupvoted === "false" ? "#cfd7ff" : ""};
    cursor: pointer;
  }
`;

const SuggestionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.601rem;
  letter-spacing: -0.25px;
  color: #3a4374;
  word-break: break-all;
`;

const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.312rem;
  color: #647196;
  margin-top: 0.4rem;
  word-break: break-all;
`;

const Category = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.879rem;
  color: #4661e6;
  padding: 0.5rem 1.6rem 0.6rem 1.6rem;
  background-color: #f2f4ff;
  border-radius: 1rem;
  margin-top: 1.2rem;
`;

const SuggestionComments = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  & > span {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.312rem;
    letter-spacing: -0.2222222238779068px;
    color: #3a4374;
    opacity: ${(props) => props.length === 0 && "50%"};
  }
`;
