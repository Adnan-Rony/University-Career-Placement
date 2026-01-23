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

import EmployerApplication from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerCompanys/EmployerApplications/EmployerApplication.jsx";
import EmployerCompany from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerCompanys/EmployerCompany.jsx";
import EmployerShowAllApplication from "../Components/Drawer/SidebarMenus/EmployerSidebarMenus/EmployerInterview/EmployerShowAllApplication.jsx";
import JobSeekerAppliedJobs from "../Components/Drawer/SidebarMenus/JobSeekerSidebarMenus/JobSeekerAppliedJobs/JobSeekerAppliedJobs.jsx";
import EmployerSignUP from "../Features/Authentication/EmployerSignUP.jsx";
import PortfolioLayout from "../Layouts/PortfolioLayout.jsx";
import AllFaqs from "../Pages/AllFaqs.jsx";
import CompanyDetails from "../Pages/company/CompanyDetails.jsx";

import ViewMyPortfolio from "../Pages/portfolio/ViewMyPortfolio.jsx";

import { CreateJob } from "./../Pages/Empoloyer/CreateJob";
import { NotFOund } from "../Pages/NotFound/NotFOund.jsx";
import EmployerSignIn from "../Features/Authentication/EmployerSignIn.jsx";
import { ResumeBuilder } from "../Pages/ResumeBuilder/ResumeBuilder.jsx";
import { SelectOption } from "../Pages/ResumeBuilder/ResumeUi/SelectOption.jsx";
import BuildYourResume from "../Pages/ResumeBuilder/ResumeUi/BuildYourResume.jsx";
import { ResumeProvider } from "../Context/ResumeProvider.jsx";
import { Demo } from "../Pages/Demo/demo.jsx";
import PaymentSuccess from "../Components/Payments/FeauturedJobPayment/PaymentSuccess.jsx";
import PaymentFailed from "../Components/Payments/FeauturedJobPayment/PaymentFailed.jsx";
import Paymentcancel from "../Components/Payments/FeauturedJobPayment/Paymentcancel.jsx";

import FeaturedPayment from "../Pages/Payments/FeaturedPayment/FeaturedPayment.jsx";
import { Privateroute } from "../Components/privateroute/Privateroute.jsx";
import { ManageJobs } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/ManageJob/ManageJobs.admin.jsx";
import { SkillAssesmentHome } from "../Pages/SkillAssesment/SkillAssesmentHome.jsx";
import { Assesments } from "../Pages/SkillAssesment/AssesMents/Assesments.jsx";
import { AllQuestions } from "../Pages/SkillAssesment/AllQuestions.jsx";
import { ManageSkillAssessment } from "../Components/Drawer/SidebarMenus/AdminSidebarMenus/ManageSkillAssessment/ManageSkillAssessment.jsx";
import BuildPortfolio from "../Pages/portfolio/BuildPortfolio.jsx";
import { PortfolionBuilderHome } from "../Pages/portfolio/PortfolionBuilderHome.jsx";
import { SelectPortfolioTemp } from "../Pages/portfolio/SelectPortfolioTemp.jsx";
import { SelectedTemplate } from "../Pages/portfolio/Categories/SelectedTemplate.jsx";
import { ManagePortfolio } from "../Components/Drawer/SidebarMenus/JobSeekerSidebarMenus/ManagePortfolio/ManagePortfolio.jsx";
import { PublicPortfolio } from "../Pages/portfolio/Categories/PublicPortfolio.jsx";
import { TermsAndCondition } from "../Pages/TermsAndCondition/TermsAndCondition.jsx";
import { ManageResume } from "../Components/Drawer/SidebarMenus/JobSeekerSidebarMenus/ManageResume/ManageResume.jsx";
import ArticleDetails from "../Components/Home/ArticleDetails.jsx";


export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <NotFOund />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/demo",
        element: <Demo />,
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
      {

         path: "/article/:id",
  element: <ArticleDetails />
      },


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
        path: "/employer-signIn",
        element: <EmployerSignIn />,
      },
      {
        path: "/create-job",
        element: <CreateJob />,
      },
      {
        path: "/company",
        element: <CompanyDetails />,
      },
      // --> Portfolio Builder
      {
        path: "/portfolio-builder",
        element: <PortfolionBuilderHome />,
      },
      {
        path: "/portfolio-builder/create",
        element: (
          <Privateroute>
            <BuildPortfolio />
          </Privateroute>
        ),
      },

      {
        path: "/myportfolio",
        element: <ViewMyPortfolio />,
      },
      {
        path: "/select-portfolio-template",
        element: <SelectPortfolioTemp />,
      },
      {
        path: "/selected-template/:id",
        element: <SelectedTemplate />,
      },

      //payment,

      {
        path: "/featured-payment",
        element: <FeaturedPayment />,
      },
      {
        path: "/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "/payment-fail",
        element: <PaymentFailed />,
      },
      {
        path: "/payment-cancel",
        element: <Paymentcancel />,
      },
      //Skill Assesmnet
      {
        path: "/skill-assessment",
        element: <SkillAssesmentHome />,
      },
      {
        path: `/skills/:id`,
        element: (
          <Privateroute>
            <Assesments />
          </Privateroute>
        ),
      },
      {
        path: "/quiz-started/questions",
        element: <AllQuestions />,
      },

      //..........
      //Resume Builder
      {
        path: "/resumebuilder",
        element: <ResumeBuilder />,
      },
      { path: "/resumebuilder/selectoption", element: <SelectOption /> },
      {
        path: "/resumebuilder/build-your-resume/:id",
        element: (
          <Privateroute>
            <ResumeProvider>
              <BuildYourResume />
            </ResumeProvider>
          </Privateroute>
        ),
      },
      // For footer
      {
        path: "/termsAndcondion",
        element: <TermsAndCondition />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "jobseekerDashboard",
        element: (
          <Privateroute>
            <JobSeekerDashboardMenu />
          </Privateroute>
        ),
      },
      {
        path: "jobseekerProfile",
        element: (
          <Privateroute>
            <JobseekerProfile />
          </Privateroute>
        ),
      },
      {
        path: "jobseekerAppliedJob",
        element: (
          <Privateroute>
            <JobSeekerAppliedJobs />
          </Privateroute>
        ),
      },

      {
        path: "jobseekerMyPortfolio",
        element: (
          <Privateroute>
            <ManagePortfolio />
          </Privateroute>
        ),
      },
      {
        path: "jobseekerManageResume",
        element: (
          <Privateroute>
            <ManageResume />
          </Privateroute>
        ),
      },

      // For Employer
      {
        path: "employerDashboard",
        element: (
          <Privateroute>
            <EmployerDashboardMenu />
          </Privateroute>
        ),
      },

      {
        path: "employer/create-job",
        element: (
          <Privateroute>
            <CreateJob />
          </Privateroute>
        ),
      },
      {
        path: "employer/postedJobs",
        element: (
          <Privateroute>
            <PostedJobs />
          </Privateroute>
        ),
      },
      {
        path: "employer/managecompany",
        element: (
          <Privateroute>
            {" "}
            <EmployerCompany />
          </Privateroute>
        ),
      },
      {
        path: "employer/applications",
        element: (
          <Privateroute>
            <EmployerApplication />{" "}
          </Privateroute>
        ),
      },
      {
        path: "employer/alljobs",
        element: (
          <Privateroute>
            <JobsShowAll />
          </Privateroute>
        ),
      },
      {
        path: "employer/interview",
        element: (
          <Privateroute>
            <EmployerShowAllApplication />
          </Privateroute>
        ),
      },

      //for admin
      {
        path: "adminDashboard",
        element: (
          <Privateroute>
            <AdminDashboardMenu />
          </Privateroute>
        ),
      },
      {
        path: "manageCompany",
        element: (
          <Privateroute>
            <ManageCompany />
          </Privateroute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <Privateroute>
            <ManageUsers />
          </Privateroute>
        ),
      },
      {
        path: "manageJobs",
        element: (
          <Privateroute>
            <ManageJobs />
          </Privateroute>
        ),
      },
      {
        path: "manage-skill-assessment",
        element: (
          <Privateroute>
            <ManageSkillAssessment />
          </Privateroute>
        ),
      },
    ],
  },

  {
    path: "/portfolio/:slug",
    element: <PublicPortfolio />,
  },
]);
