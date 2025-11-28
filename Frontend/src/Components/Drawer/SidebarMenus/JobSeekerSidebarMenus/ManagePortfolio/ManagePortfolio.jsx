import React from 'react'
import { UseMyPortfolio } from '../../../../../hooks/usePortfolio'
import { useNavigate } from 'react-router';
import { Edit2, Trash2, User, Eye, Calendar, Award } from 'lucide-react';
export const ManagePortfolio = () => {
    const {data}=UseMyPortfolio()
     const navigate = useNavigate();
  const handleEdit = () => {
    // navigate(`/create-portfolio/${data._id}`);
  };

  const handleDelete = () => {
    console.log("Delete portfolio", data._id);
    // implement delete API
  };
   const handleView = () => {
    console.log("View portfolio", data);
  };
    console.log(data);
  return (
 <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="container mx-auto">
        {/* Header */} 
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Manage Portfolio</h1>
          <p className="text-gray-600">View and manage your professional portfolio</p>
        </div>

        {/* Portfolio Card */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          {/* Card Header with Gradient */}
          <div className=" bg-gradient-to-r from-purple-600 to-purple-700 p-6">
           
          
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
               
               
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{data.basicInfo.name}</h2>
                  <p className="text-purple-100">{data.basicInfo.title}</p>
                </div>
              </div>
         
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              {data.basicInfo.bio}
            </p>

            {/* Stats Row */}
            {/* <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Eye className="w-4 h-4 text-purple-600" />
                  <p className="text-2xl font-bold text-gray-800">{data.views}</p>
                </div>
                <p className="text-sm text-gray-600">Profile Views</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <p className="text-2xl font-bold text-gray-800">{new Date(data.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                </div>
                <p className="text-sm text-gray-600">Created</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-purple-600" />
                  <p className="text-2xl font-bold text-gray-800">{data.completionScore}%</p>
                </div>
                <p className="text-sm text-gray-600">Complete</p>
              </div>
            </div> */}

            {/* Last Updated */}
            <div className="mb-6">
              <p className="text-sm text-gray-500">
                Last updated: <span className="font-medium text-gray-700">{new Date(data.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md hover:shadow-lg"
                onClick={handleEdit}
              >
                <Edit2 className="w-4 h-4" />
                Edit Portfolio
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-5 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                onClick={handleView}
              >
                <Eye className="w-4 h-4" />
                View
              </button>
              <button
                className="flex items-center justify-center gap-2 bg-red-50 text-red-600 px-5 py-3 rounded-lg hover:bg-red-100 transition-colors font-medium"
                onClick={handleDelete}
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          </div>

          {/* Completion Progress Bar */}
          {/* <div className="px-6 pb-6">
            <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purple-600 to-purple-500 h-full transition-all duration-500"
                style={{ width: `${data.completionScore}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Portfolio Completion Score
            </p>
          </div> */}
        </div>

        {/* Help Card */}
        <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-5">
          <h3 className="font-semibold text-purple-900 mb-2">💡 Quick Tip</h3>
          <p className="text-sm text-purple-700">
            A complete portfolio increases your visibility to recruiters. Try to reach 100% completion by adding all relevant information.
          </p>
        </div>
      </div>
    </div>
  )
}
