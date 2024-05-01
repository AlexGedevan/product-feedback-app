import styled from "styled-components";
import FeedbackBoard from "./ui/FeedbackBoard";
import SuggestionsHeader from "./ui/SuggestionsHeader";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <StyledAppLayout>
      <FeedbackBoard />
      <div>
        <SuggestionsHeader />
        <Outlet />
      </div>
    </StyledAppLayout>
  );
}

export default AppLayout;

const StyledAppLayout = styled.div`
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
  }
`;
