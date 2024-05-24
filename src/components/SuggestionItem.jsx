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
      suggestions[readIndex].upvotes += 1;
      setSuggestions([...suggestions]);
    } else {
      setUpvotedList((list) => list.filter((item) => item !== String(id)));
      const readIndex = suggestions.findIndex((sug) => sug.id === id);
      suggestions[readIndex].upvotes -= 1;
      setSuggestions([...suggestions]);
    }
    setRender(!render);
    // setIsUpVoted(!isUpVoted);
  }
  return (
    <StyledSuggestionsItem onClick={handleNavigate}>
      <VoteAndContent>
        <SuggestionContent>
          <Title>{title}</Title>
          <Text>{description}</Text>
          <Category>{category}</Category>
        </SuggestionContent>

        <Upvote onClick={handleUpVote} isupvoted={isUpVoted.toString()}>
          {!isUpVoted ? (
            <img src={arrowUp} alt="arrow-up-icon" />
          ) : (
            <img src={arrowUpWhite} alt="arrow-up-icon" />
          )}
          <span>{upvotes}</span>
        </Upvote>
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
  padding: 2.4rem;
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

  @media screen and (min-width: 1440px) {
    padding: 2.8rem 3.2rem;
  }
`;

const VoteAndContent = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 4rem; */
  gap: 0.9rem;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 4rem;
  }
`;

const Upvote = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  background-color: ${(props) =>
    props.isupvoted === "true" ? "#4661E6" : "#f2f4fe"};

  padding-top: 0.6rem;
  padding-bottom: 0.7rem;
  border-radius: 10px;

  width: 6.9rem;
  height: 3.2rem;
  align-self: flex-start;
  transition: all 0.3s;

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

  @media screen and (min-width: 768px) {
    width: 4rem;
    height: 5.3rem;
    padding: 1.4rem 0.9rem 0.8rem 0.9rem;
    flex-direction: column;
  }
`;

const SuggestionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h2`
  /* font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.601rem;
  letter-spacing: -0.25px; */
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 18.79px;
  letter-spacing: -0.1805555522441864px;
  text-align: left;

  color: #3a4374;
  word-break: break-all;

  @media screen and (min-width: 768px) {
    color: #3a4374;
    font-size: 1.8rem;
    font-weight: 700;
  }
`;

const Text = styled.p`
  font-size: 1.3rem;
  line-height: 1.879rem;
  color: #647196;
  margin-top: 0.4rem;
  word-break: break-all;

  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.312rem;
  }
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
  align-self: flex-end;

  & > span {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.312rem;
    letter-spacing: -0.2222222238779068px;
    color: #3a4374;
    opacity: ${(props) => props.length === 0 && "50%"};
  }

  @media screen and (min-width: 768px) {
    align-self: center;
  }
`;
