import { CheckCircle2, Circle, AlertCircle } from "lucide-react";

const QuestionCard = ({
  question,
  answers,
  setAnswers,
  showExplanation,
}) => {
  const handleAnswer = (id) => {
    if (question.type === "Multiple") {
      const old = answers[question._id] || [];
      const updated = old.includes(id)
        ? old.filter((x) => x !== id)
        : [...old, id];

      setAnswers({ ...answers, [question._id]: updated });
    } else {
      setAnswers({ ...answers, [question._id]: id });
    }
  };

  const isSelected = (id) => {
    if (question.type === "Multiple") {
      return (answers[question._id] || []).includes(id);
    }
    return answers[question._id] === id;
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-3">
        <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          {question.type}
        </span>
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {question.points} points
        </span>
      </div>

      <h2 className="text-xl font-semibold">{question.text}</h2>

      {question.type === "Coding" ? (
        <textarea
          className="w-full h-64 p-4 border rounded-lg"
          value={answers[question._id] || ""}
          onChange={(e) =>
            setAnswers({ ...answers, [question._id]: e.target.value })
          }
        />
      ) : (
        <div className="space-y-3">
          {question.options.map((o) => (
            <button
              key={o._id}
              onClick={() => handleAnswer(o._id)}
              className={`w-full p-4 rounded-lg border-2
                 flex text-left items-center gap-3 hover:border-purple-300
              ${
                isSelected(o._id)
                  ? "border-purple-500 bg-indigo-50"
                  : "border-gray-200"
              }`}
            >
              {isSelected(o._id) ? (
                <CheckCircle2 className="w-5 h-5 text-purple-500" />
              ) : (
                <Circle className="w-5 h-5 text-gray-300" />
              )}
              <span>{o.text}</span>
            </button>
          ))}
        </div>
      )}

      {showExplanation && (
        <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-blue-500" />
            <div>
              <p className="font-medium text-blue-900">Explanation</p>
              <p className="text-blue-800">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
