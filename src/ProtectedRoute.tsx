import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function PrivateRoutes () {
  const location = useLocation();
  const authLogin = localStorage.getItem("chat_session");

  return authLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/account" replace state={{ from: location }} />
  );
};
