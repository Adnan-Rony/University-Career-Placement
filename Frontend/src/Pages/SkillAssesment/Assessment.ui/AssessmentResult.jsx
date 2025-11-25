// AssessmentResult.jsx
import React from "react";
import { Award, CheckCircle2, XCircle, TrendingUp, Clock } from "lucide-react";
import Loading from "../../../Components/loading/Loading";


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

const AssessmentResult = ({ resultData, isSubmitted }) => {
  if (!isSubmitted) return null;

  if (!resultData) return <Loading />;

  const { data } = resultData;
  const correctCount = data.results.filter((q) => q.is_correct).length;
  const incorrectCount = data.results.length - correctCount;

  return (
<div>
  ha
</div>
  );
};

