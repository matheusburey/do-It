import { Route, Routes as RoutesReact } from "react-router-dom";

import { Login } from "../pages/Login";

export function Routes() {
  return (
    <RoutesReact>
      <Route path="/" element={<Login />} />
    </RoutesReact>
  );
}
