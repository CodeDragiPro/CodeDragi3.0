import React, { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import ClientsModal from "../components/Modal/ClientsModal";
import { ClientsApi } from "../api/clientsApi";
import { FaSearch, FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Clients = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [selectedClients, setSelectedClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 10;
  const [isMobile, setIsMobile] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectClient = (e, clientId) => {
    if (e.target.checked) {
      setSelectedClients((prevSelectedClients) => [
        ...prevSelectedClients,
        clientId,
      ]);
    } else {
      setSelectedClients((prevSelectedClients) =>
        prevSelectedClients.filter((id) => id !== clientId)
      );
    }
  };

  const handleDeleteSelectedClients = async () => {
    try {
      await Promise.all(
        selectedClients.map(async (clientId) => {
          await ClientsApi.deleteClient(clientId);
        })
      );

      const updatedClients = clients.filter(
        (client) => !selectedClients.includes(client.id)
      );
      setClients(updatedClients);
      setSelectedClients([]);
      setSelectAllChecked(false);
      console.log("Clients deleted successfully.");
    } catch (error) {
      console.error("Error deleting clients:", error);
    }
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setSelectAllChecked(isChecked);

    if (isChecked) {
      const allClientIds = clients.map((client) => client.id);
      setSelectedClients(allClientIds);
    } else {
      setSelectedClients([]);
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsData = await ClientsApi.getAllClients();
        const sortedAndFilteredClients = clientsData
          .filter((client) => {
            const fullName = `${client.firstname} ${client.lastname} ${client.projectname}`;
            return fullName.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .sort((a, b) => {
            const nameA = a.lastname ? a.lastname.toUpperCase() : "";
            const nameB = b.lastname ? b.lastname.toUpperCase() : "";

            if (sortOrder === "asc") {
              return nameA.localeCompare(nameB);
            } else {
              return nameB.localeCompare(nameA);
            }
          });

        setClients(sortedAndFilteredClients);
      } catch (error) {
        console.error("Erreur lors de la récupération des clients :", error);
      }
    };

 const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  window.addEventListener("resize", handleResize);
  handleResize();

  fetchClients();
    return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [sortOrder, searchTerm]);
  
    const indexOfLastClient = currentPage * clientsPerPage;
    const indexOfFirstClient = indexOfLastClient - clientsPerPage;
    const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);
  
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(clients.length / clientsPerPage); i++) {
      pageNumbers.push(i);
    }

  return (
    <div className="p-4 mt-20 h-screen">
      <div className="flex items-center justify-between">
        <div>
          <Button text="Ajouter" onClick={openModal} />
        </div>
        <div className="md:w-1/4 w-full">
          <label htmlFor="clients search" className="sr-only">
            Rechercher
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="w-full block p-2.5 mb-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Rechercher un client"
              value={searchTerm}
              onChange={handleSearch}
            ></input>
          </div>
        </div>
      </div>
      {isModalOpen && <ClientsModal onClose={closeModal} />}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectAllChecked}
                    onChange={handleSelectAll}
                  />
                  <label htmlFor="checkbox" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex space-x-2">
                  <div>Nom</div>
                  <button onClick={handleSort} className="flex items-center">
                    {sortOrder === "asc" ? (
                      <FaSortAlphaDown />
                    ) : (
                      <FaSortAlphaUp />
                    )}
                  </button>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Prénom
              </th>
              <th scope="col" className="px-6 py-3">
                Téléphone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Adresse
              </th>
              <th scope="col" className="px-6 py-3">
                Projet
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
            {clients.map((client) => (
              <tr
                key={client.id}
                className={`${
                  selectedClients.includes(client.id)
                    ? "bg-gray-200 dark:bg-gray-700"
                    : "hover:bg-gray-50 dark:hover:bg-gray-600"
                }`}
              >
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selectedClients.includes(client.id)}
                    onChange={(e) => handleSelectClient(e, client.id)}
                  />
                </td>
                <td className="px-6 py-4">{client.lastname}</td>
                <td className="px-6 py-4">{client.firstname}</td>
                <td className="px-6 py-4">{client.phone}</td>
                <td className="px-6 py-4">{client.email}</td>
                <td className={`px-6 py-4 ${isMobile && "truncate"}`}>
                  {client.address}
                </td>
                <td className="px-6 py-4">{client.projectname}</td>
                <td className="px-6 py-4">{client.projectdate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between">
          <button
            className="bg-gray-800 p-2 mt-2 rounded"
            onClick={handleDeleteSelectedClients}
            disabled={selectedClients.length === 0}
          >
            <MdDelete className="text-gray-300 hover:text-red-500" size={20} />
          </button>
          <nav className="mt-2">
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Précèdent
                </a>
              </li>
              {pageNumbers.slice(0, 4).map((number) => (
                <li key={number}>
                  <a
                    href="#"
                    onClick={() => paginate(number)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === number && "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    {number}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Suivant
                </a>
              </li>
            </ul>
          </nav>
        </div>
    </div>
  );
};

export default Clients;
