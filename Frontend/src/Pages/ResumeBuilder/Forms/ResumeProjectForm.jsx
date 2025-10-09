import React from 'react'

export default function ResumeProjectForm() {
  return (
 <div className="p-6 bg-gray-100 rounded-lg">
    <h2 className="text-xl font-bold mb-2">Projects</h2>
    <input type="text" placeholder="Project Title" className="input input-bordered w-full mb-2" />
    <textarea placeholder="Description" className="textarea textarea-bordered w-full" />
  </div>
  )
}
