import styled from "styled-components";
import FeedbackBoard from "./ui/FeedbackBoard";
import SuggestionsHeader from "./ui/SuggestionsHeader";
import { Outlet } from "react-router-dom";
import HamburgerMenuModal from "./components/HamburgerMenuModal";
import { useSuggestion } from "./context/SuggestionContext";

function AppLayout() {
  const { isMenuOpen } = useSuggestion();

  return (
    <StyledAppLayout ismenuopen={isMenuOpen.toString()}>
      <FeedbackBoard />
      <main>
        <SuggestionsHeader />
        <Outlet />
      </main>
      {isMenuOpen && <HamburgerMenuModal />}
    </StyledAppLayout>
  );
}

export default AppLayout;

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 3rem;  */
  max-height: ${(props) => props.ismenuopen === "true" && "100vh"};
  overflow: ${(props) => props.ismenuopen === "true" && "hidden"};
  & > main {
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
