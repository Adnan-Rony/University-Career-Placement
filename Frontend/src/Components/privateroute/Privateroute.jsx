import React from "react";
import { useCurrentUser } from "../../hooks/useAuth";

import { Navigate } from "react-router";
import { Spinner } from "../loading/loader/Spinner";


export const Privateroute = ({ children }) => {
  const { data: user, isPending } = useCurrentUser();

  if (isPending) {
    return <Spinner/>
  }

  if (!user) {
    return <Navigate to="/SignIn" replace />;
  }

  return children;
};
