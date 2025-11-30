import React from 'react'

export const PortfolioNavigation = ({ step, steps, nextStep, prevStep }) => {
  return (
    <div className="flex justify-between mt-6">
      {step > 0 && (
        <button
          type="button"
          onClick={prevStep}
          className="btn btn-outline"
        >
          Previous
        </button>
      )}

      {step < steps.length - 1 && (
        <button
          type="button"
          onClick={nextStep}
          className="btn btn-primary border-none bg-gradient-to-r from-[#7405de] to-[#a626ec]"
        >
          Next
        </button>
      )}

      {step === steps.length - 1 && (
        <button
          type="submit"
          className="btn btn-primary border-none bg-gradient-to-r from-[#7405de] to-[#a626ec]"
        >
          Save Portfolio
        </button>
      )}
    </div>
  )
}
