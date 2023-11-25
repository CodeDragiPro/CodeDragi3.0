import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetchProjects } from "../utils/PortfolioUtils";
import Pagination from './ui/Pagination';

const itemsPerPage = 9;

const PortfolioDisplay = () => {
  const { handleCategoryClick, categories, filteredProjects } = useFetchProjects();
  const [currentPage, setCurrentPage] = useState(1);

  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-codedragi-secondary via-codedragi-tertiary to-codedragi-quartary group-hover:codedragi-secondary group-hover:via-codedragi-tertiary group-hover:to-codedragi-quartary hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={() => handleCategoryClick(category)}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {category}
            </span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visibleProjects.map((project, index) => (
          <Link to={`/portfolio/${project.id}`} key={project.id}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                <div className="border-2 border-white p-2">
                  <p className="text-white text-center text-2xl font-bold">{project.title}</p>
                </div>
              </div>
              <img
                className=" object-cover rounded-lg"
                src={project.images[0]}
                alt={`Project ${index + 1}`}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </div>
      
    </>
  );
};

export default PortfolioDisplay;
