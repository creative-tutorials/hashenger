import { Navigate, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function PrivateRoutes() {
  const location = useLocation();
  const authLogin = localStorage.getItem("session.auth");

  return !authLogin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}
