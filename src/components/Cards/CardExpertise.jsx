import React from "react";

const CardExpertise = ({ image, title, text }) => {
  return (
    <div className="w-full max-w-lg   rounded-lg shadow bg-gray-900  border border-gray-700 overflow-hidden">
      <div className="group relative">
        <img className="object-cover w-full h-48" src={image} alt="" />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-75 transition-opacity group-hover:opacity-100">
          {/* Overlay */}
        </div>
      </div>
      <div className="px-5 pb-5 text-center p-2">
        <h5 className="text-2xl font-semibold tracking-tight  text-white uppercase">
          {title}
        </h5>
        <h5 className="text-lg tracking-tight  text-white mt-2">
          {text}
        </h5>
      </div>
    </div>
  );
};

export default CardExpertise;
