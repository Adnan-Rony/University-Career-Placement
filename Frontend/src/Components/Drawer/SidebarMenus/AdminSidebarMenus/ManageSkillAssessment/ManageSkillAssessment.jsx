import { useState } from "react";
import { AddSkill } from "./AddSkill";

import { Plus, HelpCircle, Settings } from "lucide-react";
export const ManageSkillAssessment = () => {
  const [activeTab, setActiveTab] = useState("addSkill");
  const tabs = [
    { id: "addSkill", label: "Add Skill", icon: Plus },
    { id: "addQuestion", label: "Add Question", icon: HelpCircle },
    { id: "manageSkills", label: "Manage Skills", icon: Settings }
  ];
  return (
    <div className="max-w-4xl mx-auto mt-6">
      {/* Tabs Header */}
   <div className="flex gap-2 mb-8 border-b-2 border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-all duration-300 border-b-2 -mb-0.5 ${
                isActive
                  ? "border-purple-500 text-purple-600 bg-purple-100 rounded-t-xl"
                  : "border-transparent text-gray-600 hover:text-gray-800 hover:bg-purple-50"
              }`}
            >
              <Icon size={20} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tabs Content */}
      <div className="p-4 border border-gray-300 rounded-lg">
        {activeTab === "addSkill" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Add Skill</h2>
            <AddSkill/>
          </div>
        )}
        {activeTab === "addQuestion" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Add Question</h2>
            <p>Add Question component goes here</p>
          </div>
        )}
        {activeTab === "manageSkills" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Manage Skills</h2>
            <p>Manage Questions component goes here</p>
          </div>
        )}
      </div>
    </div>
  );
};