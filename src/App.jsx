import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./Globals";
import AppLayout from "./AppLayout";
import Suggestions from "./pages/Suggestions";
import SuggestionComments from "./pages/SuggestionComments";
import CreateFeedback from "./pages/CreateFeedback";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        element: <Suggestions />,
        path: "/",
      },
    ],
  },
  {
    element: <SuggestionComments />,
    path: "/:id/comments",
  },
  {
    element: <CreateFeedback />,
    path: "/createFeedback",
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
