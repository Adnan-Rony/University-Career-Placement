import React from "react";
import { Link } from "react-router";
import Button from "../../../Components/Ui/Button";

export const SkillCard = ({ skill }) => {
  console.log(skill);
  return (
    <div
      className="card w-full  bg-base-100
     shadow-sm hover:shadow-md transition"
    >
      <figure className="px-6 pt-6  ">
        <img
          src={
            skill?.icon_url ||
            "https://img.icons8.com/?size=80&id=1EUAqjY63hPZ&format=png"
          }
          alt={skill.name}
          className="rounded-xl h-32 w-32  object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{skill.name}</h2>
        <p className="text-gray-600">{skill.description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="badge badge-outline">{skill.category}</span>
          <span className="badge badge-secondary">{skill.difficulty}</span>
        </div>

        <div className="card-actions justify-end mt-4">
        
          <Link
            className="btn w-full text-white border-0 rounded-2xl
                   bg-gradient-to-r from-purple-600 to-indigo-600 
                   hover:from-purple-700 hover:to-indigo-700"
            to={`/skills/${skill._id}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};
