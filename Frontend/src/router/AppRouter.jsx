import React from "react";
import { createBrowserRouter,  } from "react-router";
import { MainLayouts } from "../Layouts/MainLayouts";
import { Home } from "../Pages/Home";
import { SignIn } from "../Features/Authentication/SignIn";
import { SignUp } from "../Features/Authentication/SignUp";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,

      },
      {
        path: "/SignUp",
        element: <SignUp />,

      },
      {
        path: "/SignIn",
        element: <SignIn />,

      }
    ]
      
  }

])
