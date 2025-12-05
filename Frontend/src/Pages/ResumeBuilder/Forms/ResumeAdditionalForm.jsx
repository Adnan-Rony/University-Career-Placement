import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useResumeContext } from "../../../Context/ResumeProvider";

export default function ResumeAdditionalForm() {
  const { setSubmit, setTriggerSubmit, updateAdditional, resumeData } =
    useResumeContext();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formRef = useRef(null);

  const onSubmit = (data) => {
    updateAdditional(data);
    setSubmit(false);
  };
  useEffect(() => {
    if (resumeData?.additional) {
      reset({
        languages: resumeData.additional.languages || "",
        certifications: resumeData.additional.certifications || "",
        awards: resumeData.additional.awards || "",
      });
    }
  }, [resumeData, reset]);

  // for auto submit trigger
  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit));
  }, []);

  return (
    <div className="p-2 sm:p-6 bg-gray-100 rounded-lg">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Languages */}
        <div className="flex flex-col">
          <label className="label mb-1">Languages</label>
          <input
            className="input rounded-lg shadow-sm w-full"
            {...register("languages", {
              required: "Please mention at least one language.",
            })}
          />
          {errors.languages && (
            <span className="text-red-400 mt-1">
              {errors.languages.message}
            </span>
          )}
        </div>

        {/* Certifications */}
        <div className="flex flex-col">
          <label className="label mb-1">Certifications</label>
          <input
            className="input rounded-lg shadow-sm w-full"
            {...register("certifications", {
              required:
                "Please provide relevant certifications or write 'None'.",
            })}
          />
          {errors.certifications && (
            <span className="text-red-400 mt-1">
              {errors.certifications.message}
            </span>
          )}
        </div>

        {/* Awards / Activities */}
        <div className="flex flex-col md:col-span-2">
          <label className="label mb-1">Awards / Activities</label>
          <textarea
            className="textarea rounded-lg shadow-sm h-32 w-full"
            {...register("awards", {
              required: "Please mention awards or extracurricular activities.",
            })}
          />
          {errors.awards && (
            <span className="text-red-400 mt-1">{errors.awards.message}</span>
          )}
        </div>
      </form>
    </div>
  );
}
