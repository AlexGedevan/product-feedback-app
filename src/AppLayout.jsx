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

  & > main {
    width: 82.5rem;
    display: flex;
    flex-direction: column;
  }
`;
