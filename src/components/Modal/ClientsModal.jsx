import React, { useState } from "react";
import { ClientsApi } from "../../api/clientsApi";
import { FaTimes } from "react-icons/fa";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

const ClientsModal = ({ onClose }) => {
  const [clientFirstName, setClientFirstName] = useState("");
  const [clientLastName, setClientLastName] = useState("");
  const [clientPhoneNumber, setClientPhoneNumber] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientProjectDate, setClientProjectDate] = useState("");
  const [clientProjectName, setClientProjectName] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  const handleClientAddressChange = (e) => {
    setClientAddress(e.target.value);
  };

  const handleClientProjectNameChange = (e) => {
    setClientProjectName(e.target.value);
  };

  const handleClientProjectDateChange = (e) => {
    setClientProjectDate(e.target.value);
  };

  const handleClientEmailChange = (e) => {
    setClientEmail(e.target.value);
  };

  const handleClientPhoneNumberChange = (e) => {
    setClientPhoneNumber(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setClientLastName(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setClientFirstName(e.target.value);
  };

  const handleAddClient = async () => {
    try {
      await ClientsApi.addClients([
        {
          firstname: clientFirstName,
          lastname: clientLastName,
          phone: clientPhoneNumber,
          email: clientEmail,
          projectdate: clientProjectDate,
          projectname: clientProjectName,
          address: clientAddress,
        },
      ]);
      Toast({ type: "success", message: "Client ajouté avec succès" });
      onClose();
    } catch (error) {
      Toast({ type: "error", message: "Erreur lors de l'ajout du client. Veuillez réessayer." });
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
          Ajouter un client
        </h2>
        <div>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="clientLastName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="clientLastName"
                  name="clientLastName"
                  value={clientLastName}
                  onChange={handleLastNameChange}
                  className=" border   text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Nom..."
                />
              </div>
              <div>
                <label
                  htmlFor="clientName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Prénom
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  value={clientFirstName}
                  onChange={handleFirstNameChange}
                  className=" border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Prénom..."
                />
              </div>
              <div>
                <label
                  htmlFor="clientPhoneNumber"
                  className="block mb-2 text-sm font-medium  text-white"
                >
                  Téléphone
                </label>
                <input
                  type="text"
                  id="clientPhoneNumber"
                  name="clientPhoneNumber"
                  value={clientPhoneNumber}
                  onChange={handleClientPhoneNumberChange}
                  className=" border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Téléphone..."
                />
              </div>
              <div>
                <label
                  htmlFor="clientEmail"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="clientEmail"
                  name="clientEmail"
                  value={clientEmail}
                  onChange={handleClientEmailChange}
                  className=" border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Email..."
                />
              </div>
              <div>
                <label
                  htmlFor="clientDate"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="clientDate"
                  name="clientDate"
                  value={clientProjectDate}
                  onChange={handleClientProjectDateChange}
                  className=" border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Date..."
                />
              </div>
              <div>
                <label
                  htmlFor="clientProjectName"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Projet
                </label>
                <input
                  type="text"
                  id="clientProjectName"
                  name="clientProjectName"
                  value={clientProjectName}
                  onChange={handleClientProjectNameChange}
                  className=" border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="nom du projet..."
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
              <div>
                <label
                  htmlFor="clientAddress"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Adresse
                </label>
                <textarea
                  id="clientAddress"
                  name="clientAddress"
                  value={clientAddress}
                  onChange={handleClientAddressChange}
                  className=" border  text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="adresse du client..."
                />
              </div>
            </div>
            <Button text="Envoyer" onClick={handleAddClient}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientsModal;
