import { Navigate, Outlet } from "react-router-dom";

export default function PrivateComponent() {
  const user = localStorage.getItem("user");
  return <>{user ? <Outlet /> : <Navigate to="/login/register" />}</>;
}
