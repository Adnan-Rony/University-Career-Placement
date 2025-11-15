import React from 'react'

export const QuizProgressBar = ({ current, total }) => {
 const progress = ((current + 1) / total) * 100;

  return (
    <div className="p-6 bg-white rounded-t-2xl">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-gray-800">
          JavaScript Assessment
        </h1>
        <span className="text-sm text-gray-600">
          Question {current + 1} of {total}
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full animate-pulse delay-500 h-2">
        <div
          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
