import styled from "styled-components";

function MobileButton({
  children,
  bgcolor = "#AD1FEA",
  hoverbgcolor = "#C75AF6",
  onClick,
}) {
  return (
    <StyledButton
      bgcolor={bgcolor}
      hoverbgcolor={hoverbgcolor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 1.05rem 1.7rem 1.05rem 1.6rem;
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
  color: #f2f4fe;
  border: none;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 1.879rem;
  transition: all 0.3s;
  font-family: inherit;

  &:hover {
    background-color: ${(props) => props.hoverbgcolor};
  }
`;

export default MobileButton;
