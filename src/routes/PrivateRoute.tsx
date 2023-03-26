import { Outlet, Navigate } from "react-router-dom";

import { useAuth } from "../providers/Auth";

export function PrivateRoute() {
  const { user } = useAuth();
  return user?.acessToken ? <Outlet /> : <Navigate to="/" />;
}
