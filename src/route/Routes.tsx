import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../NotFound";
import HomePage from "../modules/home";
import LoginPage from "../modules/auth";

const createRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
