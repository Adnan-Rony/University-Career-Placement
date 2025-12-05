import React from 'react'
import { useUserResumes } from '../../../../../hooks/useResume'
import { useCurrentUser } from '../../../../../hooks/useAuth'
import { Link } from 'react-router'
import { Edit2, Trash2, User, Eye } from "lucide-react";
export const ManageResume = () => {
    const {data:userdata}=useCurrentUser()
    const userId=userdata?.user._id

    const {data:myresume,isPending}=useUserResumes(userId)
    console.log(myresume);
    if(!myresume  ||myresume.length === 0){
        return <ResumeNotFound/>
    }
  return (
     <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Manage Resume
          </h1>
          <p className="text-gray-600">View and manage your professional resume</p>
        </div>

        {/* Resume Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <User className="w-8 h-8 text-white" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">
                    {myresume?.personalInfo?.fullName || "Unnamed Resume"}
                  </h2>
                  <p className="text-purple-100">
                    {myresume?.personalInfo?.jobTitle || "Job Title Missing"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              {myresume?.summary || "No summary added yet."}
            </p>

            {/* Last Updated */}
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Last updated:{" "}
                <span className="font-medium text-gray-700">
                  {new Date(myresume.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {/* Edit */}
              <Link
                to={`/resumebuilder/build-your-resume/${myresume?.templateId}`}
                className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md hover:shadow-lg"
              >
                <Edit2 className="w-4 h-4" />
                Edit Resume
              </Link>

              {/* View */}
              <a
                href={``}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                <Eye className="w-4 h-4" />
                View
              </a>

              {/* Delete */}
              <button
                className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-5 py-3 rounded-lg hover:bg-red-100 transition-colors font-medium"
                
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export const ResumeNotFound=()=>{
    return(
           <div className="text-center py-10">
      <p className="text-gray-600 mb-4">No resume found.</p>
      <Link
        to="/resumebuilder/selectoption"
        className="px-5 py-2 bg-purple-600 text-white rounded"
      >
        Create Your Resume
      </Link>
    </div> 
    )
}