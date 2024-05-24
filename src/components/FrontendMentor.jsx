import styled from "styled-components";
import hambergermenuImg from "/assets/shared/mobile/icon-hamburger.svg";
import closeMenu from "/assets/shared/mobile/icon-close.svg";
import { useSuggestion } from "../context/SuggestionContext";

function FrontendMentor() {
  const { setIsMenuOpen, isMenuOpen } = useSuggestion();

  return (
    <StyledFrontendMentor>
      <div>
        <h2>Frontend Mentor</h2>
        <p>Feedback Board</p>
      </div>
      {isMenuOpen ? (
        <img
          src={closeMenu}
          alt="close-menu"
          onClick={() => setIsMenuOpen(false)}
        />
      ) : (
        <img
          src={hambergermenuImg}
          alt="hamburger-menu"
          onClick={() => setIsMenuOpen(true)}
        />
      )}
    </StyledFrontendMentor>
  );
}

export default FrontendMentor;

const StyledFrontendMentor = styled.div`
  background-image: radial-gradient(
    circle at 104% -10%,
    #e84d70,
    #a337f6 56%,
    #28a7ed 106%
  );
  /* border-radius: 10px; */
  /* padding: 6.2rem 7.8rem 2.4rem 2.4rem; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2.4rem 1.5rem;
  & > div {
    & > h2 {
      /* font-size: 2rem;
      font-weight: 700;
      line-height: 2.89rem;
      letter-spacing: -0.25px; */
      color: #ffffff;
      font-family: Jost;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2.168rem;
      letter-spacing: -0.1875px;
    }

    & > p {
      /* font-size: 1.5rem;
      font-weight: 500;
      line-height: 2.168rem; */
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 1.879rem;
      text-align: left;
      color: #ffffff;
      opacity: 75%;
    }
  }

  & > img {
    width: 2rem;
    height: 1.7rem;
  }
`;
