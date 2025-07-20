import { useContext } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { ProfileContext } from "../../../../../../Context/ProfileProvider"

export const WorkExperienceForm = () => {
  const { profileData, updateProfileSection } = useContext(ProfileContext)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      workExperience: profileData.workExperience || [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "workExperience",
  })

  const onSubmit = (data) => {
    updateProfileSection("workExperience", data.workExperience)
  }

  return (
    <div className="p-6 flex">
      <div className="w-2/6">
        <h1 className="text-2xl font-bold">Work Experience</h1>
        <p className="text-gray-500 mb-4">
          What jobs or internships have you done?
        </p>
      </div>

      <div className="w-full px-8">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          {fields.map((field, index) => (
            <section key={field.id} className="mb-6 rounded">
              {/* Company Name */}
              <div className="flex flex-col mb-3 space-y-1">
                <label className="text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="input input-bordered w-full"
                  {...register(`workExperience.${index}.company`, { required: "Company name is required" })}
                />
                {errors.workExperience?.[index]?.company && (
                  <p className="text-red-500 text-sm">{errors.workExperience[index].company.message}</p>
                )}
        </div>

              {/* Job Title */}
              <div className="flex flex-col mb-3 space-y-1">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  placeholder="Job Title"
                  className="input input-bordered w-full"
                  {...register(`workExperience.${index}.title`, { required: "Title is required" })}
                />
                {errors.workExperience?.[index]?.title && (
                  <p className="text-red-500 text-sm">{errors.workExperience[index].title.message}</p>
                )}
              </div>

              {/* Start Date */}
              <div className="flex flex-col mb-3 space-y-1">
                <label className="text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                  {...register(`workExperience.${index}.startDate`, { required: "Start date is required" })}
                />
                {errors.workExperience?.[index]?.startDate && (
                  <p className="text-red-500 text-sm">{errors.workExperience[index].startDate.message}</p>
                )}
              </div>

              {/* End Date */}
              <div className="flex flex-col mb-3 space-y-1">
                <label className="text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                  {...register(`workExperience.${index}.endDate`, { required: "End date is required" })}
                />
                {errors.workExperience?.[index]?.endDate && (
                  <p className="text-red-500 text-sm">{errors.workExperience[index].endDate.message}</p>
                )}
              </div>

              {/* Description */}
              <div className="flex flex-col mb-3 space-y-1">
                <label className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  placeholder="Describe your role/responsibilities"
                  className="textarea textarea-bordered w-full"
                  {...register(`workExperience.${index}.description`, { required: "Description is required" })}
                ></textarea>
                {errors.workExperience?.[index]?.description && (
                  <p className="text-red-500 text-sm">{errors.workExperience[index].description.message}</p>
                )}
              </div>

              {/* Remove button */}
              {index > 0 && (
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="btn btn-error btn-sm mt-2"
                >
                  Remove
                </button>
              )}
            </section>
          ))}

          <div className="grid-cols-2 mt-4 flex gap-4">
            <button
              type="button"
              onClick={() =>
                append({
                  company: "",
                  title: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                })
              }
              className="btn btn-outline"
            >
              + Add More
            </button>

            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
