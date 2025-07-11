import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../NotFound";
import HomePage from "../modules/home";
import LoginPage from "../modules/auth";
import ProtectedRoute from "./ProtectedRoute";
import PageLayout from "../layout/PageLayout";
import ProfilePage from "../modules/profile";

const createRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <PageLayout>
          <HomePage />
        </PageLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <PageLayout>
          <ProfilePage />
        </PageLayout>
      </ProtectedRoute>
    ),
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
