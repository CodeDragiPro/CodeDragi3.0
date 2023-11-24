import React from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiFirebase, SiMysql, SiNodedotjs, SiAdobeillustrator, SiAdobephotoshop, SiFigma  } from "react-icons/si";

const Steps = () => {
  return (
<ol className="relative text-white border-s border-gray-200 dark:border-gray-700 ">                  
    <li className="mb-10 ms-6">            
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <IoLogoJavascript size={20}/>
        </span>
        <h3 className="font-medium leading-tight">Javascript</h3>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <FaReact size={20}/>
        </span>
        <h3 className="font-medium leading-tight">React js</h3>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <SiTailwindcss/>
        </span>
        <h3 className="font-medium leading-tight">Tailwind css</h3>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <SiNodedotjs/>
        </span>
        <h3 className="font-medium leading-tight">Node js</h3>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <SiFirebase/>
        </span>
        <h3 className="font-medium leading-tight">Firebase</h3>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <SiMysql/>
        </span>
        <h3 className="font-medium leading-tight">Mysql</h3>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <SiAdobeillustrator/>
        </span>
        <h3 className="font-medium leading-tight">Adobe Illustrator</h3>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <SiAdobephotoshop/>
        </span>
        <h3 className="font-medium leading-tight">Adobe Photoshop</h3>
    </li>
    <li className="ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4  dark:bg-gray-700">
           <SiFigma/>
        </span>
        <h3 className="font-medium leading-tight">Figma</h3>
    </li>
</ol>

  )
}

export default Steps