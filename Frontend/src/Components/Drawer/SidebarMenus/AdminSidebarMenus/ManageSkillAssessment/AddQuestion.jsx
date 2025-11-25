import React, { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import {
  useAllSkillAssessments,
  useCreateAssessment,
} from "../../../../../hooks/useSkillAssesment";
import { QuestionCard } from "./QuestionCard";

export const AddQuestion = () => {
  const [selectedSkillId, setSelectedSkillId] = useState("");

  const { mutate: addQuestions, isPaused } = useCreateAssessment();
  const { data: skills } = useAllSkillAssessments();
  const allSkills = skills?.data;
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      skill_id: "",
      questions: [
        {
          text: "",
          type: "MCQ",
          points: 1,
          explanation: "",
          options: [
            { text: "", is_correct: false },
            { text: "", is_correct: false },
          ],
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const handleAddQuestion = () => {
    append({
      text: "",
      type: "MCQ",
      points: 1,
      explanation: "",
      options: [
        { text: "", is_correct: false },
        { text: "", is_correct: false },
      ],
    });
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    const payload={
        ...data,
  
  duration_seconds: data.duration_minutes * 60,
  total_questions: data.questions.length,
  is_active: true,

    }
    // Send to your API here
    addQuestions(payload);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        {/* Skill Selection */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold  mb-2">Select Skill</span>
          </label>
          <select
            {...register("skill_id", { required: "Please select a skill" })}
            className="select select-bordered w-full"
          >
            <option value="">Pick a skill</option>
            {allSkills?.map((category) => (
              <option key={category._id} value={category._id}>
                {category.category}
              </option>
            ))}
          </select>
          {errors.skill_id && (
            <span className="text-red-500 text-sm mt-2">
              {errors.skill_id.message}
            </span>
          )}
        </div>
   {/* Assessment Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-medium">Title*</span>
            </label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="input input-bordered input-sm focus:input-primary"
            />
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-medium">Difficulty*</span>
            </label>
            <select
              {...register("difficulty_level")}
              className="select select-bordered input-sm focus:input-primary"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="form-control flex flex-col">
            <label className="label">
              <span className="label-text font-medium">Duration (minutes)*</span>
            </label>
            <input
              type="number"
              {...register("duration_minutes", { min: 1 })}
              className="input input-bordered input-sm focus:input-primary"
              min="1"
              defaultValue={15}
            />
          </div>
        </div>

        <div className="form-control flex flex-col">
          <label className="label">
            <span className="label-text font-medium">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea textarea-bordered textarea-sm focus:textarea-primary"
          />
        </div>

        {/* Questions */}
        <div className="space-y-6">
          <div className="flex justify-between items-center  pb-4">

            <button
              onClick={handleAddQuestion}
              type="button"
              className="btn btn-primary btn-sm gap-2"
            >
              <Plus size={18} />
              Add Question
            </button>
          </div>

          {fields.map((field, questionIndex) => (
            <QuestionCard
              key={field.id}
              questionIndex={questionIndex}
              register={register}
              control={control}
              watch={watch}
              errors={errors}
              onRemove={() => remove(questionIndex)}
              canRemove={fields.length > 1}
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex gap-3 justify-end pt-6 ">
          <button type="button" className="btn btn-outline">
            Cancel
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            type="button"
            className="btn btn-primary"
          >
            Submit Questions
          </button>
        </div>
      </div>
    </div>
  );
};

