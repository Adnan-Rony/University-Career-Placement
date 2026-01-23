import React from "react";

export const Heading = ({ title, subtitle }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 text-center my-6 sm:my-8 md:my-10">
      <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
        {title}
      </h1>

      {subtitle && (
        <p className="font-roboto mt-2 text-sm sm:text-base md:text-lg text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
};
