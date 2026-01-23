import React, { useState } from "react";
import { UseCreateApply } from "../../hooks/useApplication.js";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import { useCurrentUser } from "../../hooks/useAuth.js";
import { Spinner } from "../loading/loader/Spinner.jsx";
import { ResumeUpload } from "./ResumeUpload.jsx";
import { CoverLetterInput } from "./CoverLetterInput.jsx";

const ApplyJob = ({ isOpen, onClose, jobId }) => {
  const { mutate: application, isLoading } = UseCreateApply();
  const { data, isPending: userloading } = useCurrentUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [resumeUrl, setResumeUrl] = useState("");

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
      },
    );
  };

  if (!isOpen) return null;
  if (userloading) {
    return <Spinner />;
  }
  if (isLoading) {
    return <Spinner />;
  }
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
            <ResumeUpload
              resumeUrl={resumeUrl}
              setResumeUrl={setResumeUrl}
              disabled={isLoading}
            />

            {/* Cover Letter */}

            <CoverLetterInput
              register={register}
              errors={errors}
              disabled={isLoading}
            />
            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition btn
          ${isLoading ? "bg-purple-700 cursor-not-allowed" : "bg-purple-700 "}
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
