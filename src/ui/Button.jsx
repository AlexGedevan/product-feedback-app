import styled from "styled-components";

function Button({ children, bgcolor = "#AD1FEA", hoverbgcolor = "blue" }) {
  return (
    <StyledButton bgcolor={bgcolor} hoverbgcolor={hoverbgcolor}>
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button`
  padding: 1.25rem 2.5rem 1.15rem 2.4rem;
  background-color: ${(props) => props.bgcolor};
  border-radius: 10px;
  color: #f2f4fe;
  border: none;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 2.023rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverbgcolor};
  }
`;
