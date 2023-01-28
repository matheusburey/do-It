import { Route, Routes as RoutesReact } from "react-router-dom";

import { Login, Dashboard } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </RoutesReact>
  );
}
