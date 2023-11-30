import React from "react";
import {
  SiTailwindcss,
  SiFirebase,
  SiMysql,
  SiNodedotjs,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiReact,
} from "react-icons/si";

const Steps = () => {
  const frontendSteps = [
    {
      title: "Html5",
      icon: <SiHtml5 />,
    },
    {
      title: "Css3",
      icon: <SiCss3 />,
    },
    {
      title: "Javascript",
      icon: <SiJavascript />,
    },
    {
      title: "React Js",
      icon: <SiReact />,
    },
  ];

  const backendSteps = [
    {
      title: "Node Js",
      icon: <SiNodedotjs />,
    },
    {
      title: "Express",
      icon: <SiExpress />,
    },
    {
      title: "Mongo Db",
      icon: <SiMongodb />,
    },
    {
      title: "Mysql",
      icon: <SiMysql />,
    },
  ];

  const webdesignSteps = [
    {
      title: "Figma",
      icon: <SiFigma />,
    },
    {
      title: "Photoshop",
      icon: <SiAdobephotoshop />,
    },
  ];

  return (
    <div className="flex items-start md:justify-evenly justify-between w-full">
      <div className="">
        <h1 className="text-bold text-white text-2xl uppercase">Fontend</h1>
        <ol className="relative text-white border-s border-white m-4">
          {frontendSteps.map((step, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4  bg-gray-700">
                {step.icon}
              </span>
              <h3 className="font-medium leading-tight">{step.title}</h3>
            </li>
          ))}
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4  bg-gray-700">
              <SiTailwindcss  />
            </span>
            <h3 className="font-medium leading-tight">Tailwind Css</h3>
          </li>
        </ol>
      </div>

      <div>
        <h1 className="text-bol text-white text-2xl uppercase">Backend</h1>
        <ol className="relative text-white border-s  border-white m-4">
          {backendSteps.map((step, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4  bg-gray-700">
                {step.icon}
              </span>
              <h3 className="font-medium leading-tight">{step.title}</h3>
            </li>
          ))}
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4  bg-gray-700">
              <SiFirebase />
            </span>
            <h3 className="font-medium leading-tight">Firebase</h3>
          </li>
        </ol>
      </div>
      <div>
        <h1 className="text-bol text-white text-2xl uppercase">WebDesign</h1>
        <ol className="relative text-white border-s  border-gray-700 m-4">
          {webdesignSteps.map((step, index) => (
            <li key={index} className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4  bg-gray-700">
                {step.icon}
              </span>
              <h3 className="font-medium leading-tight">{step.title}</h3>
            </li>
          ))}
          <li className="ms-6">
            <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -start-4 bg-gray-700">
              <SiAdobeillustrator  />
            </span>
            <h3 className="font-medium leading-tight">Illustrator</h3>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Steps;
