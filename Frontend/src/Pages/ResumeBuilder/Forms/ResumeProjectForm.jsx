import React, { useEffect, useRef } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useResumeContext } from '../../../Context/ResumeProvider'
import { FileText, Trash2, PlusCircle } from 'lucide-react'

export default function ResumeProjectForm() {
   const { addProject, setSubmit, setTriggerSubmit ,resumeData} = useResumeContext()
  const { register, control, handleSubmit,reset } = useForm()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'projects'
  })
useEffect(() => {
  if (resumeData?.projects) {
    reset({
      projects: resumeData.projects.map(item => ({
        title: item.title || "",
        description: item.description || "",
        link: item.link || "",
        _id: item._id || ""
      }))
    });
  }
}, [resumeData, reset]);

 
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
<div className="max-w-5xl mx-auto p-2 sm:p-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-5">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-6 h-6" /> Projects
          </h2>
          <p className="text-blue-100 mt-1 text-sm">
            Add your completed or ongoing projects
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 sm:p-8 space-y-8"
        >
          {fields.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm space-y-4"
            >
              {/* Title */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Project Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Portfolio Website"
                  className="px-4 py-2.5 border rounded-lg w-full bg-white transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             hover:border-gray-400"
                  {...register(`projects.${index}.title`, { required: true })}
                />
              </div>

              {/* Description */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  rows="4"
                  placeholder="Short project summary or features..."
                  className="px-4 py-3 border rounded-lg w-full bg-white resize-none 
                             transition-all duration-200 focus:outline-none focus:ring-2
                             focus:ring-purple-500 focus:border-transparent hover:border-gray-400"
                  {...register(`projects.${index}.description`, {
                    required: true,
                  })}
                />
              </div>

              {/* Link */}
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Project Link (optional)
                </label>
                <input
                  type="url"
                  placeholder="https://yourproject.com"
                  className="px-4 py-2.5 border rounded-lg w-full bg-white transition-all duration-200
                             focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                             hover:border-gray-400"
                  {...register(`projects.${index}.link`)}
                />
              </div>

              {/* Remove */}
              {fields.length > 1 && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="p-2 bg-red-100 hover:bg-red-200 rounded-lg"
                  >
                    <Trash2 className="w-5 h-5 text-red-600" />
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Add Project Button */}
          <button
            type="button"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg shadow-md transition-all"
            onClick={() => append({ title: "", description: "", link: "" })}
          >
            <PlusCircle className="w-5 h-5" /> Add Project
          </button>

          {/* Tip Section */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg text-sm text-purple-800">
            <strong>Tip:</strong> Add details like tech stack, your role, and project impact.
          </div>
        </form>
      </div>
    </div>
  )
}
