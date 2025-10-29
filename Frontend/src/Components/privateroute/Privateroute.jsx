import React from "react";
import { useCurrentUser } from "../../hooks/useAuth";

import { Navigate } from "react-router";


export const Privateroute = ({ children }) => {
  const { data: user, isPending } = useCurrentUser();

  if (isPending) {
    return <h1>Loading.....</h1>
  }

  if (!user) {
    return <Navigate to="/SignIn" replace />;
  }

  return children;
};
