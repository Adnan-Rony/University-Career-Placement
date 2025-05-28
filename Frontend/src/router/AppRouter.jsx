import React from "react";
import { createBrowserRouter } from "react-router";
import { MainLayouts } from "../Layouts/MainLayouts";
import { Home } from "../Pages/Home";
import { SignIn } from "../Features/Authentication/SignIn";
import { SignUp } from "../Features/Authentication/SignUp";
import { DashBoardLayout } from "../Layouts/DashBoardLayout";
import { PostJob } from "../Pages/Empoloyer/PostJob";
import { BlogDetails } from "../Pages/BlogDetails";
import JobDetails from "../Pages/JobDetails.jsx";

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
      },
      {
        path: "/blog/blogdetails/:id",
        element: <BlogDetails/>,

      },
      {
        path: "/job/details",
        element: <JobDetails/>,

      }
    ]
      
  },
  {
    path: "dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      // { path: "/employer/dashboard", element: <EmployerDashboard /> },
      // { path: "/employer/jobs", element: <EmployerJobList /> },
      { path: "employer/post-job", element: <PostJob /> },
    ],
  },
]);
