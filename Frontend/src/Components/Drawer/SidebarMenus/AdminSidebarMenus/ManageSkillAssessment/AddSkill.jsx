import React from 'react'

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useCreateSkill } from '../../../../../hooks/useSkillAssesment';

export const AddSkill = () => {
         const { register, handleSubmit, reset } = useForm();
      const { mutate, isPending, isSuccess } = useCreateSkill();
        const onSubmit = (data) => {
    mutate(data, {
      onSuccess: () => {
        Swal.fire({
          title: "Success!",
          text: "Skill assessment created successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        reset();
      },
      onError: (err) => {
        Swal.fire({
          title: "Error!",
          text: err?.response?.data?.message || "Something went wrong",
          icon: "error",
        });
      },
    });
  };
  return (
    <div>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Create Skill Assessment</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="JavaScript"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Category</span>
          </label>
          <input
            type="text"
            {...register("category", { required: true })}
            placeholder="Programming"
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered w-full"
            placeholder="Test your JavaScript knowledge"
          ></textarea>
        </div>

        {/* Difficulty */}
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Difficulty</span>
          </label>
          <select
            {...register("difficulty", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Icon URL */}
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Icon URL</span>
          </label>
          <input
            {...register("icon_url")}
            type="text"
            placeholder="https://..."
            className="input input-bordered w-full"
          />
        </div>

        {/* Active Status */}
        <div className="form-control">
          <label className="label cursor-pointer flex justify-between">
            <span className="font-semibold">Is Active?</span>
            <input
              type="checkbox"
              {...register("is_active")}
              className="checkbox"
              defaultChecked
            />
          </label>
        </div>

        {/* Submit Button */}
    <button
  type="submit"
  disabled={isPending}
  className="w-full mt-4 py-3 rounded-xl text-white font-semibold 
             bg-gradient-to-r from-indigo-600 to-purple-600 
             hover:from-indigo-700 hover:to-purple-700
             transition-all duration-300 shadow-lg 
             disabled:opacity-50 disabled:cursor-not-allowed"
>
  {isPending ? "Creating..." : "Create Skill"}
</button>

      </form>
    </div>
    </div>
  )
}
