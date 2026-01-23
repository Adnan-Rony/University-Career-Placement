import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const ResumeUpload = ({ resumeUrl, setResumeUrl, disabled }) => {
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
      setResumeUrl(res.data.secure_url);
      toast.success("Resume uploaded!");
    } catch (error) {
      toast.error("Resume upload failed");
    }
  };

  return (
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
        disabled={disabled}
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
  );
};
