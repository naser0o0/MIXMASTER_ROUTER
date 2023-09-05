import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <div>
            <Landing />
          </div>
        ),
      },
      {
        path: "/cocktail",
        element: (
          <div>
            <Cocktail />
          </div>
        ),
      },
      {
        path: "/newsletter",
        element: (
          <div>
            <Newsletter />
          </div>
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "company",
            element: <h2>our compony</h2>,
          },
          {
            path: "person",
            element: <h2>Naser Ahmadi</h2>,
          },
        ],
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
