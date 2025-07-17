import { createBrowserRouter } from "react-router";
import { SignIn } from "../Features/Authentication/SignIn";
import { SignUp } from "../Features/Authentication/SignUp";
import { DashBoardLayout } from "../Layouts/DashBoardLayout";
import { MainLayouts } from "../Layouts/MainLayouts";
import { BlogDetails } from "../Pages/BlogDetails";
import { Home } from "../Pages/Home";
import JobDetails from "../Pages/JobDetails.jsx";

import { AdminDashboardMenu } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/AdminDashboard/AdminDashboardMenu.jsx";
import { ManageCompany } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/ManageCompany/ManageCompany.jsx";

import AllCompany from "../Pages/company/AllCompany.jsx";
import JobsShowAll from "../Pages/jobs/JobsShowAll.jsx";

import { EmployerDashboardMenu } from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerDashboard/EmployerDashboardMenu.jsx";
import { PostedJobs } from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/PostedJobs/PostedJobs.jsx";

import { ManageUsers } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/ManageUsers/ManageUsers.jsx";
import { JobseekerProfile } from "../Components/Drawer/SidebarMenus/JobSeekerSidebarMenus/Profile/JobseekerProfile.jsx";

import { JobSeekerDashboardMenu } from "../Components/Drawer/SidebarMenus/JobSeekerSidebarMenus/JobSeekerDashboard/JobSeekerDashboardMenu.jsx";

import EmployerSignUP from "../Features/Authentication/EmployerSignUP.jsx";
import AllFaqs from "../Pages/AllFaqs.jsx";
import { CreateJob } from "./../Pages/Empoloyer/CreateJob";
import CompanyDetails from "../Pages/company/CompanyDetails.jsx";
import EmployerCompany from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerCompanys/EmployerCompany.jsx";
import EmployerApplication from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerCompanys/EmployerApplications/EmployerApplication.jsx";
import ScheduleInterviewForm from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerInterview/ScheduleInterviewForm.jsx";
import EmployerShowAllApplication from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerInterview/EmployerShowAllApplication.jsx";

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
        path: "/companydetails/:id",
        element: <CompanyDetails />,
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
      {
        path: "/company",
        element: <CompanyDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      { path: "jobseekerDashboard", element: <JobSeekerDashboardMenu /> },
      {
        path: "jobseekerProfile",
        element: <JobseekerProfile />,
      },

      // For Employer
      { path: "employerDashboard", element: <EmployerDashboardMenu /> },

      { path: "employer/create-job", element: <CreateJob /> },
      { path: "employer/postedJobs", element: <PostedJobs /> },
      { path: "employer/managecompany", element: <EmployerCompany /> },
      { path: "employer/applications", element: <EmployerApplication /> },
      { path: "employer/alljobs", element: <JobsShowAll /> },
      { path: "employer/interview", element: <EmployerShowAllApplication /> },


      //for admin
      {
        path: "adminDashboard",
        element: <AdminDashboardMenu />,
      },
      {
        path: "manageCompany",
        element: <ManageCompany />,
      },
      {
        path: "manageUsers",
        element: <ManageUsers />,
      },
    ],
  },
]);
