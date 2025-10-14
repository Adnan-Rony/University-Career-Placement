import React, { useEffect, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useResumeContext } from '../../../Context/ResumeProvider'
import { Trash } from 'lucide-react'

export default function ResumeExperienceForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      experience: [
        { company: '', position: '', startYear: '', endYear: '', description: '' }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience'
  })

  const { addExperience, setSubmit, setTriggerSubmit } = useResumeContext()
  const formRef = useRef(null)

  const onSubmit = (data) => {
    data.experience.forEach((exp) => addExperience(exp))
    setSubmit(false)
  }

  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit))
  }, [])

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-2">Experience</h2>

        {fields.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1
             md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-sm "
          >
            {/* Company */}
            <div className="flex flex-col">
              <label className="label mb-1">Company</label>
              <input
                type="text"
                placeholder="Company Name"
                className="input w-full rounded-lg shadow-sm"
                {...register(`experience.${index}.company`, { required: true })}
              />
            </div>

            {/* Position */}
            <div className="flex flex-col">
              <label className="label mb-1">Position / Role</label>
              <input
                type="text"
                placeholder="e.g. Frontend Developer"
                className="input w-full rounded-lg shadow-sm"
                {...register(`experience.${index}.position`, { required: true })}
              />
            </div>

            {/* Start Year */}
            <div className="flex flex-col">
              <label className="label mb-1">Start Year</label>
              <input
                type="text"
                placeholder="YYYY"
                className="input w-full rounded-lg shadow-sm"
                {...register(`experience.${index}.startYear`, { required: true })}
              />
            </div>

            {/* End Year */}
            <div className="flex flex-col">
              <label className="label mb-1">End Year</label>
              <input
                type="text"
                placeholder="YYYY or Present"
                className="input w-full rounded-lg shadow-sm"
                {...register(`experience.${index}.endYear`, { required: true })}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col md:col-span-2">
              <label className="label mb-1">Description</label>
              <textarea
                placeholder="Describe your responsibilities and achievements"
                className="textarea textarea-bordered w-full rounded-lg shadow-sm"
                {...register(`experience.${index}.description`)}
              />
            </div>

            {/* Remove Button */}
            {fields.length > 1 && (
              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  className="btn bg-red-100 text-white"
                  onClick={() => remove(index)}
                >
                <Trash className='text-red-600'/>
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Add Experience + Submit */}
        <div className="flex justify-between items-center mt-2">
          <button
            type="button"
            className="btn bg-purple-700 text-white"
            onClick={() =>
              append({
                company: '',
                position: '',
                startYear: '',
                endYear: '',
                description: ''
              })
            }
          >
            + Add Experience
          </button>

          <button type="submit" className="btn bg-purple-700 text-white px-6">
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  )
}
