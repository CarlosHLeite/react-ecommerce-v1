import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomeLayout, TipCalculator, About, Landing } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tip-calculator",
        element: <TipCalculator />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
