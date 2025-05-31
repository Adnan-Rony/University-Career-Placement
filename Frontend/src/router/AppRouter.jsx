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
import { EmployerDashboardMenu } from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerDashboard/EmployerDashboardMenu.jsx";
import { JobSeekerDashboardMenu } from "../Components/Drawer/SidebarMenus/JobSeekerSidebarMenus/JobSeekerDashboard/JobSeekerDashboardMenu.jsx";
import { PostedJobs } from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/PostedJobs/PostedJobs.jsx";


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
    
    ]
      
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
       { path: "jobseekerDashboard",
         element:<JobSeekerDashboardMenu/>
         },



      // For Employer
      { path: "employerDashboard",
         element: <EmployerDashboardMenu/>
         },
      { path: "employer/post-job",
         element: <PostJob />
         },
      { path: "employer/postedJobs",
         element: <PostedJobs/>
         },


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
