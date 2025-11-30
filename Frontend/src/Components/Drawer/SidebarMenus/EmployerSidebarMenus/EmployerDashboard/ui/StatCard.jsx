import { FileText, Users, Clock, TrendingUp } from "lucide-react";

const icons = {
  file: FileText,
  users: Users,
  clock: Clock,
  trend: TrendingUp,
};

const StatCard = ({ icon: Icon, label, value, trend, color }) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium mb-1">{label}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {trend && (
          <p className={`text-xs mt-2 ${trend > 0 ? "text-green-600" : "text-red-600"}`}>
            {trend > 0 ? "↑" : "↓"} {Math.abs(trend)}% from last month
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
  </div>
);

export default StatCard
