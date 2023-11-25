import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { FaTimes } from "react-icons/fa";
import Button from "../ui/Button";
import Toast from "../ui/Toast";

const NotesModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const db = getFirestore();
      const notesCollection = collection(db, "notes");

      const newNote = {
        title,
        description,
        timestamp: new Date(),
      };

      const docRef = await addDoc(notesCollection, newNote);

      console.log("Données envoyées avec succès !");
      Toast({ type: "success", message: "Note ajoutée avec succès" });
      setTitle("");
      setDescription("");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
      Toast({ type: "error", message: "Erreur lors de l'ajout de la note" });
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40">
          <div
            className="bg-black bg-opacity-70 fixed top-0 left-0 w-full h-full"
            onClick={onClose}
          ></div>
          <div className="bg-gray-900 md:w-1/2 w-full  p-4 rounded-lg overflow-y-auto m-8 relative">
            <button
              className="close-button  top-4 right-4 fixed"
              onClick={onClose}
            >
              <FaTimes size={24} />
            </button>
            <h1 className="text-2xl font-bold text-codedragi-blue mb-4">
              Ajouter une note
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Titre
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Titre de la note ..."
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Description de la note ..."
                  required
                />
              </div>
              <Button text="Valider" />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NotesModal;
