import React, { useEffect, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useResumeContext } from '../../../Context/ResumeProvider'
import { Trash } from 'lucide-react'

// Component for a single experience entry
const ExperienceEntry = ({ index, control, register, remove }) => {
  const { fields: descriptionFields, append: appendDescription, remove: removeDescription } = useFieldArray({
    control,
    name: `experience.${index}.description`
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-lg shadow-sm">
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

      {/* Description as Bullet Points */}
      <div className="flex flex-col md:col-span-2">
        <label className="label mb-1">Description (Bullet Points)</label>
        {descriptionFields.map((descItem, descIndex) => (
          <div key={descItem.id} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              placeholder="Enter a bullet point"
              className="input w-full rounded-lg shadow-sm"
              {...register(`experience.${index}.description.${descIndex}`, { required: true })}
            />
            {descriptionFields.length > 1 && (
              <button
                type="button"
                className="btn bg-red-100 text-white p-2"
                onClick={() => removeDescription(descIndex)}
              >
                <Trash className="text-red-600" size={16} />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="btn bg-blue-500 text-white text-sm px-4 py-1 mt-2"
          onClick={() => appendDescription('')}
        >
          + Add Bullet Point
        </button>
      </div>

      {/* Remove Experience Button */}
      {index > 0 && (
        <div className="md:col-span-2 flex justify-end">
          <button
            type="button"
            className="btn bg-red-100 text-white"
            onClick={() => remove(index)}
          >
            <Trash className="text-red-600" />
          </button>
        </div>
      )}
    </div>
  )
}

export default function ResumeExperienceForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      experience: [
        { company: '', position: '', startYear: '', endYear: '', description: [''] }
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
    addExperience(data.experience)
    setSubmit(false)
  }

  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit))
  }, [handleSubmit, setTriggerSubmit])

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-2">Experience</h2>

        {fields.map((item, index) => (
          <ExperienceEntry
            key={item.id}
            index={index}
            control={control}
            register={register}
            remove={remove}
          />
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
                description: ['']
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