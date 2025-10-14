import React from "react";
import { useCurrentUser } from "../../../../../../../hooks/useAuth";
import Loading from "../../../../../../loading/Loading";

export const Progress = () => {
  const { data, isPending } = useCurrentUser();
  const profileInfo = data?.user;

  if (isPending) return <Loading />;

  //Checking profile complete or not
  const isCompleteProfile = (profile) => {
    const profileFields = [
      { key: "skills", type: "array" },
      { key: "languages", type: "array" },
      { key: "certifications", type: "array" },
      { key: "projects", type: "array" },
      { key: "education", type: "array" },
      { key: "workExperience", type: "array" },
      { key: "bio", type: "string" },
      { key: "picture", type: "string" },
      { key: "primaryRole", type: "string" },
    ];
    let totalfields = profileFields.length;

    let completefileds = 0;

    profileFields.forEach((field) => {
      const value = profile[field.key];
      if (field.type === "array" && Array.isArray(value) && value.length > 0) {
        completefileds++;
      } else if (field.type === "string" && value && value.trim() !== "") {
        completefileds++;
      }
    });
    return Math.round((completefileds / totalfields) * 100);
  };
  const checkPercentage = isCompleteProfile(profileInfo);

  return (
    <div className="py-6 border m-4 border-gray-300 rounded-xl px-8">
      {checkPercentage < 100 && (
        <p className="text-gray-600 mb-4 text-lg font-semibold ">
          Your profile is {checkPercentage}% complete. Completing your profile
          will help employers find you more easily.
        </p>
      )}
      <ProgressBar percentage={checkPercentage} />
    </div>
  );
};
const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className={`h-4 rounded-full transition-all duration-500 ${
          percentage < 50
            ? "bg-red-600"
            : percentage < 80
            ? "bg-gradient-to-r from-purple-500 to-purple-700 animate-pulse"
            : "bg-green-500"
        }`}
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
