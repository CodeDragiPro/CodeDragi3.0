import React, { useState } from "react";
import { updateDoc, doc } from "firebase/firestore/lite";
import { db } from "../../Config/firebase";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../ui/Button";
import { FaTimes } from "react-icons/fa";
const EditModal = ({ portfolio, closeModal, updatePortfolio }) => {
  const [updatedPortfolio, setUpdatedPortfolio] = useState({ ...portfolio });
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleUpdatePortfolio = async () => {
    try {
      const portfolioDocRef = doc(db, "portfolio", updatedPortfolio.id);
      const updatedData = {
        title: updatedPortfolio.title,
        client: updatedPortfolio.client,
        brands: updatedPortfolio.brands,
        font: updatedPortfolio.font,
        description: updatedPortfolio.description,
        link: updatedPortfolio.link,
        images: updatedPortfolio.images,
        date: selectedDate,
        selectedCategories: updatedPortfolio.selectedCategories,
        selectedTypes: updatedPortfolio.selectedTypes,
      };

      await updateDoc(portfolioDocRef, updatedData);
      updatePortfolio(updatedData);
      closeModal();
    } catch (error) {
      console.error("Erreur lors de la mise à jour du document :", error);
    }
  };
  const formattedDate = selectedDate.toISOString();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40 text-white overflow-y-auto md:pt-2 pt-[50vh] md:px-20">
      <div className="bg-black bg-opacity-70 fixed top-0 left-0 w-full h-full"></div>
      <div className="bg-gray-900 w-full  p-4 rounded-lg overflow-y-auto m-8 relative">
        <button
          className="close-button  top-4 right-4 fixed"
          onClick={closeModal}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-white text-center">
          Modifier le Portfolio
        </h2>
        <div>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Titre
                </label>
                <input
                  type="text"
                  id="title"
                  value={updatedPortfolio.title}
                  onChange={(e) =>
                    setUpdatedPortfolio({
                      ...updatedPortfolio,
                      title: e.target.value,
                    })
                  }
                  className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="titre"
                />
              </div>

              <div>
                <label
                  htmlFor="client"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Client
                </label>
                <input
                  type="text"
                  id="client"
                  value={updatedPortfolio.client}
                  onChange={(e) =>
                    setUpdatedPortfolio({
                      ...updatedPortfolio,
                      client: e.target.value,
                    })
                  }
                  className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Date
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Sélectionner une date"
                  className="w-full p-2  rounded-lg focus:outline-none bg-gray-700   text-codedragi-gray"
                  wrapperClassName="datepicker"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="link"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Lien
                </label>
                <input
                  type="text"
                  id="lien"
                  value={updatedPortfolio.link}
                  onChange={(e) =>
                    setUpdatedPortfolio({
                      ...updatedPortfolio,
                      link: e.target.value,
                    })
                  }
                  className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="grid gap-6 mb-6 md:grid-cols-1">
              <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  value={updatedPortfolio.description}
                  onChange={(e) =>
                    setUpdatedPortfolio({
                      ...updatedPortfolio,
                      description: e.target.value,
                    })
                  }
                  className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                />
              </div>

              <div className="flex">
              <label
                  htmlFor="description"
                  className="block mt-2 text-sm font-medium text-white"
                >
                  Catégorie
                </label>
                {updatedPortfolio.selectedTypes.map((type, index) => (
                  <div key={index} className="flex items-center p-2">
                    <input
                      type="checkbox"
                      id={type}
                      className="w-4 h-4 text-blue-600  rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                      checked={type}
                      onChange={() => {
                        const newTypes = [...updatedPortfolio.selectedTypes];
                        newTypes[index] = !newTypes[index];
                        setUpdatedPortfolio({
                          ...updatedPortfolio,
                          selectedTypes: newTypes,
                        });
                      }}
                    />
                    <label
                      htmlFor={type}
                      className="ms-2 text-sm font-medium  text-gray-300"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex items-center">
              <label
                  htmlFor="description"
                  className="block mt-2 text-sm font-medium text-white"
                >
                  Technologie
                </label>
                {updatedPortfolio.selectedCategories.map((category, index) => (
                  <div key={index} className="flex items-center p-2">
                    <input
                      type="checkbox"
                      id={category}
                      className="w-4 h-4 text-blue-600  rounded focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                      checked={category}
                      onChange={() => {
                        const newCategories = [
                          ...updatedPortfolio.selectedCategories,
                        ];
                        newCategories[index] = !newCategories[index];
                        setUpdatedPortfolio({
                          ...updatedPortfolio,
                          selectedCategories: newCategories,
                        });
                      }}
                    />
                    <label
                      htmlFor={category}
                      className="ms-2 text-sm font-medium text-gray-300"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="font"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Police
                  </label>
                  <input
                    type="text"
                    id="font"
                    value={updatedPortfolio.font}
                    onChange={(e) =>
                      setUpdatedPortfolio({
                        ...updatedPortfolio,
                        font: e.target.value,
                      })
                    }
                    className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doe"
                    required
                  />
                </div>

                <div class="">
                  <label
                    htmlFor="font"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Charte graphique
                  </label>
                  <div className="flex space-x-2">
                    {updatedPortfolio.brands.map((color, index) => (
                      <div key={index} className="">
                        <input
                          type="text"
                          id={`brand-${index}`}
                          className=" border  text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                          value={color}
                          onChange={(e) => {
                            const newBrands = [...updatedPortfolio.brands];
                            newBrands[index] = e.target.value;
                            setUpdatedPortfolio({
                              ...updatedPortfolio,
                              brands: newBrands,
                            });
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="flex space-x-4 mt-4 p-2">
            <Button onClick={handleUpdatePortfolio} text="Valider" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
