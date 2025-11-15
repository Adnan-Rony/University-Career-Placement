import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useGetAssessmentQuestions } from "../../hooks/useSkillAssesment";
import Loading from "../../Components/loading/Loading";
import { CheckCircle2, Circle, Code, AlertCircle } from "lucide-react";
import NavigationButtons from "./Assessment.ui/NavigationButtons";
import { QuizProgressBar } from "./Assessment.ui/QuizProgressBar";
import QuestionCard from "./Assessment.ui/QuestionCard";

export const AllQuestions = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { attemptId } = location.state || {};
  const { data: questionsData, isLoading: isStarting } =
    useGetAssessmentQuestions(attemptId);

  const questions = questionsData?.questions || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isStarting) return <Loading />;

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;

  // ----------- Submit (NO Score) ------------
  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log(answers);
    // Later: Send answers to backend
    // submitAnswers(attemptId, answers)
  };

  // ----------- Submitted Page ------------
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Submitted Successfully!
          </h1>
          <p className="text-gray-600 mb-6">Your answers have been recorded.</p>

          <button
            onClick={() => navigate(-1)}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // ----------- MAIN QUIZ UI ------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Header+ Progress Bar */}
        <QuizProgressBar current={currentQuestion} total={totalQuestions} />

        {/* Question Card */}

        <QuestionCard
          question={question}
          answers={answers}
          setAnswers={setAnswers}
          showExplanation={showExplanation}
        />
        <NavigationButtons
          current={currentQuestion}
          total={totalQuestions}
          setCurrent={setCurrentQuestion}
          showExplanation={showExplanation}
          setShowExplanation={setShowExplanation}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
