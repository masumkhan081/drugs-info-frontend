import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.tsx";
import Profile from "../pages/Profile.jsx";
import Landing from "../pages/Auth.jsx";
import Layout from "../pages/Layout.js";
import OTP from "../components/OTP.jsx";
import Reset from "../components/Reset.jsx";
import Recovery from "../components/Recovery.jsx";
import About from "../pages/About.jsx";
import Auth from "../pages/Auth.jsx";
import AuthForms from "../components/AuthForms.jsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "auth/",
        element: <Auth />,
        children: [
          {
            path: "",
            element: <AuthForms />,
          },

          {
            path: "account-recovery",
            element: <Recovery />,
          },
          {
            path: "reset-password",
            element: <Reset />,
          },
          {
            path: "verify-otp",
            element: <OTP />,
          },
          {
            path: "secure",
            element: (
              <ProtectedRoute pass={false}>
                <Profile />
              </ProtectedRoute>
            ),
          },
        ],
      },
    ],
  },
]);
