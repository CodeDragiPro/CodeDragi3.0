import React, { useEffect, useState } from "react";

import Toast from "../components/ui/Toast";

import EditModal from "../components/Modal/EditModal";
import { FaTrash } from "react-icons/fa";
import { truncateText } from "../utils/DashboardUtils";
import { fetchPortfolios, deletePortfolio } from "../api/portfolioApi";

const PortfolioList = () => {
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedPortfolioId, setSelectedPortfolioId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const portfolios = await fetchPortfolios();
        setData(portfolios);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des portfolios :",
          error
        );
      }
    };
    fetchData();
  }, []);

  const handleEditDocument = (portfolioId) => {
    setSelectedPortfolioId(portfolioId);
  };

  const updatePortfolio = (updatedPortfolio) => {
    setData((prevData) =>
      prevData.map((portfolio) =>
        portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio
      )
    );
    setSelectedItems([]);
    Toast({ type: "success", message: "Portfolio modifié avec succès" });
  };

  const toggleItem = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const deleteSelectedItems = async () => {
    try {
      const deletePromises = selectedItems.map(async (itemId) => {
        try {
          await deletePortfolio(itemId);
          return itemId;
        } catch (error) {
          return null;
        }
      });

      const deletedItems = await Promise.all(deletePromises);
      const successfulDeletions = deletedItems.filter((id) => id !== null);

      setData((prevData) =>
        prevData.filter((item) => !successfulDeletions.includes(item.id))
      );
      setSelectedItems([]);
    } catch (error) {
      console.error("Erreur lors de la suppression des portfolios :", error);
    }
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="p-4 mt-20 h-screen">
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === currentItems.length}
                    onChange={() => {
                      if (selectedItems.length === currentItems.length) {
                        setSelectedItems([]);
                      } else {
                        setSelectedItems(currentItems.map((item) => item.id));
                      }
                    }}
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Titre
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleItem(item.id)}
                  />
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={item.images[0]}
                    alt="Jese image"
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{item.title}</div>

                    <div className="font-normal text-gray-500">
                      {truncateText(item.description, 7)}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{item.title}</td>
                <td className="px-6 py-4">{item.client}</td>
                <td className="px-6 py-4">
                  {item.date.toDate().toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEditDocument(item.id)}
                    className="text-blue-500"
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-gray-800 text-red-500 font-bold rounded p-2"
          onClick={deleteSelectedItems}
          disabled={selectedItems.length === 0}
        >
          <FaTrash />
        </button>
        <div>
          {selectedPortfolioId && (
            <EditModal
              portfolio={data.find((item) => item.id === selectedPortfolioId)}
              closeModal={() => setSelectedPortfolioId(null)}
              updatePortfolio={updatePortfolio}
            />
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`mx-1 py-1 px-3 rounded ${
                  currentPage === page
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
