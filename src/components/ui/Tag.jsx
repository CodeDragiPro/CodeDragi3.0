import React from 'react'

const Tag = ({tag, key}) => {
  return (
    <span key={key} className="bg-gradient-to-br from-codedragi-secondary via-codedragi-tertiary to-codedragi-quartary group-hover:codedragi-secondary  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-md px-2.5 py-0.5"> {tag} </span>
  )
}

export default Tag