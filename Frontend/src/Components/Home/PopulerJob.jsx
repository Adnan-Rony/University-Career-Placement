
import { UseJobs } from "../../hooks/useJobs.js";
import AllJobsSkeleton from "../loading/AllJobsSkeleton.jsx";


import JobsCards from "./components/JobsCards.jsx";
import { Link } from "react-router";

const PopulerJob = () => {
  const { data, isPending, error } = UseJobs();
  const jobs = data?.jobs || [];


  if (isPending) return <AllJobsSkeleton />;

  return (
    <div className="container mx-auto ">
      <div className="w-full h-full p-4 text-center">
        <h2 className=" text-base-content text-3xl font-bold text-center mb-6">Popular Jobs</h2>
        <p className="text-gray-600 mb-6">
          Explore the most sought-after job listings in various industries.
        </p>

        <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.slice(0,6).map((job,index) => (
           <JobsCards key={index} job={job}></JobsCards>
          ))}
        </div>

        <div>
            <Link className="btn bg-purple-600 text-white my-5 " to="/alljobs">
              Load More
            </Link>
          
        </div>
      </div>
    </div>
  );
};

export default PopulerJob;
