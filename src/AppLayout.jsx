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
  width: 100%;
  /* gap: 3rem;  */
  max-height: ${(props) => props.ismenuopen === "true" && "100vh"};
  overflow: ${(props) => props.ismenuopen === "true" && "hidden"};
  & > main {
    /* max-width: 50rem; */
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }

  @media screen and (min-width: 768px) {
    & > main {
      width: 68.9rem;
    }
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 3rem;
    & > main {
      width: 82.5rem;
    }
  }
`;
