import React, { useEffect, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useResumeContext } from '../../../Context/ResumeProvider'
import { FileText, Trash, PlusCircle } from 'lucide-react'

// Single Experience Entry Component
const ExperienceEntry = ({ index, control, register, remove }) => {
  const { fields: descriptionFields, append: appendDescription, remove: removeDescription } =
    useFieldArray({
      control,
      name: `experience.${index}.description`,
    })

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 space-y-4">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Company */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Company</label>
          <input
            type="text"
            placeholder="Company Name"
            className="px-4 py-2.5 border rounded-lg w-full transition-all duration-200 
            focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-gray-400 border-gray-300"
            {...register(`experience.${index}.company`, { required: true })}
          />
        </div>

        {/* Position */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Position / Role</label>
          <input
            type="text"
            placeholder="e.g. Frontend Developer"
            className="px-4 py-2.5 border rounded-lg w-full transition-all duration-200 
            focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-gray-400 border-gray-300"
            {...register(`experience.${index}.position`, { required: true })}
          />
        </div>

        {/* Start Year */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">Start Year</label>
          <input
            type="text"
            placeholder="YYYY"
            className="px-4 py-2.5 border rounded-lg w-full transition-all duration-200 
            focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-gray-400 border-gray-300"
            {...register(`experience.${index}.startYear`, { required: true })}
          />
        </div>

        {/* End Year */}
        <div className="flex flex-col space-y-1">
          <label className="text-sm font-medium text-gray-700">End Year</label>
          <input
            type="text"
            placeholder="YYYY or Present"
            className="px-4 py-2.5 border rounded-lg w-full transition-all duration-200 
            focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-gray-400 border-gray-300"
            {...register(`experience.${index}.endYear`, { required: true })}
          />
        </div>
      </div>

      {/* Description List */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Description (Bullet Points)
        </label>

        {descriptionFields.map((descItem, descIndex) => (
          <div key={descItem.id} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Enter a bullet point..."
              className="px-4 py-2.5 border rounded-lg w-full transition-all duration-200 
              focus:outline-none focus:ring-2 focus:ring-purple-500 hover:border-gray-400 border-gray-300"
              {...register(`experience.${index}.description.${descIndex}`, { required: true })}
            />
            {descriptionFields.length > 1 && (
              <button
                type="button"
                className="bg-red-100 p-2 rounded-lg"
                onClick={() => removeDescription(descIndex)}
              >
                <Trash className="text-red-600" size={16} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => appendDescription('')}
          className="flex items-center gap-2 text-purple-700 font-medium hover:underline"
        >
          <PlusCircle size={18} /> Add Bullet Point
        </button>
      </div>

      {/* Remove Entire Experience Block */}
      {index > 0 && (
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-red-100 p-2 rounded-lg"
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
  const { addExperience, setSubmit, setTriggerSubmit,resumeData } = useResumeContext()
  const { register, control, handleSubmit,reset } = useForm()
 const formRef = useRef(null)
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'experience',
  })

  useEffect(() => {
  if (resumeData?.experience) {
    reset({
      experience: resumeData.experience.map(item => ({
        company: item.company || "",
        position: item.position || "",
        startYear: item.startYear || "",
        endYear: item.endYear || "",
        description: item.description || [], // array of strings
        _id: item._id || ""
      }))
    });
  }
}, [resumeData, reset]);

 

  const onSubmit = (data) => {
    addExperience(data.experience)
    setSubmit(false)
  }

  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit))
  }, [])

  return (
    <div className="max-w-5xl mx-auto p-2 sm:p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-5 rounded-t-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <FileText className="w-6 h-6" /> Experience
        </h2>
        <p className="text-blue-100 mt-1 text-sm">Add your professional work experience</p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white border border-gray-200 rounded-b-xl shadow-xl p-6 sm:p-8 space-y-6"
      >
        {fields.map((item, index) => (
          <ExperienceEntry
            key={item.id}
            index={index}
            register={register}
            control={control}
            remove={remove}
          />
        ))}

        {/* Footer Buttons */}
        <div className="flex justify-between items-center pt-2">
          <button
            type="button"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-800"
            onClick={() =>
              append({
                company: '',
                position: '',
                startYear: '',
                endYear: '',
                description: [''],
              })
            }
          >
            + Add Experience
          </button>
        </div>
      {/* Tip */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-sm text-purple-800">
            <strong>Tip:</strong> Try to include at least <strong>3 bullet points</strong> for each experience role.  
  Highlight measurable achievements, responsibilities, and impact.
          </div>
      </form>
      
    </div>
  )
}
