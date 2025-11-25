import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  useGetAssessmentQuestions,
  useSubmitSkillAssessment,
  useSubmitSkillAssessmentAnswers,
} from "../../hooks/useSkillAssesment";
import Loading from "../../Components/loading/Loading";
import {
  CheckCircle2,
  Circle,
  Code,
  AlertCircle,
  XCircle,
  Clock,
  TrendingUp,
  CheckCircle2Icon,
  Award,
  Home,
} from "lucide-react";
import NavigationButtons from "./Assessment.ui/NavigationButtons";
import { QuizProgressBar } from "./Assessment.ui/QuizProgressBar";
import QuestionCard from "./Assessment.ui/QuestionCard";


export const AllQuestions = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { attemptId } = location.state || {};
  const { data: questionsData, isLoading: isStarting } =
    useGetAssessmentQuestions(attemptId);
  const { mutate: saveAnswers } = useSubmitSkillAssessmentAnswers();

  const { mutate: fetchFinalResult } = useSubmitSkillAssessment();
  const questions = questionsData?.questions || [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resultData, setResultData] = useState(null);
  if (isStarting) return <Loading />;

  const question = questions[currentQuestion];
  const totalQuestions = questions.length;

  const formatAnswersForBackend = () => {
    return {
      answers: Object.entries(answers).map(
        ([question_id, selected_options]) => ({
          question_id,
          selected_options: Array.isArray(selected_options)
            ? selected_options
            : [selected_options], // handle MCQ (single select)
        })
      ),
    };
  };
  // ----------- Submit (NO Score) ------------
  // const handleSubmit = () => {
  //   setIsSubmitted(true);
  //   const formatted = formatAnswersForBackend();

  //   let payload = {
  //     attemptId,
  //     answers: formatted,
  //   };
  //   console.log(payload);
  //   mutate({
  //     attemptId,
  //     answers: formatted.answers,
  //   });
  // };
  const handleSubmit = () => {
    setIsSubmitted(true);
    const formatted = formatAnswersForBackend();

    // 1️⃣ Save answers
    saveAnswers(
      { attemptId, answers: formatted.answers },
      {
        onSuccess: () => {
          // 2️⃣ Fetch final result after answers saved
          fetchFinalResult(
            { attemptId },
            {
              onSuccess: (data) => setResultData(data),
              onError: (err) =>
                console.error("Error fetching final result:", err),
            }
          );
        },
        onError: (err) => console.error("Error saving answers:", err),
      }
    );
  };

  const getGradeColor = (percentage) => {
    if (percentage >= 90) return "from-green-500 to-emerald-600";
    if (percentage >= 75) return "from-blue-500 to-indigo-600";
    if (percentage >= 60) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-pink-600";
  };

  const getGradeLabel = (percentage) => {
    if (percentage >= 90) return "Excellent";
    if (percentage >= 75) return "Good";
    if (percentage >= 60) return "Fair";
    return "Needs Improvement";
  };

  console.log(resultData);
  // ----------- Submitted Page ------------
  if (isSubmitted) {
    if (!resultData) {
      return <Loading />; //
    }

    const { data } = resultData; // এখন safe
    const correctCount = data.results.filter((q) => q.is_correct).length;
    const incorrectCount = data.results.length - correctCount;

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
            {/* Score Banner */}
            <div
              className={`bg-gradient-to-r ${getGradeColor(
                data.percentage
              )} p-8 text-white relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>

              <div className="relative z-10 text-center">
                <Award className="w-16 h-16 mx-auto mb-4 animate-bounce" />
                <h1 className="text-4xl font-bold mb-2">
                  Assessment Completed!
                </h1>
                <p className="text-white/90 text-lg mb-6">
                  Great job on completing the assessment
                </p>

                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/30">
                  <div className="text-6xl font-bold mb-2">
                    {data.percentage}%
                  </div>
                  <div className="text-xl font-semibold">
                    {getGradeLabel(data.percentage)}
                  </div>
                  <div className="text-sm mt-2 opacity-90">
                    {data.totalScore} out of {data.maxScore} points
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <CheckCircle2Icon className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">
                  {correctCount}
                </div>
                <div className="text-xs text-gray-600">Correct</div>
              </div>

              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">
                  {incorrectCount}
                </div>
                <div className="text-xs text-gray-600">Incorrect</div>
              </div>

              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">
                  {data.answeredQuestions}/{data.totalQuestions}
                </div>
                <div className="text-xs text-gray-600">Answered</div>
              </div>

              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <Clock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">
                  {Math.floor(data.timeTaken / 60)}:
                  {String(data.timeTaken % 60).padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-600">Time Taken</div>
              </div>
            </div>
          </div>

          {/* Questions Review */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              Detailed Review
            </h2>

            <div className="space-y-4">
              {data.results.map((q, index) => (
                <div
                  key={q.question_id}
                  className={`rounded-2xl border-2 transition-all hover:shadow-lg ${
                    q.is_correct
                      ? "border-green-200 bg-green-50/50"
                      : "border-red-200 bg-red-50/50"
                  }`}
                >
                  <div className="p-6">
                    {/* Question Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          q.is_correct
                            ? "bg-gradient-to-br from-green-500 to-emerald-600"
                            : "bg-gradient-to-br from-red-500 to-pink-600"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg mb-2">
                          {q.question_text}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {q.is_correct ? (
                          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            <CheckCircle2 className="w-4 h-4" />
                            Correct
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                            <XCircle className="w-4 h-4" />
                            Incorrect
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Answers */}
                    <div className="ml-14 space-y-3">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="text-sm font-semibold text-gray-600 mb-1">
                          Your Answer
                        </div>
                        <div
                          className={`font-medium ${
                            q.is_correct ? "text-green-700" : "text-red-700"
                          }`}
                        >
                          {q.user_answer.join(", ")}
                        </div>
                      </div>

                      {!q.is_correct && (
                        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                          <div className="text-sm font-semibold text-green-800 mb-1">
                            Correct Answer
                          </div>
                          <div className="font-medium text-green-700">
                            {q.correct_answer.join(", ")}
                          </div>
                        </div>
                      )}

                      {q.explanation && (
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <div className="text-sm font-semibold text-blue-800 mb-1">
                            💡 Explanation
                          </div>
                          <div className="text-gray-700 text-sm leading-relaxed">
                            {q.explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Ui
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg">
        {/* Header, Progress Bar */}
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
