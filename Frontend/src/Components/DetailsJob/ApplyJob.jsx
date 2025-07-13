import React, { useState } from "react";
import { UseCreateApply } from "../../hooks/useApplication.js";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";

const ApplyJob = ({ isOpen, onClose, jobId }) => {
  const { mutate: application, isLoading } = UseCreateApply();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [resumeUrl, setResumeUrl] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blogging"); // replace with your preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dnpycgwch/image/upload",
        formData
      );
      setResumeUrl(res.data.secure_url);
      toast.success("Resume uploaded!");
    } catch (error) {
      toast.error("Resume upload failed");
    }
  };

  const submitForm = (data) => {
    if (!resumeUrl) {
      toast.error("Please upload your resume before submitting");
      return;
    }

    application(
      {
        jobId,
        resume: resumeUrl,
        coverLetter: data.coverLetter,
      },
      {
        onSuccess: () => {
          toast.success("Application submitted successfully!");
          reset();
          setResumeUrl("");
          onClose();
        },
        onError: () => {
          toast.error("Failed to submit application.");
        },
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-white rounded-2xl w-full max-w-lg p-8 relative shadow-2xl transform transition-transform duration-300 ease-out scale-100">
          {" "}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              disabled={isLoading}
              aria-label="Close modal"
              className="text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1 transition"
            >
              <RxCross1 className="text-2xl bg-gray-200 p-1 rounded-2xl" />
            </button>
          </div>
          <div className="my-2 items-center border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-xl font-semibold text-center mb-4">
              Apply for this Job
            </h2>
          </div>
          <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
            {/* Resume Upload */}
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="flex items-center justify-center w-full cursor-pointer border border-dashed border-gray-300 p-4 rounded-lg text-gray-500 hover:bg-blue-50 transition"
              >
                📄 Upload Resume (.pdf, .doc, .docx)
              </label>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
                disabled={isLoading}
                className="hidden"
              />
              {resumeUrl && (
                <p className="mt-2 text-green-600 text-sm break-words">
                  Uploaded:{" "}
                  <a
                    href={resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {resumeUrl}
                  </a>
                </p>
              )}
            </div>

            {/* Cover Letter */}
            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                rows={6}
                placeholder="Write your cover letter here..."
                {...register("coverLetter", {
                  required: "Cover letter is required",
                })}
                disabled={isLoading}
                className={`block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition
            ${errors.coverLetter ? "border-red-500 focus:ring-red-500" : ""}
          `}
              />
              {errors.coverLetter && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.coverLetter.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition
          ${
            isLoading
              ? "bg-purple-700 cursor-not-allowed"
              : "bg-purple-700 "
          }
        `}
            >
              {isLoading ? "Submitting..." : "Apply Job"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
