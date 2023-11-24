import React from "react";

const CardExpertise = ({image, title, text}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="" src={image} alt="" />
      <div className="px-5 pb-5 text-center p-2">
        <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h5 className="text-lg  tracking-tight text-gray-900 dark:text-white mt-2">
          {text}
        </h5>
      </div>
    </div>
  );
};

export default CardExpertise;
