import React, { useState } from "react";
import ViewMyPortfolio from "./ViewMyPortfolio";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { UseMyPortfolio } from "../../hooks/usePortfolio";
import { Spinner } from "../../Components/loading/loader/Spinner";
import portfolioTemplates from "./templates.js";

export const SelectPortfolioTemp = () => {
  const { data: portfolioData, isLoading, isError, error } = UseMyPortfolio();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (template) => {
    setSelectedTemplate(template.id);
  };
     
  const handlenext = () => {

    if (!selectedTemplate) {
      toast.error("Please select a template first!");
      return;
    }
  };
  if(isLoading) return <Spinner/> 
  if (!portfolioData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
          <svg
            className="w-16 h-16 mx-auto mb-4 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            No Portfolio Data
          </h2>
          <p className="text-gray-600 mb-6">
            Please create your portfolio first before selecting a template.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
              Portfolio Templates
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Perfect Template
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a professional portfolio template that best represents your
            personal brand and showcase your work
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioTemplates.map((template, index) => (
            <div
              key={template.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 transform ${
                selectedTemplate === template.id
                  ? "scale-100 ring-2 ring-purple-600 shadow-2xl"
                  : "hover:scale-105 shadow-lg hover:shadow-2xl"
              }`}
              onClick={() => handleSelect(template)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <img
                  src={template.preview}
                  alt={template.name || `Template ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="bg-white p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-gray-900">
                    {template.name || `Modern Template ${index + 1}`}
                  </h3>
                  {selectedTemplate === template.id && (
                    <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-600">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Professional and modern design
                </p>

                {/* Button */}
                <button
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                    selectedTemplate === template.id
                      ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(template);
                  }}
                >
                  {selectedTemplate === template.id ? "Selected" : "Select"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-600">
            {selectedTemplate ? (
              <span className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Template selected - Ready to proceed</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2 text-orange-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Please select a template to continue</span>
              </span>
            )}
          </div>
   <Link to={`/selected-template/${selectedTemplate}`}>
          <button
            onClick={handlenext}
            disabled={!selectedTemplate}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 ${
              selectedTemplate
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105 cursor-pointer"
                : "bg-gray-200 text-gray-500 cursor-not-allowed opacity-50"
            }`}
          >
            <span>Next Step</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
   </Link>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
