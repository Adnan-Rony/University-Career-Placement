import React from "react";

const JObFilterSidebar = () => {
  return (
    <div>
      <aside className=" bg-white p-5 rounded-lg shadow-sm space-y-6 h-full">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Search by Keywords
          </label>
          <input
            type="text"
            placeholder="Job title, keywords..."
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Location</label>
          <input
            type="text"
            placeholder="City or postcode"
            className="w-full border p-2 rounded"
          />
          <input type="range" min="0" max="200" className="w-full mt-2" />
          <div className="text-sm mt-1 text-center text-gray-600">
            Radius: 100km
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Category</label>
          <select className="w-full border p-2 rounded">
            <option>Choose a category</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Job type</label>
          <div className="space-y-1 text-sm text-gray-700">
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Freelancer
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Full Time
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Part Time
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" />
              Temporary
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Date Posted
          </label>
          <div className="space-y-1 text-sm text-gray-700">
            <label className="block">
              <input type="radio" name="date" className="mr-2" />
              All
            </label>
            <label className="block">
              <input type="radio" name="date" className="mr-2" />
              Last Hour
            </label>
            <label className="block">
              <input type="radio" name="date" className="mr-2" />
              Last 24 Hours
            </label>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default JObFilterSidebar;
