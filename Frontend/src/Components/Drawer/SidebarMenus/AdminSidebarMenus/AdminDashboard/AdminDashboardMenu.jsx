import React from "react";

export const AdminDashboardMenu = () => {
  const cardData = [
    {
      title: "Total Job Seekers",
      value: 1250,
      subtitle: "Registered users",
    
    },
    {
      title: "Placed Candidates",
      value: 890,
      subtitle: "71% placement rate",
     
    },
    {
      title: "Pending Applications",
      value: 156,
      subtitle: "Awaiting review",
     
    },
    {
      title: "Active Jobs",
      value: 450,
      subtitle: "Open positions",
     
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-[var(--color-r-primary)]">Admin Dashboard</h1>
        <p className="text-lg font-medium opacity-80 mt-3 text-[var(--color-text)]">
          Track job seekers, manage jobs, and monitor application progress
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl p-5 shadow-md border-1 border-gray-200  transition-transform hover:scale-[1.02]`}
          >
            <h2 className="text-xl font-semibold text-r-primary">{card.title}</h2>
            <p className="text-3xl font-bold mt-2">{card.value}</p>
            <p className="text-sm mt-1">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
