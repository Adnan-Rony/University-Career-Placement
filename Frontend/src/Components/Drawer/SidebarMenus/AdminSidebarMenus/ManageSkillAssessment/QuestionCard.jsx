import { useFieldArray } from "react-hook-form";
import { useForm,  Controller } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
export const QuestionCard = ({
  questionIndex,
  register,
  control,
  watch,
  errors,
  onRemove,
  canRemove,
}) => {
  const currentType = watch(`questions.${questionIndex}.type`);
  const {
    fields: optionFields,
    append: appendOption,
    remove: removeOption,
  } = useFieldArray({
    control,
    name: `questions.${questionIndex}.options`,
  });

  const isTrueFalse = currentType === "TrueFalse";
  const isCoding = currentType === "Coding";

  return (
    <div className="border-2 border-blue-200 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h4 className="font-bold text-lg text-blue-700">
          Question {questionIndex + 1}
        </h4>
        {canRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      {/* Question Text */}
      <div className="form-control mb-4 flex flex-col">
        <label className="label py-2">
          <span className="label-text font-medium">Question Text*</span>
        </label>
        <textarea
          {...register(`questions.${questionIndex}.text`, {
            required: "Question text is required",
          })}
          placeholder="Enter your question here..."
          className="textarea w-full textarea-bordered h-24 focus:textarea-primary"
        />
        {errors.questions?.[questionIndex]?.text && (
          <span className="text-red-500 text-sm mt-1">
            {errors.questions[questionIndex].text.message}
          </span>
        )}
      </div>
    {/* Explanation */}
      <div className="form-control mb-4 flex flex-col">
        <label className="label py-2">
          <span className="label-text font-medium">Explanation</span>
        </label>
        <textarea
          {...register(`questions.${questionIndex}.explanation`)}
          placeholder="Explain the correct answer..."
          className="textarea textarea-bordered h-20 w-full focus:textarea-primary"
        />
      </div>
      {/* Type, Points */}
      <div className="grid grid-cols-2 gap-4 mb-4 items-center">
        <div className="form-control">
          <label className="label py-2">
            <span className="label-text font-medium">Question Type</span>
          </label>
          <select
            {...register(`questions.${questionIndex}.type`)}
            className="select select-bordered select-sm focus:select-primary"
          >
            <option value="MCQ">Multiple Choice (MCQ)</option>
           
            <option value="TrueFalse">True/False</option>
          
          </select>
        </div>
        <div className="form-control flex flex-col">
          <label className="label py-2 ">
            <span className="label-text font-medium">Points*</span>
          </label>
          <input
            type="number"
            {...register(`questions.${questionIndex}.points`, {
              required: true,
              min: 1,
            })}
            className="input input-bordered input-sm focus:input-primary"
            min="1"
            defaultValue={1}
          />
        </div>

      </div>

  

      {/* Options */}
      {!isCoding && (
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h5 className="font-bold mb-4 text-gray-800">
            {isTrueFalse ? "Answer Options (Fixed)" : "Options*"}
          </h5>
          <div className="space-y-2">
            {optionFields.map((field, optionIndex) => (
              <div key={field.id} className="flex gap-2 items-center">
                <input
                  type="text"
                  {...register(
                    `questions.${questionIndex}.options.${optionIndex}.text`,
                    { required: "Option text is required" }
                  )}
                  placeholder={`Option ${optionIndex + 1}`}
                  className="input input-bordered input-sm flex-1 focus:input-primary"
                  disabled={isTrueFalse}
                />
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register(
                      `questions.${questionIndex}.options.${optionIndex}.is_correct`
                    )}
                    className="checkbox checkbox-sm"
                  />
                  <span className="text-sm font-medium">Correct</span>
                </label>
                {optionFields.length > (isTrueFalse ? 2 : 1) && (
                  <button
                    type="button"
                    onClick={() => removeOption(optionIndex)}
                    className="btn btn-xs btn-ghost text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {!isTrueFalse && (
            <button
              type="button"
              onClick={() => appendOption({ text: "", is_correct: false })}
              className="btn btn-outline btn-sm w-full mt-4 gap-1"
            >
              <Plus size={16} />
              Add Option
            </button>
          )}
        </div>
      )}

      {isCoding && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
             Coding questions do not require predefined options
          </p>
        </div>
      )}
    </div>
  );
};