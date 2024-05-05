import styled from "styled-components";
import checkIcon from "/assets/shared/icon-check.svg";

function CheckIcon() {
  return <StyledCheckIcon src={checkIcon} />;
}

export default CheckIcon;

const StyledCheckIcon = styled.img`
  width: 1.103rem;
  height: 0.75rem;
`;
