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
  margin-top: -8rem;
  & > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }
`;
