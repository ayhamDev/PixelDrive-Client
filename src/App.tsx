import AppSetup from "@/pages/setup/AppSetup";
import { Home } from "lucide-react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Layouts
import AuthLayout from "./layout/AuthLayout";
import DashboardLayout from "./layout/DashboardLayout";
import OnBoardingLayout from "./layout/OnBoardingLayout";

// Pages
import Auth from "./pages/auth/Auth";
import HomePage from "./pages/main/Home";

const router = createBrowserRouter([
  // onboarding setup

  {
    path: "/setup",
    element: <OnBoardingLayout />,
    children: [
      {
        path: "/setup",
        element: <AppSetup step={1} />,
      },
      {
        path: "/setup/create-admin",
        element: <AppSetup step={2} />,
      },

      {
        path: "/setup/profile-picture",
        element: <AppSetup step={3} />,
      },
      {
        path: "/setup/storage",
        element: <AppSetup step={4} />,
      },
      {
        path: "/setup/connect-storage",
        element: <AppSetup step={5} />,
      },
    ],
  },

  // login
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/auth",
        element: <Navigate to={"/auth/login"} replace={true} />,
      },
      {
        path: "/auth/login",
        element: <Auth render="login" />,
      },
      {
        path: "/auth/request-reset-password",
        element: <Auth render={"request-reset-password"} />,
      },
      {
        path: "/auth/reset-password",
        element: <Auth render={"reset-password"} />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  // main app
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
