import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li key={i}>
          <a
            href="#"
            className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-400 bg-gray-700 border-gray-100 ${
              currentPage === i
                ? 'bg-gray-700 text-blue-600'
                : 'hover:bg-gray-700 hover:text-gray-300'
            }`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    return pages;
  };

  return (
    <nav className="flex items-center flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight   border  rounded-s-lg   bg-gray-800 border-gray-700 text-gray-400  hover:text-white"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </a>
        </li>
        {generatePageNumbers()}
        <li>
          <a
            href="#"
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-400  border  rounded-e-lg    border-gray-700 dark:text-gray-400 bg-gray-800 hover:text-white"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
