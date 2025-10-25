import React, { useState } from "react";
import { Stepper } from "react-form-stepper";

export const CreateJobSteps = () => {
  const [currentStep, setCurrentStep] = useState(0); // numeric index for activeStep

  const steps = [
    { label: "Form" },
    { label: "Payment" },
    { label: "Success" },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Stepper */}
      <Stepper steps={steps} activeStep={currentStep} />

      {/* Step content */}
      <div className="mt-8">
        {currentStep === 0 &&
         <div>Step 1: Job Form Component Here</div>}
        {currentStep === 1 && <div>Step 2: Payment Component Here</div>}
        {currentStep === 2 && <div>Step 3: Success Component Here</div>}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={currentStep === steps.length - 1}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};
