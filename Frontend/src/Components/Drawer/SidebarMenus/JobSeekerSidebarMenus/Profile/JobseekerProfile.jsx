import React, { useState } from "react";
import { ProfileTab } from "./Tabs/ProfileTab";
import { ResumeCvTab } from "./Tabs/ResumeCvTab";
import { PreferencesTab } from "./Tabs/PreferencesTab";
import { OverViewTab } from "./Tabs/OverViewTab";

export const JobseekerProfile = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Profile", "Resume / CV", "Preferences"];
  console.log(activeTab);

  const renederTabsByClick = () => {
    switch (activeTab) {
      case "Overview":
        return <OverViewTab />;

      case "Profile":
        return <ProfileTab />;

      case "Resume / CV":
        return <ResumeCvTab />;

      // case "Profile":
      //   return <ProfileTab />

      case "Preferences":
        return <PreferencesTab />;
      default:
        return <OverViewTab />;
    }
  };
  return (
    <div className="md:px-5 p-4">
      <h1 className="text-3xl font-semibold  mb-6">
        Edit Your JobSeeker Profile Profile
      </h1>

      <div>
        <ul className="flex space-x-8 text-lg border-b">
          {tabs.map((tab, idx) => (
            <li
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-2 ${
                activeTab === tab
                  ? "border-b-4 border-r-primary font-semibold text-r-primary"
                  : "text-gray-600 hover:text-r-primary"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="border rounded-md border-gray-300 my-6 bg-white">
          {renederTabsByClick()}
        </div>
      </div>
    </div>
  );
};
