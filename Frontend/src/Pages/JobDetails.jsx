import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiClock1 } from "react-icons/ci";
import { GiMoneyStack } from "react-icons/gi";
import { CiSaveUp2 } from "react-icons/ci";
import { RxTimer } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";

const JobDetails = () => {
  return (
    <div className="">

      <div className=" mx-auto   md:p-8  min-h-screen flex flex-col gap-8">
        {/* Header Section */}
        <div className=" flex p-4 py-8 flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-indigo-50 to-blue-50 lg:h-[260px] ">
        

        
          <div className="flex items-center gap-4">
            <img
              src="https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fcompany-logo%2F1-5.png&w=256&q=75" 
              alt="Invision Logo"
              className="w-16 h-16 rounded-md object-cover"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
                Product Manager, Studio
              </h1>
              <div className="flex items-center gap-4 text-gray-600 text-sm mt-1 flex-wrap">
                <span className="flex items-center gap-1">
                 
                  Invision
                </span>
                <span className="flex items-center gap-1">
                    <MdOutlineLocationOn />

                
                  London, UK
                </span>
                <span className="flex items-center gap-1">
                  <CiClock1 />

                  11 hours ago
                </span>
                <span className="flex items-center gap-1">
                    <GiMoneyStack />

                    $35k - $45k</span>
              </div>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Part Time
                </span>
                <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Private
                </span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Urgent
                </span>
              </div>
            </div>
          </div>
         
          {/* Right side */}
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
              Apply For Job
            </button>
            <button
              aria-label="Bookmark job"
              className="bg-blue-100 hover:bg-blue-200 transition rounded-md p-2"
            >
                <CiSaveUp2 />

              
            </button>
          </div>

          
        </div>

        {/* Job Description and Overview */}
        <div className="flex flex-col md:flex-row gap-10 max-w-screen-xl mx-auto">

          {/* Left: Job Description */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-gray-700">
            <h2 className="text-lg font-semibold mb-4">Job Description</h2>
            <p className="mb-6 text-sm md:text-base leading-relaxed">
              As a Product Designer, you will work within a Product Delivery
              Team fused with UX, engineering, product and data talent. You will
              help the team design beautiful interfaces that solve business
              challenges for our clients. We work with a number of Tier 1 
            </p>

            <h3 className="font-semibold mb-3">Key Responsibilities</h3>
            <ul className="list-disc list-inside space-y-3 text-sm md:text-base">
              <li>
                Be involved in every step of the product design cycle from
            
              </li>
              <li>
                Work with BAs, product managers and tech teams to lead the
           
              </li>
              <li>
                Maintain quality of the design process and ensure that when
            
              </li>
              <li>
                Accurately estimate design tickets during planning sessions.
              </li>
              <li>
                Contribute to sketching sessions involving non-designers.
                Create, iterate and maintain UI deliverables including 
              </li>
              <li>
                Ensure design choices are data led by identifying .
              </li>
              <li>
                Design pixel perfect responsive UI’s and understand that
              
              </li>
            </ul>
          </div>

          {/* Right: Job Overview */}
          <div className="w-full md:w-96 bg-white p-6 rounded-lg shadow-md text-gray-700 flex flex-col gap-4 bg-gradient-to-r from-indigo-50 to-blue-50">
            <h3 className="font-semibold text-lg mb-3">Job Overview</h3>
            <div className="flex flex-col gap-3 text-sm md:text-base">
              <div className="flex items-center gap-3">
               <CiCalendar className="text-2xl" />

                <div>
                  <p className="font-semibold">Date Posted:</p>
                  <p>Posted 1 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
               <RxTimer className="text-2xl"/>

                <div>
                  <p className="font-semibold">Expiration date:</p>
                  <p>April 06, 2021</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineLocationOn className="text-2xl" />
                <div>
                  <p className="font-semibold">Location:</p>
                  <p>London, UK</p>
                </div>
              </div>
         
              <div className="flex items-center gap-3">
                <FaRegUser className="text-2xl"/>

                <div>
                  <p className="font-semibold">Job Title:</p>
                  <p>Designer</p>
                </div>
              </div>
             
             
              <div className="flex items-center gap-3">
           <GiMoneyStack className="text-2xl" />
                <div>
                  <p className="font-semibold">Salary:</p>
                  <p>$35k - $45k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
