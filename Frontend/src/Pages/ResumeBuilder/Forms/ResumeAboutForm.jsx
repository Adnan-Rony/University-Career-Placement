import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useResumeContext } from "../../../Context/ResumeProvider";

export default function ResumeAboutForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { setSubmit, updateAbout, setTriggerSubmit } = useResumeContext();
  const formRef = useRef(null);

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    updateAbout(data);
    setSubmit(false);
   
  };

  // for auto submitting
  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit)); 
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="label mb-1">Name</label>
          <input
            className="input  w-full rounded-lg shadow-sm "
            {...register("name", { required: "Please enter your full name." })}
          />
          {errors.name && (
            <span className="text-red-400 mt-1">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        {/* <div className='flex flex-col'>
          <label className='label mb-1'>Email</label>
          <input
            className='input  w-full rounded-lg shadow-sm'
            {...register("email", {
              required: "Please provide your email address.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address."
              }
            })}
          />
          {errors.email && <span className='text-red-400 mt-1'>{errors.email.message}</span>}
        </div> */}

        {/* Phone */}
        <div className="flex flex-col">
          <label className="label mb-1">Phone</label>
          <input
            className="input  w-full rounded-lg shadow-sm"
            {...register("phone", {
              required: false,
              pattern: {
                value: /^[0-9+\-\s]{7,15}$/,
                message: "Enter a valid phone number.",
              },
            })}
          />
          {errors.phone && (
            <span className="text-red-400 mt-1">{errors.phone.message}</span>
          )}
        </div>

        {/* Location */}
        {/* <div className='flex flex-col'>
          <label className='label mb-1'>Location</label>
          <input
            className='input  w-full rounded-lg shadow-sm'
            {...register("location", { required: "Please mention your current location." })}
          />
          {errors.location && <span className='text-red-400 mt-1'>{errors.location.message}</span>}
        </div> */}

        {/* LinkedIn */}
        {/* <div className='flex flex-col'>
          <label className='label mb-1'>LinkedIn</label>
          <input
            className='input rounded-lg shadow-sm w-full '
            {...register("linkedin", {
              required: "Please share your LinkedIn profile link.",
            })}
          />
          {errors.linkedin && <span className='text-red-400 mt-1'>{errors.linkedin.message}</span>}
        </div> */}

        {/* Portfolio (Optional) */}
        {/* <div className='flex flex-col'>
          <label className='label mb-1'>Portfolio (Optional)</label>
          <input
            className='input rounded-lg shadow-sm w-full'
            {...register("portfolio")}
          />
        </div> */}

        {/* Professional Summary (2 cols) */}
        {/* <div className='flex flex-col md:col-span-2'>
          <label className='label mb-1'>Professional Summary</label>
          <textarea
            className='textarea rounded-lg shadow-sm h-32 w-full'
            {...register("summary", { required: "Please write a short professional summary." })}
          />
          {errors.summary && <span className='text-red-400 mt-1'>{errors.summary.message}</span>}
        </div> */}
        <div>
          <button type="submit" className="btn btn-active">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
