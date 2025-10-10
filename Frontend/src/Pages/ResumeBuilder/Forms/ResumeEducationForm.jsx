import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export default function ResumeEducationForm() {

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      education: [
        { degree: "", institution: "", startYear: "", endYear: "", grade: "" }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education"
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
 <div className="p-6 bg-gray-100 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        
        {fields.map((item, index) => (
          <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-white rounded-lg shadow-sm border">

            {/* Degree */}
            <div className="flex flex-col">
              <label className="label mb-1">Degree / Qualification</label>
              <input
                className="input w-full rounded-lg shadow-sm"
                {...register(`education.${index}.degree`, { required: true })}
              />
            </div>

            {/* Institution */}
            <div className="flex flex-col">
              <label className="label mb-1">Institution</label>
              <input
                className="input w-full rounded-lg shadow-sm"
                {...register(`education.${index}.institution`, { required: true })}
              />
            </div>

            {/* Start Year */}
            <div className="flex flex-col">
              <label className="label mb-1">Start Year</label>
              <input
                type="text"
                className="input w-full rounded-lg shadow-sm"
                {...register(`education.${index}.startYear`, { required: true })}
              />
            </div>

            {/* End Year */}
            <div className="flex flex-col">
              <label className="label mb-1">End Year</label>
              <input
                type="text"
                className="input w-full rounded-lg shadow-sm"
                {...register(`education.${index}.endYear`, { required: true })}
              />
            </div>

            {/* Grade */}
            <div className="flex flex-col md:col-span-2">
              <label className="label mb-1">Grade / CGPA</label>
              <input
                className="input w-full rounded-lg shadow-sm"
                {...register(`education.${index}.grade`)}
              />
            </div>

            {/* Remove button */}
            {fields.length > 1 && (
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  className="btn btn-error text-white"
                  onClick={() => remove(index)}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Add new education */}
        <div className="flex justify-between items-center mt-2">
          <button
            type="button"
            className="btn bg-[#0E7A81] text-white"
            onClick={() =>
              append({ degree: "", institution: "", startYear: "", endYear: "", grade: "" })
            }
          >
            + Add Education
          </button>

          <button type="submit" className="btn bg-[#0E7A81] text-white px-6">
            Save & Continue
          </button>
        </div>

      </form>
    </div>
  )
}
