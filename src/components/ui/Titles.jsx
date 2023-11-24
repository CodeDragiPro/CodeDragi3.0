import React from "react";

const Titles = ({ text, fontSize, justify }) => {
  return (
    <div>
      <h1
        className={`bg-gradient-to-r from-codedragi-secondary via-codedragi-tertiary to-codedragi-quartary text-transparent bg-clip-text ${fontSize} font-bold uppercase text-${justify} pb-4`}
      >
        {text}
      </h1>
    </div>
  );
};

export default Titles;
