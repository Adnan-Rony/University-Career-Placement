import React from 'react'

export default function ResumeAboutForm() {
  return (
     <div className="p-6 bg-gray-100 rounded-lg">
    <h2 className="text-xl font-bold mb-2">About You</h2>
    <input type="text" placeholder="Full Name" className="input input-bordered w-full mb-2" />
    <input type="email" placeholder="Email" className="input input-bordered w-full mb-2" />
    <textarea placeholder="Summary" className="textarea textarea-bordered w-full" />
  </div>
  )
}
