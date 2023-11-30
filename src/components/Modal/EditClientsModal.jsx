import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ClientsApi } from "../../api/clientsApi";
import Button from "../ui/Button";

const EditClientsModal = ({ onClose, clientData }) => {
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [projectdate, setProjectDate] = useState("");
  const [projectname, setProjectName] = useState("");

  useEffect(() => {
    if (clientData) {
      setAddress(clientData.address || "");
      setEmail(clientData.email || "");
      setFirstname(clientData.firstname || "");
      setLastname(clientData.lastname || "");
      setPhone(clientData.phone || "");
      setProjectDate(clientData.projectdate || "");
      setProjectName(clientData.projectname || "");
    }
  }, [clientData]);

  const handleUpdateClient = async (e) => {
    e.preventDefault();

    try {
      if (!clientData) {
        console.error("Client data is not defined");
        return;
      }

      const updatedClientData = {
        id: clientData.id,
        address,
        email,
        firstname,
        lastname,
        phone,
        projectdate,
        projectname,
      };

      if (!clientData.id) {
        await ClientsApi.addClients([updatedClientData]);
      } else {
        await ClientsApi.updateClient(updatedClientData);
      }

      onClose();
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  text-white overflow-y-auto md:pt-2 pt-[50vh] md:px-20">
      <div className="bg-black bg-opacity-70 fixed top-0 left-0 w-full h-full"></div>
      <div className="bg-gray-900 w-full  p-4 rounded-lg overflow-y-auto m-8 relative">
        <button className="close-button  top-4 right-4 fixed" onClick={onClose}>
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-white text-center">
          Modifier un client
        </h2>
        <div>
          <form onSubmit={handleUpdateClient}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nom"
                />
              </div>
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Prénom"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Téléphone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Téléphone"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="projectname"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Projet
                </label>
                <input
                  type="text"
                  id="projectname"
                  value={projectname}
                  onChange={(e) => setProjectName(e.target.value)}
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nom du projet"
                />
              </div>
              <div>
                <label
                  htmlFor="projectdate"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Date du projet
                </label>
                <input
                  type="date"
                  id="projectdate"
                  value={projectdate}
                  onChange={(e) => setProjectDate(e.target.value)}
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Date du projet"
                />
              </div>
            </div>
                <Button text="Envoyer"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditClientsModal;
