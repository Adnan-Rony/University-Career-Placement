import React from "react";
import { Link } from "react-router-dom";

export const SectionTitle = ({ title, subtitle, nextpage, nextpageLink }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between gap-2 items-center">
        <h1 className="lg:text-3xl text-xl font-semibold">{title}</h1>

        {nextpage && nextpageLink && (
          <Link
            to={nextpageLink}
            className="text-sm font-medium border text-r-accent py-2 px-3 rounded-lg hover:bg-r-accent transition hover:text-white"
          >
            {nextpage}
          </Link>
        )}
      </div>

      {subtitle && (
        <h3 className="text-r-accent font-semibold mt-4">
          {subtitle}
        </h3>
      )}
    </div>
  );
};
