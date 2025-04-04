import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { SectionTitle } from "../../Components/Shared/SectionTitle";
import axios from "axios";
import { JOBPOST_API_END_POINT } from "../../utils/Constant";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export const PostJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    
    const jobDetails = {
      ...data,
      description:data.description
    }
    console.log("Job Details:", jobDetails);
    
    try {
      const res = await axios.post(
        `${JOBPOST_API_END_POINT}/post`,
        jobDetails,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        navigate("/SignIn");
        toast.success(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="bg-background container mx-auto my-10 p-4 rounded-lg shadow-lg">
      <SectionTitle title={"Post Job"} />
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Company Name
            </label>
            <input
              type="text"
              placeholder="company name"
              {...register("company", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.company && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* File Upload */}
          {/* <div>
            <label className="block text-sm font-medium mb-1">
              Company Logo
            </label>
            <input
              type="file"
              {...register("companyImage", { required: true })}
              accept="image/*"
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.companyImage && (
              <span className="text-red-500">This field is required</span>
            )}
          </div> */}

          {/* Job Position */}
          <div>
            <label className="block text-sm font-medium mb-1">Position</label>
            <input
              type="text"
              placeholder="Position"
              {...register("position", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.position && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Job Category */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Job Category
            </label>
            <input
              type="text"
              placeholder="Job Category"
              {...register("category", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.category && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium mb-1">Job Type</label>
            <select
              {...register("jobType", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            >
              <option value="Full-Time">Select Job-Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Remote">Remote</option>
            </select>
            {errors.jobType && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Experience */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Experience Level
            </label>
            <select
              {...register("experience", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            >
              <option value="">Select Experience</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
            </select>
            {errors.experience && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Dates */}
          {["postedDate", "lastDateToApply", "closeDate"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="date"
                {...register(field, { required: true })}
                className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              {errors[field] && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          ))}

          {/* Salary */}
          {["salaryFrom", "salaryTo"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="number"
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                {...register(field, { required: true })}
                className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              {errors[field] && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          ))}

          {/* Location */}
          {["city", "state", "country"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                placeholder={`Enter ${field}`}
                {...register(field, { required: true })}
                className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
              />
              {errors[field] && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
          ))}

          {/* Education Level */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Education Level
            </label>
            <input
              type="text"
              placeholder="Enter Education Level"
              {...register("educationLevel", { required: true })}
              className="w-full shadow rounded-lg p-3 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            {errors.educationLevel && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Job Description */}
          <div className="col-span-2 ">
            <label className="block text-lg font-semibold my-4">
              Job Description
            </label>

            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              placeholder="Write job details here..."
              {...register("description", { required: true })}
              modules={{
                toolbar: [
                  [{ header: [1, 2, 3, false] }], // Headings
                  ["bold", "italic", "underline", "strike"], // Text formatting
                  [{ list: "ordered" }, { list: "bullet" }], // Lists
                  [{ indent: "-1" }, { indent: "+1" }], // Indentation
                  ["blockquote", "code-block"], // Block elements
                  [{ align: [] }], // Alignment
                  ["clean"], // Clear formatting
                  ["undo", "redo"], // Undo/redo
                ],
              }}
              className="bg-white border-none shadow-sm rounded-lg"
            />
            <p className="text-gray-400 text-sm text-right mt-1">
              {description.length}/10,000
            </p>
          </div>

          {/* Status */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-2">Status</label>
            <div className="flex gap-6">
              {["Active", "Inactive"].map((status) => (
                <div key={status} className="flex items-center gap-2">
                  <input
                    type="radio"
                    {...register("status", { required: true })}
                    value={status}
                  />
                  <p className="text-sm">{status}</p>
                </div>
              ))}
            </div>
            {errors.status && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-3">
          <input
            className="btn bg-r-primary text-white hover:bg-r-accent"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
