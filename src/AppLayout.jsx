import styled from "styled-components";
import FeedbackBoard from "./ui/FeedbackBoard";
import SuggestionsHeader from "./ui/SuggestionsHeader";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <StyledAppLayout>
      <FeedbackBoard />
      <main>
        <SuggestionsHeader />
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

export default AppLayout;

const StyledAppLayout = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 3rem;  */
  & > main {
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
`;
