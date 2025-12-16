import { useState } from "react";
import api from "../api/axios";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (identifier, password) => {
    const response = await api.post("/auth/login", {
      identifier,
      password,
    });

    const { token, user } = response.data;
    localStorage.setItem("token", token);
    setUser(user);

    console.log("Logged in user:", user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
