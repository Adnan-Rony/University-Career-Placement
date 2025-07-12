import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { GiMoneyStack } from 'react-icons/gi';
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from 'react-icons/md';
import { RxTimer } from 'react-icons/rx';

const JobOverView = ({ job }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
      <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2">Job Overview</h3>

      <div className="space-y-5 text-sm text-gray-700">
        {/* Vacancy */}
        <div className="flex items-start gap-3">
          <IoPeopleOutline className="text-xl text-purple-600 mt-1" />
          <div>
            <p className="font-medium">Vacancy</p>
            <p className="text-gray-600">{job?.vacancy || "N/A"}</p>
          </div>
        </div>

        {/* Date Posted */}
        <div className="flex items-start gap-3">
          <CiCalendar className="text-xl text-blue-600 mt-1" />
          <div>
            <p className="font-medium">Date Posted</p>
            <p className="text-gray-600">
              {new Date(job?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-start gap-3">
          <RxTimer className="text-xl text-red-600 mt-1" />
          <div>
            <p className="font-medium">Expiration Date</p>
            <p className="text-gray-600">
              {new Date(job?.deadline).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <MdOutlineLocationOn className="text-xl text-green-600 mt-1" />
          <div>
            <p className="font-medium">Location</p>
            <p className="text-gray-600">
              {job?.location?.city}, {job?.location?.state}, {job?.location?.country}
            </p>
          </div>
        </div>

        {/* Job Title */}
        <div className="flex items-start gap-3">
          <FaRegUser className="text-xl text-indigo-600 mt-1" />
          <div>
            <p className="font-medium">Job Title</p>
            <p className="text-gray-600">{job?.title}</p>
          </div>
        </div>

        {/* Salary */}
        <div className="flex items-start gap-3">
          <GiMoneyStack className="text-xl text-yellow-600 mt-1" />
          <div>
            <p className="font-medium">Salary</p>
            <p className="text-gray-600">
              ${job?.salaryRange?.min} - ${job?.salaryRange?.max}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOverView;
