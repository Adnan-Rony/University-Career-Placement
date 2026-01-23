import React from "react";

export const CoverLetterInput = ({ register, errors, disabled }) => {
  return (
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
        disabled={disabled}
        className={`block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition
        ${errors.coverLetter ? "border-red-500 focus:ring-red-500" : ""}`}
      />
      {errors.coverLetter && (
        <p className="mt-1 text-sm text-red-600">
          {errors.coverLetter.message}
        </p>
      )}
    </div>
  );
};
