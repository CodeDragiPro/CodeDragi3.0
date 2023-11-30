import React from "react";
import Logo from "../assets/logoWeb.png";
import bgHero from '../assets/test.png';

const Hero = () => {
  return (
    <div className="relative">
      <div className="mt-8">
        <img src={Logo} className="object-cover w-[60vh] mx-auto" alt="Logo" />
      </div>
      <div className="inline-flex items-center justify-center w-full mt-6">
        <hr className="w-full h-px my-8 bg-white border-0"/>
        <span className="absolute px-2 font-medium text-white -translate-x-1/2  left-1/2 bg-codedragi-primary md:text-2xl text-xl text-center w-auto">UNE IDEE POURRAIT VOUS CHANGER LA VIE</span>
      </div>
      <div className="flex items-center justify-center relative mt-4">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-4">
          <h1 className="md:text-4xl text-2xl font-bold uppercase text-center  p-4 rounded  border-2 border-white">
            Développeur Web & Front-End
          </h1>
          
        </div>
        
        <img src={bgHero} className="object-cover w-full md:h-[50vh]" alt="Background" />
      </div>
    </div>
  );
};

export default Hero;
