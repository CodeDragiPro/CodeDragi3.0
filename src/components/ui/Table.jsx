import React from "react";
import { truncateText } from '../../utils/DashboardUtils';

const Table = ({
  data,
  selectedPortfolios,
  onDeletePortfolio,
  onEditPortfolio,
  searchTerm,
  setSortOrder,
  sortOrder,
  toggleDeleteDropdown,
  isDeleteDropdownOpen,
}) => {
  const handleCheckboxChange = (portfolio) => {
    const isSelected = selectedPortfolios.includes(portfolio);
    if (isSelected) {
      onDeletePortfolio(selectedPortfolios.filter((p) => p !== portfolio));
    } else {
      onDeletePortfolio([...selectedPortfolios, portfolio]);
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
        <div className="p-2">
          <button
            id="dropdownActionButton"
            data-dropdown-toggle="dropdownAction"
            className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            type="button"
            onClick={toggleDeleteDropdown}
          >
            <span className="sr-only">Action button</span>
            Action
            <svg
              className={`w-2.5 h-2.5 ms-2.5 ${
                isDeleteDropdownOpen ? "transform rotate-180" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isDeleteDropdownOpen && (
            <div
              id="dropdownAction"
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <div className="py-1">
                <button
                  onClick={onDeletePortfolio}
                  type="button"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Supprimer
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="p-2">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Titre
              <button
                className="ml-1 focus:outline-none"
                onClick={() =>
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                }
              >
                {sortOrder === "asc" ? "▲" : "▼"}
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              Categorie
            </th>
            <th scope="col" className="px-6 py-3">
              date
            </th>
            <th scope="col" className="px-6 py-3">
              Modifier
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((portfolio, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-table-search-${index}`}
                    type="checkbox"
                    checked={selectedPortfolios.includes(portfolio)}
                    onChange={() => handleCheckboxChange(portfolio)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor={`checkbox-table-search-${index}`}
                    className="sr-only"
                  >
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={portfolio.images[0]}
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">
                    {portfolio.title}
                  </div>
                  <div className="font-normal text-gray-500">
                    {truncateText(portfolio.description, 7)}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                {portfolio.selectedTypes.join(", ")}
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="">
                    {portfolio.date.toDate().toLocaleString()}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onEditPortfolio(portfolio)}
                  type="button"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
