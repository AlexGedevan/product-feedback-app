import styled from "styled-components";

function DesignMark({ image }) {
  return (
    <StyledDesignMark>
      <img src={image} alt="design-mark" />
    </StyledDesignMark>
  );
}

export default DesignMark;

const StyledDesignMark = styled.div`
  /* desktop:

   margin-top: -8rem;
  & > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  } */
  margin-top: -7.2rem;
  & > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  @media screen and (min-width: 768px) {
    & > img {
      width: 5.6rem;
      height: 5.6rem;
    }
  }
`;
