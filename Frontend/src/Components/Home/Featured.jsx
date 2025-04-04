import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { CiBookmark, CiLocationOn } from "react-icons/ci";
import { SectionTitle } from "../Shared/SectionTitle";

export const Featured = () => {
  // Fetch jobs from backend API
  const {
    isPending,
    data: featured,
    error,
  } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3002/api/v1/job/get", {
        withCredentials: true, // If authentication is required
      });
      return res.data.jobs.slice(0, 6); // Only take the first 6 jobs
    },
  });

  if (isPending) 
    return (
      <div className="flex justify-center items-center h-96 ">
 

<span className="loading loading-dots loading-xl"></span>
      </div>
    );
  
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <div className="container mx-auto mt-12">
      <SectionTitle
        title={"Featured Job"}
        subtitle={" Choose jobs from the top employers and apply for the same"}
      ></SectionTitle>

      <div
        className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 
    lg:gap-20 mb-8 "
      >
        {featured.map((jobs) => (
          // Featured Card
          <div
            key={jobs._id}
            className="card bg-background 
   text-black py-6"
          >
            <div className="card-body">
              <div className="  flex items-center justify-between w-full ">
                <h2 className="card-title">{jobs?.title}</h2>
                <h4 className="text-xl ">
                  <CiBookmark></CiBookmark>
                </h4>
              </div>
              {/* Job Info */}
              <div className="flex gap-2">
                <h3>
                  <span className="bg-purple-300 rounded-2xl p-1 text-r-primary">
                    {jobs?.jobType}
                  </span>
                </h3>
                <h5 className="font-medium text-gray-600">
                  Salary:
                  {/* <span>{jobs?.salary}</span> */}
                </h5>
              </div>
              {/* Company details */}
              <div className="flex gap-2 my-4  items-center">
                <img
                  className="w-10 h-10 object-cover rounded-2xl"
                  src={jobs?.companyImage ? jobs?.companyImage : "image"}
                  alt="company_logo"
                />
                <div className="flex flex-col">
                  <p className="font-medium"> {jobs?.name}</p>
                  <div className="flex items-center gap-1">
                    <span>
                      <CiLocationOn className="text-xl" />{" "}
                    </span>
                    <span className="text-black/80 "> {jobs?.location}</span>
                  </div>
                </div>
              </div>

              <div className="card-actions  grid grid-cols-2">
                <button className="btn border-2 border-r-primary w-full">
                  Learn More
                </button>
                <button className="btn w-full bg-r-primary text-white hover:bg-r-accent">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};
