import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Config/AuthContext";
import ReactApexChart from "react-apexcharts";
import { FaPlus, FaUsers } from "react-icons/fa6";
import NotesModal from "../components/Modal/NotesModal";
import { RiGalleryUploadFill } from "react-icons/ri";
import { FaClipboardList } from "react-icons/fa";
import NotesCard from "../components/Cards/NotesCard";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Toast from "../components/ui/Toast";
import { getCurrentDate, getCurrentTime } from "../utils/DashboardUtils";
import { fetchNotes, deleteNote } from "../utils/NotesUtils";
import { useFetchProjects } from "../utils/PortfolioUtils";

const Dashboard = () => {
  const { user } = UserAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { filteredProjects } = useFetchProjects();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setNotes(await fetchNotes());
    };

    fetchData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeleteClick = async (noteId) => {
    confirmAlert({
      title: "Confirmer la suppression",
      message: "Êtes-vous sûr de vouloir supprimer cette note ?",
      buttons: [
        {
          label: "Oui",
          onClick: async () => {
            const success = await deleteNote(noteId);

            if (success) {
              setNotes(await fetchNotes());
              Toast({ type: "success", message: "Note supprimé avec succès" });
            } else {
              Toast({
                type: "error",
                message: "Erreur lors de la suppression de la note",
              });
            }
          },
        },
        {
          label: "Non",
          onClick: () => {},
        },
      ],
    });
  };

  const generateChartData = () => {
    if (!filteredProjects || filteredProjects.length === 0) {
      return {
        series: [],
        options: {
          labels: [],
          colors: ["#FF6384", "#36A2EB", "#FFCE56"],
          legend: {
            show: false,
          },
        },
      };
    }

    const typeCounts = {};
    const typeNames = {};

    filteredProjects.forEach((portfolio) => {
      const types = portfolio.selectedTypes || [];
      types.forEach((type) => {
        typeCounts[type] = (typeCounts[type] || 0) + 1;
        typeNames[type] = type;
      });
    });

    const chartLabels = Object.keys(typeCounts);

    return {
      series: chartLabels.map((label) => typeCounts[label]),
      options: {
        labels: chartLabels.map((label) => typeNames[label]),
        colors: ["#FF6384", "#36A2EB", "#FFCE56"],
        legend: {
          show: false,
        },
      },
    };
  };

  return (
    <div className="md:h-screen h-full  md:flex text-white  p-4">
      {/* CONTAINER DROITE */}
      <div className=" flex flex-col md:w-full md:mr-4 md:ml-1">
        {/* Carte utilisateur */}
        <div className=" flex flex-col items-center  text-center">
          <div className="bg-gray-900 rounded-md w-full h-full  md:mx-2 my-2 flex flex-col items-center ">
            <div className="p-2">
              <h1 className="text-2xl font-bold text-white">
                {user.displayName}
              </h1>
              <img
                src={user.photoURL}
                className="w-36 h-36  object-cover rounded-full border-2 border-white mb-2"
              />
            </div>
          </div>
          {/* Date */}
          <div className="bg-gray-900 rounded-md w-full md:mx-2 my-2 p-2">
            <h1 className="text-xl font-bold text-white">Nous sommes le :</h1>
            <p className="font-bold text-2xl">{getCurrentDate()}</p>
          </div>
          {/* Heure */}
          <div className="bg-gray-900 rounded-md w-full md:mx-2 my-2 p-2 py-3">
            <h1 className="text-xl font-bold text-white">Il est :</h1>
            <p className="font-bold text-2xl">{getCurrentTime()}</p>
          </div>
          {/* Ajouter une note */}
          <div className="bg-gray-900 rounded-md w-full  md:mx-2 my-2 p-2 pt-2">
            <h1 className="text-2xl font-bold text-white py-2">
              Ajouter une note
            </h1>
          </div>
          {/* Bouton ajouter une note */}
          <div className="rounded-md w-full md:mx-2 my-2 p-2">
            <button
              className="bg-gray-900 p-4 rounded-full"
              onClick={openModal}
            >
              <FaPlus className="text-white font-bold" size={24} />
            </button>
          </div>
          {/* Modale */}
          <NotesModal isOpen={isModalOpen} onClose={closeModal} />
          {/* Carte des notes */}
          <div className="w-full">
            {notes.map((note) => (
              <div key={note.id}>
                <NotesCard
                  noteId={note.id}
                  noteTitle={note.title}
                  noteDescription={note.description}
                  onDeleteClick={(id) => handleDeleteClick(id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CONTAINER GAUCHE */}
      <div className="flex flex-col w-full  md:order-first md:ml-2 md:mr-1">
        <div className=" md:flex block items-center justify-center text-center">
          {/* Nombre de portfolio */}
          <div className="bg-gray-900 rounded-md  w-full h-64 flex flex-col items-center justify-evenly md:m-2 mb-2">
            <h1 className="text-xl font-bold text-white mb-4">
              Nombre de portfolios
            </h1>
            <h2 className="text-8xl font-bold">{filteredProjects.length}</h2>
          </div>
          {/* Statistique portfolio */}
          <div className="bg-gray-900 rounded-md w-full md:h-64 h-full flex flex-col items-center justify-evenly md:m-2 mb-2">
            <h1 className="text-xl font-bold text-white">
              Répartition des types de portfolios
            </h1>
            <div className="md:w-[20vh] object-cover">
              <ReactApexChart
                type="donut"
                series={generateChartData().series}
                options={generateChartData().options}
              />
            </div>
          </div>
          {/* Dernier portfolio */}
          <div className="bg-gray-900 rounded-md  w-full h-64 flex flex-col items-center justify-evenly md:m-2 mb-2">
            <h1 className="text-xl font-bold text-white mb-4">
              Dernier portfolio
            </h1>
            <p className="text-2xl font-bold">12 Janvier 2023</p>
          </div>
        </div>
        <div className="md:flex block items-center justify-between text-center">
          {/* Ajouter un nouveau portfolio */}
          <div className="bg-gray-900 rounded-md  w-full h-64 flex flex-col items-center justify-evenly md:m-2 mb-2">
            <h1 className="text-xl font-bold text-white mb-4">
              Ajouter un portfolio
            </h1>
            <Link to="/dashboard/new" className="bg-[#1e1e1e] rounded-full p-4">
              <RiGalleryUploadFill className="text-white text-6xl" />
            </Link>
          </div>
          <div className="bg-gray-900 rounded-md  w-full h-64 flex flex-col items-center justify-evenly md:m-2 mb-2">
            <h1 className="text-xl font-bold text-white mb-4">
              Liste des portfolios
            </h1>
            <Link
              to="/dashboard/list"
              className="bg-[#1e1e1e] rounded-full p-4"
            >
              <FaClipboardList className="text-white text-6xl" />
            </Link>
          </div>
          <div className="bg-gray-900 rounded-md  w-full h-64 flex flex-col items-center justify-evenly md:m-2 mb-2 ">
            <h1 className="text-xl font-bold text-white mb-4">
              Liste des clients
            </h1>
            <Link
              to="/dashboard/clients"
              className="bg-[#1e1e1e] rounded-full p-4"
            >
              <FaUsers className="text-codedragi-blue text-6xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
