import React from 'react';
import { CiCalendar } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa6';
import { GiMoneyStack } from 'react-icons/gi';
import { IoPeopleOutline } from "react-icons/io5";

import { MdOutlineLocationOn } from 'react-icons/md';
import { RxTimer } from 'react-icons/rx';

const JobOverView = ({job}) => {
    return (
        <div>
              <div className=" p-6 rounded-lg shadow-md hover:shadow-lg transition text-gray-700 bg-gradient-to-r from-indigo-50 to-blue-50">
              <h3 className="font-semibold text-lg mb-4">Job Overview</h3>
              <div className="flex flex-col gap-4 text-sm md:text-base">
                <div className="flex items-center gap-3">
                  <IoPeopleOutline   className="text-2xl" />
                  <div>
                    <p className="font-semibold">Vacancy:</p>
                    <p>
                      {job?.vacancy}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CiCalendar className="text-2xl" />
                  <div>
                    <p className="font-semibold">Date Posted:</p>
                    <p>
                      {new Date(job?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RxTimer className="text-2xl" />
                  <div>
                    <p className="font-semibold">Expiration Date:</p>
                    <p>
                      {new Date(job?.deadline).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdOutlineLocationOn className="text-2xl" />
                  <div>
                    <p className="font-semibold">Location:</p>
                    <p>
                      {" "}
                      {job?.location?.city},{job?.location?.state},
                      {job?.location?.country}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaRegUser className="text-2xl" />
                  <div>
                    <p className="font-semibold">Job Title:</p>
                    <p>{job?.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GiMoneyStack className="text-2xl" />
                  <div>
                    <p className="font-semibold">Salary:</p>
                    <p>
                      {job?.salaryRange?.min}-{job?.salaryRange?.max}$
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default JobOverView;