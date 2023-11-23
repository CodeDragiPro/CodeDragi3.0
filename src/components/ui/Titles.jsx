import React from "react";

const Titles = ({ text, fontSize }) => {
  return (
    <div>
      <h1
        className={`bg-gradient-to-r from-codedragi-secondary via-codedragi-tertiary to-codedragi-quartary text-transparent bg-clip-text ${fontSize} font-bold uppercase text-center p-2 mt-2`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Titles;
