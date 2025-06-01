import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UseCreateCompany } from "../hooks/useCompany.js";
import axios from "axios";
import toast from "react-hot-toast";

const CreateCompany = () => {
  const { mutate: company, isPending, isLoading, isError } = UseCreateCompany();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState("");
  const [cover, setCover] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blogging");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dnpycgwch/image/upload",
        formData
      );
      setImage(res.data.secure_url);
      toast.success("Image uploaded!");
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Image upload failed");
    }
  };
  const handleCoverUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blogging");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dnpycgwch/image/upload",
        formData
      );
      setCover(res.data.secure_url);
      toast.success("Cover Photo uploaded!");
    } catch (error) {
      console.error("Image upload error:", error);
      toast.error("Cover Photo upload failed");
    }
  };

  const onSubmit = (data) => {
    if (!cover) {
      toast.error("Please upload a company cover");
      return;
    }

    const companyData = {
      ...data,
      logo: image,
      cover:cover
    };

    console.log("Submitting company data:", companyData); // ✅ Log this

    company(companyData, {
      onSuccess: () => {
        toast.success("Company created successfully");
        reset();
        setImage("");
      },
      onError: (error) => {
        console.error(
          "Company creation failed:",
          error.response?.data || error.message
        );
        toast.error("Failed to create company");
      },
    });
  };

  if (isLoading) return <div>Loading companies...</div>;
  if (isError) return <div>Error loading companies</div>;

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow-xl rounded-2xl p-4">
            <h2 className="text-xl font-semibold mb-6">
              Tell Us About Your Company
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold mb-1">
                  Company Name *
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Company name"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    Company name is required
                  </p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1">Industry *</label>
                <select
                  {...register("industry", { required: true })}
                  className="mt-1 w-full px-4 py-2 border rounded-md"
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
                  <option value="Retail & E-commerce">
                    Retail & E-commerce
                  </option>
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
                  <option value="Aerospace & Defense">
                    Aerospace & Defense
                  </option>
                  <option value="Automotive">Automotive</option>
                  <option value="Biotechnology & Pharmaceuticals">
                    Biotechnology & Pharmaceuticals
                  </option>
                  <option value="Software">Software</option>
                  <option value="others">Others</option>
                </select>
                {errors.industry && (
                  <p className="text-red-500 text-sm mt-1">
                    Industry is required
                  </p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Year of Establishment *
                </label>
                <input
                  {...register("establishment", { required: true })}
                  type="text"
                  placeholder="YYYY"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.establishment && (
                  <p className="text-red-500 text-sm mt-1">
                    Establishment year is required
                  </p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Number of Employees *
                </label>
                <select
                  {...register("employees", { required: true })}
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select number of employees
                  </option>
                  <option value="1-25">1–25</option>
                  <option value="26-50">26–50</option>
                  <option value="51-100">51–100</option>
                  <option value="100-500">100–500</option>
                </select>
                {errors.employees && (
                  <p className="text-red-500 text-sm mt-1">
                    Employees count is required
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block font-semibold mb-1">Country *</label>
                <input
                  {...register("country", { required: true })}
                  type="text"
                  placeholder="Country"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">
                    Country is required
                  </p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1">Location *</label>
                <input
                  {...register("location", { required: true })}
                  type="text"
                  placeholder="Location"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    Location is required
                  </p>
                )}
              </div>

              <div>
                <label className="block font-semibold mb-1">City *</label>
                <input
                  {...register("city", { required: true })}
                  type="text"
                  placeholder="City"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">City is required</p>
                )}
              </div>
            </div>

            <div className="my-2">
              <label className="block font-semibold mb-1">
                Upload Company Logo *
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="w-full border p-2 rounded"
              />
              {image && (
                <img
                  src={image}
                  alt="Preview"
                  className="mt-2 h-32 object-contain rounded"
                />
              )}
            </div>
            <div className="my-2">
              <label className="block font-semibold mb-1">
                Upload Company Cover 
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverUpload}
                className="w-full border p-2 rounded"
              />
              {cover && (
                <img
                  src={cover}
                  alt="Preview"
                  className="mt-2 h-32 object-contain rounded"
                />
              )}
            </div>

            <div>
              <label className="block font-semibold mb-1">About *</label>
              <textarea
                {...register("description", { required: true })}
                className="w-full p-4 border rounded-lg text-sm"
                rows="5"
                placeholder="About Company"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  Description is required
                </p>
              )}
            </div>
          </div>

          <div className="p-4 my-4 shadow-xl rounded-2xl">
            <p className="text-xl font-semibold mb-6">
              Provide Contact Person Information
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold mb-1">
                  Contact Person's Name *
                </label>
                <input
                  {...register("contactPersonName", { required: true })}
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.contactPersonName && (
                  <p className="text-red-500 text-sm mt-1">Name is required</p>
                )}
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Designation *
                </label>
                <input
                  {...register("contactPersonDesignation", { required: true })}
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.contactPersonDesignation && (
                  <p className="text-red-500 text-sm mt-1">
                    Designation is required
                  </p>
                )}
              </div>
              <div>
                <label className="block font-semibold mb-1">Email *</label>
                <input
                  {...register("contactPersonEmail", { required: true })}
                  type="email"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.contactPersonEmail && (
                  <p className="text-red-500 text-sm mt-1">Email is required</p>
                )}
              </div>
              <div>
                <label className="block font-semibold mb-1">Mobile *</label>
                <input
                  {...register("contactPersonMobile", { required: true })}
                  type="tel"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
                {errors.contactPersonMobile && (
                  <p className="text-red-500 text-sm mt-1">
                    Mobile is required
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="p-4 my-4 shadow-2xl rounded-2xl">
            <p className="text-xl font-semibold mb-6">Social Network</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-semibold mb-1">Facebook</label>
                <input
                  {...register("facebookUrl")}
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Twitter</label>
                <input
                  {...register("twitterUrl")}
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">LinkedIn</label>
                <input
                  {...register("linkedinUrl")}
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Website</label>
                <input
                  {...register("websiteUrl")}
                  type="text"
                  className="mt-1 w-full px-4 py-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            disabled={isLoading}
          >
            {isPending ? "Creating..." : "Create Company"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCompany;
