import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./Globals";
import AppLayout from "./AppLayout";
import Suggestions from "./pages/Suggestions";
import SuggestionComments from "./pages/SuggestionComments";

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
