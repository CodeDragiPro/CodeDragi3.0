import React from 'react'

const TitleHr = ({text, size}) => {
  return (
    <div className="inline-flex items-center justify-center w-full">
    <hr className="w-full h-px my-8 bg-white border-0"/>
    <span className={`absolute px-2 font-medium text-white -translate-x-1/2 bg-codedragi-primary left-1/2   ${size} text-center w-auto`}>{text}</span>
  </div>
  )
}

export default TitleHr