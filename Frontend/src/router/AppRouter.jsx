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

import CreateCompany from "../Pages/CreateCompany.jsx";


import { AdminDashboardMenu } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/AdminDashboard/AdminDashboardMenu.jsx";
import { ManageCompany } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/ManageCompany/ManageCompany.jsx";
import JobsShowAll from "../Pages/JobsShowAll.jsx";


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
        path: "/job/details/:id",
        element: <JobDetails/>,

      },
      {
        path: "/company",
        element: <CreateCompany/>,

      },
      {
        path: "/alljobs",
        element: <JobsShowAll/>,

      },
    
    ]
      
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      
      { path: "employer/post-job", element: <PostJob /> },
      {
        path:"adminDashboard",
        element:<AdminDashboardMenu/>
      },
      {
        path:"manageCompany",
        element:<ManageCompany/>
      }
    ],
  },
]);
