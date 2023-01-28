import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoute() {
  const user = { acessToken: true };
  return user.acessToken ? <Outlet /> : <Navigate to="/" />;
}
