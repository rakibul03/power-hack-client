import { createBrowserRouter } from "react-router-dom";
import Billing from "../components/Billing/Billing";
import Login from "../components/Login/Login";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/billing",
        element: <Billing />,
      },
    ],
  },
]);
