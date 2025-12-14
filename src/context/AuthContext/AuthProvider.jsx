import React, { useState } from "react";
import { AuthContext } from "./AuthContext";



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // hardcoded check
    if (email === "admin@gmail.com" && password === "123456") {
      setUser({ email, role: "admin" }); // store user info
      return true; // success
    }
    return false; // failed login
  };

  const logout = () => {
    setUser(null);
    
  };

  const authInfo = { user, login, logout };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
