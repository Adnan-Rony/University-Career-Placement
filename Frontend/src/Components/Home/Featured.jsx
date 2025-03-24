import React from "react";
import { SectionTitle } from "../Shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { LuFileJson2 } from "react-icons/lu";
import image from "../../assets/company.png";
import { CiBookmark, CiLocationOn } from "react-icons/ci";

export const Featured = () => {
  const { isPending, data: featured } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await axios.get(`/jobs.json`);
      return res.data.jobs;
    },
  });
  if (isPending) {
    return <h2>Loading...</h2>;
  }

  console.log(featured);

  return (
    <div className="container mx-auto mt-12">
      <SectionTitle
        title={"Featured Job"}
        subtitle={" Choose jobs from the top employers and apply for the same"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-3 
      lg:gap-20 mb-8 ">
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
                <h4 className="text-xl "><CiBookmark></CiBookmark></h4>
              
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
                  <span>
                    {jobs?.salary.min}- {jobs?.salary?.max}
                  </span>
                </h5>
              </div>
              {/* Company details */}
              <div className="flex gap-2 my-4">
                <img
                  className="w-10 h-10 object-cover rounded-2xl"
                  src={jobs?.company?.image ? jobs.company.image : "image"}
                  alt="company_logo"
                />
                <div className="flex flex-col">
                  <p className="font-medium"> {jobs?.company?.name}</p>
                  <div className="flex items-center gap-1">
                    <span>
                      <CiLocationOn />{" "}
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
