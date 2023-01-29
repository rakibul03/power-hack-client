import { createBrowserRouter } from "react-router-dom";
import Billing from "../components/Billing/Billing";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

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
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/billing",
        element: (
          <PrivateRoutes>
            <Billing />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
