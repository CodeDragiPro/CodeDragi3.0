import React from "react";
import Titles from "./ui/Titles";
import Logo from "../assets/CodeDragi.png";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <img src={Logo} className="object-cover w-[60vh] mx-auto" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="italic">
          <h1
            className={`bg-gradient-to-r from-codedragi-secondary via-codedragi-tertiary to-codedragi-quartary text-transparent bg-clip-text  font-light border-none md:text-4xl text-2xl pb-4 text-center`}
          >
            une idée pourrais vous changer la vie
          </h1>
        </div>
        <h1 className="text-2xl text-white font-bold uppercase mb-2 text-center">
          Développeur Web & Front-End
        </h1>
        <Button text="07.62.26.61.95" />
      </div>
    </div>
  );
};

export default Hero;
