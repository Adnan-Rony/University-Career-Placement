import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { UseMyCompany } from "../../hooks/useCompany.js";
import { UseCreateJob } from "../../hooks/useJobs.js";

export const CreateJob = () => {
  const {
    data: myCompanyData,
    isLoading: loadingCompany,
    isError: companyError,
  } = UseMyCompany();


  
  const { mutate: createJob, isLoading } = UseCreateJob();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

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
        navigate("/");
      },
      onError: (error) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        toast.error(error.response?.data?.message || "Failed to create job");
      },
    });
  };

  if (loadingCompany) return <div>Loading your company data...</div>;
  if (companyError) return <div>Error loading your company data.</div>;

  return (
    <div className="mx-auto  p-5   container bg-white  rounded-lg shadow-md border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1"> Job title *</label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Enter a job title"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">Job title is required</p>
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
              <p className="text-red-500 text-sm mt-1">Industry is required</p>
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

          <div>
            <label className="block font-semibold mb-1">
              Job Requirement *
            </label>
            <textarea
              {...register("jobRequirements", { required: true })}
              placeholder="Enter job jobRequirements"
              type="text"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.jobRequirements && (
              <p className="text-red-500 text-sm mt-1">
                Job jobRequirements is required
              </p>
            )}
          </div>
        </div>

        {/* VACANCY deadline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Deadline *</label>
            <input
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
              {...register("deadline", { required: true })}
              type="date"
              min={new Date().toISOString().split("T")[0]}
              max={
                new Date(new Date().setMonth(new Date().getMonth() + 2))
                  .toISOString()
                  .split("T")[0]
              }
            />

            {errors.deadline && (
              <p className="text-red-500 text-sm mt-1">
                Job deadline is required
              </p>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">Vacancy *</label>
            <input
              {...register("vacancy", { required: true })}
              type="number"
              placeholder=""
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.vacancy && (
              <p className="text-red-500 text-sm mt-1">
                Job vacancy is required
              </p>
            )}
          </div>
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              {...register("gender", { required: false })}
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Any">Any</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
              <p className="text-red-500 text-sm mt-1">Job city is required</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Salary Type */}
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-1">
              Salary Type *
            </label>
            <select
              {...register("salaryType", { required: true })}
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="" disabled>
                Select Salary Type
              </option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
              <option value="Hourly">Hourly</option>
              <option value="Negotiable">Negotiable</option>
            </select>
            {errors.salaryType && (
              <p className="text-red-500 text-sm mt-1">
                Salary type is required
              </p>
            )}
          </div>

          {/* Currency */}
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-1">
              Currency *
            </label>
            <select
              {...register("currency", { required: true })}
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="" disabled>
                Select Currency
              </option>
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
              <option value="INR">INR</option>
              <option value="Other">Other</option>
            </select>
            {errors.currency && (
              <p className="text-red-500 text-sm mt-1">Currency is required</p>
            )}
          </div>

          {/* Salary Range */}
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-1">
              Salary Range (BDT) *
            </label>
            <div className="flex items-center gap-3">
              <input
                {...register("salaryMin", { required: true })}
                type="number"
                name="salaryMin"
                placeholder="Min"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <span className="text-gray-500">to</span>
              <input
                {...register("salaryMax", { required: true })}
                type="number"
                name="salaryMax"
                placeholder="Max"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            {(errors.salaryMin || errors.salaryMax) && (
              <p className="text-red-500 text-sm mt-1">
                Salary range is required
              </p>
            )}
          </div>
        </div>

        {/* skill */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">
              Total Years of Experience *
            </label>
            <input
              {...register("totalExperience", { required: false })}
              type="number"
              placeholder="Enter a number of vacancies"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.totalExperience && (
              <p className="text-red-500 text-sm mt-1">
                total Experience is required
              </p>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Minimum Experience{" "}
            </label>
            <input
              {...register("minExperience", { required: false })}
              type="number"
              placeholder="Enter a number of vacancies"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.minExperience && (
              <p className="text-red-500 text-sm mt-1">
                total Experience is required
              </p>
            )}
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Miximum Experience{" "}
            </label>
            <input
              {...register("maxExperience", { required: false })}
              type="number"
              placeholder="Enter a number of vacancies"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
            {errors.maxExperience && (
              <p className="text-red-500 text-sm mt-1">
                total Experience is required
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-1">
              job Level *
            </label>
            <select
              {...register("jobLevel", { required: true })}
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="" disabled>
                Select Currency
              </option>
              <option value="Entry">Entry</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
              <option value="Executive">Executive</option>
              <option value="Top Level">Top Level</option>
              <option value="Other">Other</option>
            </select>
            {errors.jobLevel && (
              <p className="text-red-500 text-sm mt-1">jobLevel is required</p>
            )}
          </div>
          <div className="w-full">
            <label className="block font-medium text-gray-700 mb-1">
              job Shift *
            </label>
            <select
              {...register("jobShift", { required: true })}
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="" disabled>
                Select jobShift
              </option>
              <option value="Day">Day</option>
              <option value="Night">Night</option>
              <option value="Flexible">Flexible</option>
              <option value="Rotational">Rotational</option>
              <option value="Remote">Remote</option>
            </select>
            {errors.jobShift && (
              <p className="text-red-500 text-sm mt-1">jobShift is required</p>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-1">Minimum Age </label>
            <input
              {...register("minAge", { required: false })}
              type="number"
              placeholder="Enter a number of vacancies"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-6">
          <div className="md:col-span-1">
            <label className="block font-semibold mb-1">Miximum Age </label>
            <input
              {...register("maxAge", { required: false })}
              type="number"
              placeholder="Enter a number of vacancies"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">
              Skills Required (comma separated) *
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
            className={`bg-purple-700 text-white p-3 rounded-lg font-semibold ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Job"}
          </button>
        </div>
      </form>
    </div>
  );
};
