const NavigationButtons = ({
  current,
  total,
  setCurrent,
  showExplanation,
  setShowExplanation,
  handleSubmit,
}) => {
  return (
    <div className="p-6 flex justify-between bg-white rounded-b-2xl">

      <button
        onClick={() => current > 0 && setCurrent(current - 1)}
        disabled={current === 0}
        className="px-6 py-2 border-2 rounded-lg select-none"
      >
        Previous
      </button>

      <button
        onClick={() => setShowExplanation(!showExplanation)}
        className="px-6 py-2 text-purple-600 select-none"
      >
        {showExplanation ? "Hide" : "Show"} Explanation
      </button>

      {current === total - 1 ? (
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded-lg select-none"
        >
          Submit
        </button>
      ) : (
        <button
          onClick={() => setCurrent(current + 1)}
          className="px-6 py-2 bg-purple-600 text-white rounded-lg select-none"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;
