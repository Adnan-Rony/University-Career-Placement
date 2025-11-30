import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Users, FileText, Clock } from "lucide-react";
import { useEmployerStatistics } from "../../../../../hooks/useStatistics";
import ChartCard from "./ui/ChartCard";
import ApplicationStatusChart from "./ui/ApplicationStatusChart";
import StatusBreakdown from "./ui/StatusBreakdown";
import { JobsOverTimeChart } from "./ui/JobsOverTimeChart";
import StatCard from "./ui/StatCard";
import DashboardHeader from "./ui/DashboardHeader";

export const EmployerDashboardMenu = () => {
  const { data: employerStat, isPending } = useEmployerStatistics();
  const [hoveredStatus, setHoveredStatus] = useState(null);

  const jobsOverTime = employerStat?.jobsOverTime || [];
  const appStats = employerStat?.appStats || [];
  const totalApplicants = employerStat?.totalApplicants?.[0]?.total || 0;

  const jobsOverTimeData = jobsOverTime.map((item) => ({
    month: item._id,
    totalJobs: item.totalJobs,
  }));

  const appStatusData = appStats.map((item) => ({
    status: item._id,
    count: item.count,
  }));

  const totalJobs = jobsOverTimeData.reduce((sum, i) => sum + i.totalJobs, 0);
  const totalApplications = appStatusData.reduce((sum, i) => sum + i.count, 0);
  const pendingApplications =
    appStatusData.find((i) => i.status === "Pending")?.count || 0;

  const COLORS = {
    pending: "#f59e0b",
    approved: "#10b981",
    rejected: "#ef4444",
    primary: "#8b5cf6",
    secondary: "#6366f1",
  };

  const chartColors = [COLORS.pending, COLORS.approved, COLORS.rejected];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900 text-white p-3 rounded-lg shadow-lg text-sm">
          <p className="font-semibold">
            {payload[0].payload.month || payload[0].payload.status}
          </p>
          <p className="text-blue-300">
            {payload[0].name}: {payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-8">
      {/* --------------------
          WELCOME SECTION 
      --------------------- */}

      <DashboardHeader subtitle={"Monitor your job postings and applications in real-time"}/>

      {/* --------------------
          STAT CARDS
      --------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={FileText}
          label="Total Jobs Posted"
          value={totalJobs}
          trend={12}
          color="bg-purple-500"
        />
        <StatCard
          icon={Users}
          label="Total Applicants"
          value={totalApplicants}
          trend={8}
          color="bg-blue-500"
        />
        <StatCard
          icon={Clock}
          label="Pending Applications"
          value={pendingApplications}
          trend={-3}
          color="bg-amber-500"
        />
        <StatCard
          icon={TrendingUp}
          label="Total Applications"
          value={totalApplications}
          trend={15}
          color="bg-green-500"
        />
      </div>

      {/* --------------------
          JOBS OVER TIME + REACH
      --------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <ChartCard
            title="Jobs Posted Over Time"
            subtitle="Trend of your job postings"
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={jobsOverTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="totalJobs"
                  stroke={COLORS.primary}
                  strokeWidth={3}
                  dot={{ fill: COLORS.primary, r: 5 }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
            {/* <JobsOverTimeChart COLORS={COLORS} data={jobsOverTimeData} /> */}
          </ChartCard>
        </div>

        <ChartCard title="Total Reach" subtitle="Overall applicants">
          <div className="flex flex-col items-center justify-center h-[300px]">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-10"></div>
              <div className="text-center">
                <p className="text-4xl font-bold text-gray-900">
                  {totalApplicants}
                </p>
                <p className="text-gray-600 text-sm mt-2">Applicants</p>
              </div>
            </div>
            <div className="mt-6 w-full text-center">
              <p className="text-xs text-gray-500">Active profiles reached</p>
              <p className="text-sm font-semibold text-gray-900 mt-1">
                +24% this month
              </p>
            </div>
          </div>
        </ChartCard>
      </div>

      {/* --------------------
          APPLICATION STATUS + BREAKDOWN 
      --------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="Application Status">
          <ApplicationStatusChart data={appStatusData} />
        </ChartCard>

        <ChartCard title="Status Breakdown">
          <StatusBreakdown
            data={appStatusData}
            hoveredStatus={hoveredStatus}
            setHoveredStatus={setHoveredStatus}
          />
        </ChartCard>
      </div>
    </div>
  );
};
