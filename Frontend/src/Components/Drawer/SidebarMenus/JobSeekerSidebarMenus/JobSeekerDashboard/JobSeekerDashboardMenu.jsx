import React from "react";
import { useUserStatistics } from "../../../../../hooks/useStatistics";
import { Spinner } from "../../../../loading/loader/Spinner";
import { Briefcase, TrendingUp, Target, Award } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,ResponsiveContainer,
} from "recharts";
export const JobSeekerDashboardMenu = () => {
  const { data: stats, isPending } = useUserStatistics();
console.log(stats);


  const applicationData = [
    { name: "Pending", count: stats?.pendingApplications || 0 },
    { name: "Accepted", count: stats?.acceptedApplications || 0 },
    { name: "Rejected", count: stats?.rejectedApplications || 0 },
  ];
  // === Skill Stats for PieChart ===
  const skillData = [
    { name: "Completed Attempts", value: stats?.skillStats?.completedAttempts || 0 },
    { name: "Remaining Attempts",
       value: (stats?.skillStats?.totalAttempts || 0) - (stats?.skillStats?.completedAttempts || 0) },
  ];

  
  const totalApplications =
    (stats?.pendingApplications || 0) +
    (stats?.acceptedApplications || 0) +
    (stats?.rejectedApplications || 0);

 const COLORS = ["#eab308", "#22c55e", "#ef4444"];
  const PIE_COLORS = ["#7c3aed", "#e879f9"];

  if (isPending) return <Spinner/>;
  return (
 <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome back, <span className="text-purple-200">{stats?.user?.name}</span>!
          </h1>
          <p className="text-purple-100">Here's your job search overview</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600 hover:shadow-xl transition-all hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium uppercase">Total Applications</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">{totalApplications}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 hover:shadow-xl transition-all hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium uppercase">Pending</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {stats?.pendingApplications || 0}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-xl transition-all hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium uppercase">Accepted</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {stats?.acceptedApplications || 0}
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Target className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-600 hover:shadow-xl transition-all hover:scale-105">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium uppercase">Avg Score</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {stats?.skillStats?.averagePercentage?.toFixed(1)}%
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Applications Bar Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-1 h-8 bg-purple-600 rounded-full mr-3"></div>
              Application Status
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis allowDecimals={false} stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {applicationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Skill Stats Pie Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-1 h-8 bg-purple-600 rounded-full mr-3"></div>
              Skill Assessment Progress
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={skillData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {skillData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={PIE_COLORS[index % PIE_COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">Completion Rate:</span>
                <span className="text-2xl font-bold text-purple-600">
                  {(
                    ((stats?.skillStats?.completedAttempts || 0) /
                      (stats?.skillStats?.totalAttempts || 1)) *
                    100
                  ).toFixed(0)}
                  %
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
