import React from 'react';
import { Link } from 'react-router-dom';
import { MdWorkOff } from 'react-icons/md';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
      <MdWorkOff className="text-6xl text-purple-600 mb-4" />

      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        No Jobs Found
      </h1>

      <p className="text-gray-600 mb-6">
        We couldn't find any job listings matching your filters or search.
      </p>

      
    </div>
  );
};

export default NotFound;
