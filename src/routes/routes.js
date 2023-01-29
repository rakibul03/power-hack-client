import { createBrowserRouter } from "react-router-dom";
import Billing from "../components/Billing/Billing";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/billing",
        element: <Billing />,
      },
    ],
  },
]);
