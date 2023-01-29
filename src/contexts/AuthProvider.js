import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const user = () => {
    return localStorage.getItem("token");
  };

  const logout = () => {
    return localStorage.removeItem("token");
  };
  const authInfo = {
    user,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
