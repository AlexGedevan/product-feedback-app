import styled from "styled-components";

function FrontendMentor() {
  return (
    <StyledFrontendMentor>
      <h2>Frontend Mentor</h2>
      <p>Feedback Board</p>
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
  border-radius: 10px;
  padding: 6.2rem 7.8rem 2.4rem 2.4rem;

  & > h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.89rem;
    letter-spacing: -0.25px;
    color: #ffffff;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.168rem;
    color: #ffffff;
    opacity: 75%;
  }
`;
