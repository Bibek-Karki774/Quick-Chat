import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import PageNotFound from "../pages/PageNotFound";
import PublicRoute from "./PublicRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          { path: "profile", element: <Profile /> },
        ],
      },
      {
        element: <PublicRoute />,
        children: [
          {
            path: "login",
            element: <Login />,
          },

          {
            path: "signup",
            element: <Signup />,
          },
        ],
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);
