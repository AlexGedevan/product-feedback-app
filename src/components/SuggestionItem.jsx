import styled from "styled-components";
import arrowUp from "/assets/shared/icon-arrow-up.svg";
import commentIcon from "/assets/shared/icon-comments.svg";
import { Link } from "react-router-dom";

function SuggestionItem({ suggestion }) {
  const { upvotes, title, description, category, comments, id } = suggestion;

  const commentsCount = comments ? comments.length : 0;
  return (
    <Link to={`/${id}/comments/`}>
      <StyledSuggestionsItem>
        <VoteAndContent>
          <Upvote>
            <img src={arrowUp} alt="arrow-up-icon" />
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
    </Link>
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
  background-color: #f2f4fe;
  padding: 1.4rem 0.9rem 0.8rem 0.9rem;
  border-radius: 10px;
  height: 5.3rem;
  align-self: flex-start;
  transition: all 0.3s;

  & > span {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.879rem;
    letter-spacing: -0.1805555522441864px;
    color: #3a4374;
  }

  &:hover {
    background: #cfd7ff;
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
`;

const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.312rem;
  color: #647196;
  margin-top: 0.4rem;
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
