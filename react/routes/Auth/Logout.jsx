import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useEffect } from "react";

export function Logout() {
  const { setAuth } = useContext(AuthContext);

  useEffect(() => {
    setAuth(false);
    localStorage.clear();
  }, [setAuth]);

  return <Navigate to="/" />;
}
