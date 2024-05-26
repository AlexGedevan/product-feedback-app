import styled from "styled-components";
import BoardCategories from "./BoardCategories";
import RoadmapPreview from "./RoadmapPreview";

function HamburgerMenuModal() {
  return (
    <OutModalContainer>
      <StyledHamburgerMenuModal>
        <BoardCategories />
        <RoadmapPreview />
      </StyledHamburgerMenuModal>
    </OutModalContainer>
  );
}

export default HamburgerMenuModal;

const OutModalContainer = styled.div`
  position: absolute;
  top: 7.1rem;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledHamburgerMenuModal = styled.div`
  width: 27.1rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: absolute;
  /* top: 7.1rem; */
  right: 0;
  height: calc(100vh - 7.1rem);
  background-color: #f7f8fd;
  padding-top: 2.4rem;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
`;
