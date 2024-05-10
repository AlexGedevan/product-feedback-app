import styled from "styled-components";

function DesignMark() {
  return <StyledDesignMark></StyledDesignMark>;
}

export default DesignMark;

const StyledDesignMark = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 50%;
  margin-top: -8rem; // this shoud not be here. create  parent div where u can import this component and give this style
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
`;
