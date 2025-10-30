import React, { useEffect, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useResumeContext } from '../../../Context/ResumeProvider'
import { Delete, DeleteIcon, Trash } from 'lucide-react'

export default function ResumeProjectForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      projects: [
        { title: '', description: '', link: '' }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projects'
  })

  const { addProject, setSubmit, setTriggerSubmit } = useResumeContext()
  const formRef = useRef(null)

  const onSubmit = (data) => {
    // data.projects.forEach((proj) => addProject(proj))
    addProject(data.projects)
    setSubmit(false)
  }

  useEffect(() => {
    setTriggerSubmit(() => handleSubmit(onSubmit))
  }, [])

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Projects</h2>

        {fields.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-1 gap-4 bg-white p-4
             rounded-lg shadow-sm "
          >
            {/* Project Title */}
            <div className="flex flex-col">
              <label className="label mb-1">Project Title</label>
              <input
                type="text"
                placeholder="e.g. Portfolio Website"
                className="input w-full rounded-lg shadow-sm"
                {...register(`projects.${index}.title`, { required: true })}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col">
              <label className="label mb-1">Description</label>
              <textarea
                placeholder="Short project summary or features..."
                className="textarea textarea-bordered w-full rounded-lg shadow-sm"
                {...register(`projects.${index}.description`, { required: true })}
              />
            </div>

            {/* Project Link */}
            <div className="flex flex-col">
              <label className="label mb-1">Project Link (optional)</label>
              <input
                type="url"
                placeholder="https://yourprojectlink.com"
                className="input w-full rounded-lg shadow-sm"
                {...register(`projects.${index}.link`)}
              />
            </div>

            {/* Remove Button */}
            {fields.length > 1 && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="btn bg-red-100  text-white"
                  onClick={() => remove(index)}
                >
                <Trash className='text-red-600'/>
                </button>
              </div>
            )}
          </div>
        ))}

        {/* Add New Project + Submit */}
        <div className="flex justify-between items-center mt-2">
          <button
            type="button"
            className="btn bg-purple-700 text-white"
            onClick={() =>
              append({ title: '', description: '', link: '' })
            }
          >
            + Add Project
          </button>

         
        </div>
      </form>
    </div>
  )
}
