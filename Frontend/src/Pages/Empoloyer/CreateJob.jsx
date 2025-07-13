import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { UseMyCompany } from "../../hooks/useCompany.js";
import { UseCreateJob } from "../../hooks/useJobs.js";



export const CreateJob = () => {
    const { data: myCompanyData, isLoading: loadingCompany, isError: companyError } = UseMyCompany();
  const { mutate: createJob, isLoading } = UseCreateJob();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Check if company exists
    if (!myCompanyData?.company?.length) {
      toast.error("You must create a company before posting a job.");
      return;
    }

    // Parse salary min/max as numbers
    const salaryMin = parseInt(data.salaryMin, 10);
    const salaryMax = parseInt(data.salaryMax, 10);

    // Prepare job data
    const jobData = {
      ...data,
      company: myCompanyData.company[0]._id, // use first company id
      salaryRange: {
        min: isNaN(salaryMin) ? 0 : salaryMin,
        max: isNaN(salaryMax) ? 0 : salaryMax,
      },
    };

    // Remove salaryMin/Max from flat form fields
    delete jobData.salaryMin;
    delete jobData.salaryMax;

    createJob(jobData, {
      onSuccess: () => {
        toast.success("Job created successfully");
        reset();
      },
      onError: (error) => {
        toast.error(error.response?.data?.message || "Failed to create job");
      },
    });
  };

  if (loadingCompany) return <div>Loading your company data...</div>;
  if (companyError) return <div>Error loading your company data.</div>;

  return (
    <div className="mx-auto my-10 p-6  container ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">title *</label>
            <input
            {...register("title", { required: true })}
              type="text"
              placeholder="Enter a job title"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    Job title is required
                  </p>
                )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Job Type *</label>
            <select
             {...register("jobType", { required: true })}
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select Job Type
              </option>
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="internship">internship</option>
              <option value="contract">contract</option>
            </select>
            {errors.jobType && (
                  <p className="text-red-500 text-sm mt-1">
                    Industry is required
                  </p>
                )}
          </div>
        </div>

        <div className="grid grid-cols-1  gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Description *</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Enter job description"
              type="text"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    Job description is required
                  </p>
                )}
          </div>
        </div>

        {/* VACANCY deadline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Vacancy *</label>
            <input
             {...register("vacancy", { required: true })}
              type="number"
              placeholder="Enter a number of vacancies"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.vacancy && (
                  <p className="text-red-500 text-sm mt-1">
                    Job vacancy is required
                  </p>
                )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Deadline *</label>
            <input
               {...register("deadline", { required: true })}
              type="date"
              placeholder=""
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.deadline && (
                  <p className="text-red-500 text-sm mt-1">
                    Job deadline is required
                  </p>
                )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Country *</label>
            <input
              {...register("country", { required: true })}
              type="country"
              placeholder="Enter a country"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.country && (
                  <p className="text-red-500 text-sm mt-1">
                    Job country is required
                  </p>
                )}
          </div>
          <div>
            <label className="block font-semibold mb-1">location *</label>
            <input
              {...register("location", { required: true })}
              type="text"
              placeholder="enter a location"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
               {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    Job location is required
                  </p>
                )}
          </div>
          <div>
            <label className="block font-semibold mb-1">City *</label>
            <input
              {...register("city", { required: true })}
              type="text"
              placeholder="enter a city"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
              {errors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    Job city is required
                  </p>
                )}
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Select Industry *
            </label>
            <select
              {...register("industry", { required: true })}
              className=" w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
              defaultValue=""
            >
              <option value="" disabled>
                Select Industry
              </option>
              <option value="Information Technology">
                Information Technology
              </option>
              <option value="Healthcare">Healthcare</option>
              <option value="Education">Education</option>
              <option value="Finance & Banking">Finance & Banking</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Construction">Construction</option>
              <option value="Transportation & Logistics">
                Transportation & Logistics
              </option>
              <option value="Retail & E-commerce">Retail & E-commerce</option>
              <option value="Telecommunications">Telecommunications</option>
              <option value="Media & Entertainment">
                Media & Entertainment
              </option>
              <option value="Energy & Utilities">Energy & Utilities</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Real Estate">Real Estate</option>
              <option value="Government & Public Sector">
                Government & Public Sector
              </option>
              <option value="Hospitality & Tourism">
                Hospitality & Tourism
              </option>
              <option value="Legal Services">Legal Services</option>
              <option value="Non-Profit / NGOs">Non-Profit / NGOs</option>
              <option value="Aerospace & Defense">Aerospace & Defense</option>
              <option value="Automotive">Automotive</option>
              <option value="Biotechnology & Pharmaceuticals">
                Biotechnology & Pharmaceuticals
              </option>
              <option value="Software">Software</option>
              <option value="others">Others</option>
            </select>
            {errors.industry && (
                  <p className="text-red-500 text-sm mt-1">
                    Job industry is required
                  </p>
                )}
          </div>

          {/* <div>
            <label className="block font-semibold mb-1">
              Upload Job Image *
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border file-input border-purple-300 focus:outline-none focus:ring-0  rounded"
            />
          </div> */}
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">
              Salary Range (BDT) *
            </label>
            <div className="flex items-center gap-4">
              <input
                {...register("salaryMin", { required: true })}
                type="number"
                name="salaryMin"
                placeholder="Min"
                className="w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
              />
               {errors.salaryMin && (
                  <p className="text-red-500 text-sm mt-1">
                    Job salaryMin is required
                  </p>
                )}
              <span className="text-gray-500">to</span>
              <input
                {...register("salaryMax", { required: true })}
                type="number"
                name="salaryMax"
                placeholder="Max"
                className="w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
              />
              {errors.salaryMax && (
                  <p className="text-red-500 text-sm mt-1">
                    Job salaryMax is required
                  </p>
                )}
            </div>
          </div>
        </div>

        {/* skill */}
        <div className="grid grid-cols-1  gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">
              Skills Required *
            </label>
            <textarea
              {...register("skillsRequired", { required: true })}
              placeholder="Enter skills requirement"
              type="text"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
             {errors.skillsRequired && (
                  <p className="text-red-500 text-sm mt-1">
                    Job skillsRequired is required
                  </p>
                )}
          </div>
        </div>
         <div className="flex justify-end mt-6">
            <button
            type="submit"
            className="bg-purple-700 text-white p-3 rounded-lg font-semibold  "
            disabled={isLoading}
          >
           {isLoading ? "Creating..." : "Create Job"}
          </button>
          </div>
      </form>
    </div>
  );
};
