import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

export function ProtectedRoute() {
  const { isLoggedIn, setAuth } = useContext(AuthContext);

  setAuth(true);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
