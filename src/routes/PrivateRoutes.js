import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
// import Spinner from "../../pages/Spinner/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  const location = useLocation();

  // if (loading) {
  //   return <h1>Loading....</h1>;
  // }

  if (user()) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
