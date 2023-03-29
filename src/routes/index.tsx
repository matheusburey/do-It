import { Route, Routes as RoutesReact } from "react-router-dom";

import { Login, Dashboard, Signup, PageNotFound } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </RoutesReact>
  );
}
