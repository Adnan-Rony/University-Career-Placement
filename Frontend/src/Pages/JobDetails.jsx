import React from "react";
import { useParams } from "react-router";
import { UseFetchSingleJobById } from "../hooks/useJobs.js";

// Components
import HeaderJobCard from "../Components/DetailsJob/HeaderJobCard.jsx";
import JobDescription from "../Components/DetailsJob/JobDescription.jsx";
import JobOverView from "../Components/DetailsJob/JobOverView.jsx";
import CompanyCard from "../Components/DetailsJob/CompanyCard.jsx";
import RelatedJobs from "../Components/DetailsJob/RelatedJobs.jsx";
import JobDetailsSkeleton from "../Components/loading/JobDetailsSkeleton.jsx";

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isLoading } = UseFetchSingleJobById(id);

  if (isLoading) return <JobDetailsSkeleton />;

  return (
    <div className="min-h-screen  pb-20 bg-base-100">
      {/* Job Header */}
      <HeaderJobCard job={job} />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-2 grid grid-cols-1 lg:grid-cols-3 gap-2">
        {/* Left Content (Description + Related) */}
        <div className="lg:col-span-2 space-y-2">
          <section className=" rounded-xl  p-2">
            <JobDescription />
          </section>

          <section className=" rounded-xl  p-2">
            <RelatedJobs jobId={id} currentJob={job} />
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-2">
          <div className=" rounded-xl  p-2">
            <JobOverView job={job} />
          </div>

          <div className=" rounded-xl  p-2">
            <CompanyCard job={job} />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
