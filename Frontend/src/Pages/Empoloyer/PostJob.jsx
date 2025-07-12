import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { UseMyCompany } from "../../hooks/useCompany.js";
import { UseCreateJob } from "./../../hooks/useJobs.js";

export const CompanyCreate = () => {
  const { mutate: job, isPending } = UseCreateJob();
  const { data, isLoading, isError } = UseMyCompany();

  const [image, setImage] = useState("");

  const companies = Array.isArray(data?.company)
    ? data.company
    : data?.company
    ? [data.company]
    : [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [description, setDescription] = useState("");

  const onSubmit = (formData) => {
    if (!description) {
      toast.error("Description is required");
      return;
    }

    const payload = {
      ...formData,
      image,
      description,
      salaryRange: {
        min: Number(formData.min),
        max: Number(formData.max),
      },
      location: {
        city: formData.city,
        state: formData.state,
        country: formData.country,
      },
    };

    job(payload, {
      onSuccess: () => {
        reset();
        setDescription("");
        toast.success("Job posted successfully!");
        navigate("/");
      },
      onError: (err) => {
        toast.error(
          "Post failed: " +
            (err?.response?.data?.message || "Something went wrong")
        );
      },
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blogging"); // Replace with your actual preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dnpycgwch/image/upload", // Replace with your actual cloud name
        formData
      );
      setImage(res.data.secure_url); // Set uploaded image URL
      toast.success("Image uploaded!");
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image upload failed");
    }
  };

  if (isLoading) return <div>Loading companies...</div>;
  if (isError) return <div>Error loading companies</div>;

  return (
    <div className="mx-auto my-10 p-6 rounded-lg shadow-xl max-w-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow space-y-6"
      >
        {/* Company Select */}
        {!isLoading && !isError && (
          <div>
            <label className="block font-medium mb-1">
              Company <span className="text-red-500">*</span>
            </label>
            <select
              {...register("company", { required: true })}
              className="w-full border border-gray-300 p-2 rounded focus:ring"
            >
              <option value="">Select a company</option>
              {companies.map((company) => (
                <option key={company._id} value={company._id}>
                  {company.name}
                </option>
              ))}
            </select>
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">Company is required</p>
            )}
          </div>
        )}

        {/* Job Title */}
        <div>
          <label className="block font-semibold mb-1">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            {...register("title", { required: true })}
            className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200 outline-none"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">Title is required</p>
          )}
        </div>

        {/* image */}
        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-1">
            Upload Image <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="w-full border border-gray-300 p-2 rounded focus:ring focus:ring-blue-200 outline-none"
          />

          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-2 h-32 object-contain rounded"
            />
          )}
        </div>

        {/* Location Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">City</label>
            <input
              {...register("city")}
              className="w-full border border-gray-300 p-2 rounded focus:ring"
            />
          </div>
          <div>
            <label className="block font-medium">State</label>
            <input
              {...register("state")}
              className="w-full border border-gray-300 p-2 rounded focus:ring"
            />
          </div>
          <div>
            <label className="block font-medium">Country</label>
            <input
              {...register("country")}
              className="w-full border border-gray-300 p-2 rounded focus:ring"
            />
          </div>
        </div>

        {/* Salary Range */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Min Salary</label>
            <input
              type="number"
              {...register("min")}
              className="w-full border border-gray-300 p-2 rounded focus:ring"
            />
          </div>
          <div>
            <label className="block font-medium">Max Salary</label>
            <input
              type="number"
              {...register("max")}
              className="w-full border border-gray-300 p-2 rounded focus:ring"
            />
          </div>
          <div>
            <label className="block font-medium">Vacancy</label>
            <input
              type="number"
              {...register("vacancy")}
              className="w-full border border-gray-300 p-2 rounded focus:ring"
            />
          </div>
        </div>

        {/* Job Type */}
        <div>
          <label className="block font-medium">Job Type</label>
          <select
            {...register("jobType")}
            className="w-full border border-gray-300 p-2 rounded focus:ring"
          >
            <option value="full-time">Full-Time</option>
            <option value="part-time">Part-Time</option>
            <option value="internship">Internship</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="block font-medium">
            Application Deadline <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register("deadline", { required: true })}
            className="w-full border border-gray-300 p-2 rounded focus:ring"
          />
          {errors.deadline && (
            <p className="text-red-500 text-sm mt-1">Deadline is required</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <label className="block font-medium">Skills (comma-separated)</label>
          <input
            {...register("skillsRequired")}
            className="w-full border border-gray-300 p-2 rounded focus:ring"
            placeholder="React, JavaScript, HTML"
          />
        </div>
        {/* Description */}
        <div>
          <label className="block font-semibold mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            className="bg-white border border-gray-300 rounded"
          />
          {!description && (
            <p className="text-red-500 text-sm mt-1">Description is required</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          disabled={isPending || !description}
        >
          {isPending ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
};
