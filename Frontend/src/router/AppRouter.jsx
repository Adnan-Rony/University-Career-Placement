import { createBrowserRouter } from "react-router";
import { SignIn } from "../Features/Authentication/SignIn";
import { SignUp } from "../Features/Authentication/SignUp";
import { DashBoardLayout } from "../Layouts/DashBoardLayout";
import { MainLayouts } from "../Layouts/MainLayouts";
import { BlogDetails } from "../Pages/BlogDetails";
import { Home } from "../Pages/Home";
import JobDetails from "../Pages/JobDetails.jsx";

import CreateCompany from "../Pages/Empoloyer/CreateCompany.jsx";

import { AdminDashboardMenu } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/AdminDashboard/AdminDashboardMenu.jsx";
import { ManageCompany } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/ManageCompany/ManageCompany.jsx";

import JobsShowAll from "../Pages/JobsShowAll.jsx";
import AllCompany from "../Pages/company/AllCompany.jsx";

import { EmployerDashboardMenu } from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerDashboard/EmployerDashboardMenu.jsx";
import { PostedJobs } from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/PostedJobs/PostedJobs.jsx";
import { JobSeekerDashboardMenu } from "../Components/Drawer/SidebarMenus/JobSeekerSidebarMenus/JobSeekerDashboard/JobSeekerDashboardMenu.jsx";

import EmployerSignUP from "../Features/Authentication/EmployerSignUP.jsx";
import AllFaqs from "../Pages/AllFaqs.jsx";
import { CreateJob } from './../Pages/Empoloyer/CreateJob';


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
        element: <BlogDetails />,
      },
      {
        path: "/job/details/:id",
        element: <JobDetails />,
      },
      // {
      //   path: "/company",
      //   element: <CreateCompany />,
      // },
      {
        path: "/alljobs",
        element: <JobsShowAll />,
      },
      {
        path: "/allcompanies",
        element: <AllCompany />,
      },
      {
        path: "/interview-questions",
        element: <AllFaqs />,
      },
      {
        path: "/employer-create-company",
        element: <EmployerSignUP />,
      },
      {
        path: "/create-job",
        element: <CreateJob />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      { path: "jobseekerDashboard", element: <JobSeekerDashboardMenu /> },

      // For Employer
      { path: "employerDashboard", element: <EmployerDashboardMenu /> },
      { path: "employer/post-job", element: <CreateCompany /> },
      { path: "employer/postedJobs", element: <PostedJobs /> },

      {
        path: "adminDashboard",
        element: <AdminDashboardMenu />,
      },
      {
        path: "manageCompany",
        element: <ManageCompany />,
      },
    ],
  },
]);
