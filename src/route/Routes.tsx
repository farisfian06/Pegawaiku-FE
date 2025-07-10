import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../NotFound";
import HomePage from "../modules/home";

const createRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const Routes = () => {
  return <RouterProvider router={createRoutes} />;
};

export default Routes;
