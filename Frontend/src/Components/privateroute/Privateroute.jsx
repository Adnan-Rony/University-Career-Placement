import React from "react";
import { useCurrentUser } from "../../hooks/useAuth";
import { LottieLoader } from "../loading/loader/lottieLoader";
import { Navigate } from "react-router";

export const Privateroute = ({ children }) => {
  const { data: user, isPending } = useCurrentUser();

  if (isPending) {
    return <LottieLoader />;
  }

  if (!user) {
    return <Navigate to="/SignIn" replace />;
  }

  return children;
};
