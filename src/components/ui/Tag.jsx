import React from 'react'

const Tag = ({tag}) => {
  return (
    <div className="relative inline-flex items-center justify-center p-0.5  overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-codedragi-secondary via-codedragi-tertiary to-codedragi-quartary group-hover:codedragi-secondary group-hover:via-codedragi-tertiary group-hover:to-codedragi-quartary hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-800">
    <span  className="relative px-2.5 py-0.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
    {tag}
    </span>
    </div>
  )
}

export default Tag

