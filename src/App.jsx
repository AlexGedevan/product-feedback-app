import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./Globals";
import AppLayout from "./AppLayout";
import Suggestions from "./pages/Suggestions";

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
