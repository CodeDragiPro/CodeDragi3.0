import React from 'react'

const Button = ({onClick, text, animate}) => {
  return (
    <button className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-codedragi-secondary via-codedragi-tertiary to-codedragi-quartary group-hover:codedragi-secondary group-hover:via-codedragi-tertiary group-hover:to-codedragi-quartary hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${animate} " `} onClick={onClick}>
<span className="relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-900 rounded-md group-hover:bg-opacity-0">
{text}
</span>
</button>
  )
}

export default Button