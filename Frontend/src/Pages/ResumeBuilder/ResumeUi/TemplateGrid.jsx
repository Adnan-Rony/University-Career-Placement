import React from "react";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

export const TemplateGrid = ({ templatesData }) => {
  return (
    <LightGallery
      speed={500}
      plugins={[lgZoom]}
      elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {templatesData.map((template) => (
        <a
          key={template.id}
          href={template.image} 
          className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow border border-purple-100 group relative block"
        >
          <img
            src={template.image}
            alt={template.title}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-purple-100/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg cursor-pointer">
            <button className="bg-white px-4 py-2 rounded-lg font-medium shadow hover:bg-gray-100">
              Preview
            </button>
          </div>
        </a>
      ))}
    </LightGallery>
  );
};
