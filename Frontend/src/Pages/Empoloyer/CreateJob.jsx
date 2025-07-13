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
  return (
    <div className="mx-auto my-10 p-6  container ">
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">title *</label>
            <input
              type="text"
              placeholder="Enter a job title"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Job Type *</label>
            <select
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
              defaultValue=""
            >
              {" "}
              <option value="" disabled>
                Select Job Type
              </option>
              <option value="full-time">full-time</option>
              <option value="part-time">part-time</option>
              <option value="internship">internship</option>
              <option value="contract">contract</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1  gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Description *</label>
            <textarea
              placeholder="Enter job description"
              type="text"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
        </div>

        {/* VACANCY deadline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Vacancy *</label>
            <input
              type="number"
              placeholder="Enter a number of vacancies"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Deadline *</label>
            <input
              type="date"
              placeholder=""
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">Country *</label>
            <input
              type="country"
              placeholder="Enter a country"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">location *</label>
            <input
              type="text"
              placeholder="enter a location"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">City *</label>
            <input
              type="text"
              placeholder="enter a city"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">
              Select Industry *
            </label>
            <select
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
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Upload Job Image *
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full border file-input border-purple-300 focus:outline-none focus:ring-0  rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Salary Range *</label>
            <input
              type="number"
              placeholder=""
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
        </div>

        {/* skill */}
        <div className="grid grid-cols-1  gap-6 mb-6">
          <div>
            <label className="block font-semibold mb-1">
              Skills Required *
            </label>
            <textarea
              placeholder="Enter skills requirement"
              type="text"
              className="mt-1 w-full px-4 py-2 border border-purple-300 focus:outline-none focus:ring-0 rounded-md"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
