import { Navigate, Outlet } from "react-router-dom";

export default function PrivateUser() {
  const user = localStorage.getItem("user");
  return <div>{user ? <Outlet /> : <Navigate to="/" />}</div>;
}
