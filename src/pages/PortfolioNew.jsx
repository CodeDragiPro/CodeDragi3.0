import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../Config/firebase";
import { addDoc, collection } from "firebase/firestore/lite";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Toast from "../components/ui/Toast";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/ui/Button";

const PortfolioNew = () => {
  const navigate = useNavigate();
  const titleRef = useRef();
  const clientRef = useRef();
  const brandRefs = useRef(
    Array(3)
      .fill(null)
      .map(() => React.createRef())
  );
  const fontRef = useRef();
  const descriptionRef = useRef();
  const linkRef = useRef();
  const imageRef = useRef();
  const graphicsImageRef = useRef();

  const types = ["Backend", "Frontend", "WebDesign"];
  const typeRefs = types.map(() => useRef());

  const categories = ["Javascript", "React Js", "Tailwind Css", "Firebase", "Mysql"];
  const categoryRefs = categories.map(() => useRef());

  const [selectedDate, setSelectedDate] = useState(null);
  const [brandColors, setBrandColors] = useState(Array(3).fill(""));

  const handleBrandColorChange = (index) => {
    const newColor = brandRefs.current[index].current.value;
    const updatedColors = [...brandColors];
    updatedColors[index] = newColor;
    setBrandColors(updatedColors);
  };

  const submitPortfolio = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const client = clientRef.current.value;
    const brands = brandColors;
    const font = fontRef.current.value;
    const description = descriptionRef.current.value;
    const link = linkRef.current.value;
    const images = imageRef.current.files;
    const graphicsImages = graphicsImageRef.current.files;
    const date = selectedDate;

    const selectedCategories = categoryRefs
      .map((ref, index) => ({
        ref: ref,
        category: categories[index],
      }))
      .filter((category) => category.ref.current.checked)
      .map((category) => category.category);

    const selectedTypes = typeRefs
      .map((ref, index) => ({
        ref: ref,
        type: types[index],
      }))
      .filter((type) => type.ref.current.checked)
      .map((type) => type.type);

    const imageUploadPromises = [];
    for (const image of images) {
      const storageRef = ref(storage, `portfolio/${image.name}`);
      const uploadPromise = uploadBytes(storageRef, image);
      imageUploadPromises.push(uploadPromise);
    }

    const graphicsImageUploadPromises = [];
    for (const graphicsImage of graphicsImages) {
      const graphicsStorageRef = ref(
        storage,
        `portfolio_graphics/${graphicsImage.name}`
      );
      const graphicsUploadPromise = uploadBytes(
        graphicsStorageRef,
        graphicsImage
      );
      graphicsImageUploadPromises.push(graphicsUploadPromise);
    }

    Promise.all(imageUploadPromises.concat(graphicsImageUploadPromises))
      .then((snapshots) => {
        const downloadUrls = snapshots.map((snapshot) =>
          getDownloadURL(snapshot.ref)
        );
        return Promise.all(downloadUrls);
      })
      .then((downloadUrls) => {
        const imageUrls = downloadUrls.slice(0, images.length);
        const graphicsImageUrls = downloadUrls.slice(images.length);
        savePortfolio({
          title,
          client,
          brands,
          font,
          description,
          link,
          images: imageUrls,
          graphicsImages: graphicsImageUrls,
          date,
          selectedCategories,
          selectedTypes,
        });
      })

      .catch((error) => {
        console.error(error);
        savePortfolio({
          title,
          client,
          brands,
          font,
          description,
          link,
          images: [],
          graphicsImages: [],
          date,
          resume,
          selectedCategories,
          selectedTypes,
        });
      });
  };

  const savePortfolio = async (portfolio) => {
    try {
      await addDoc(collection(db, "portfolio"), portfolio);

      Toast({ type: "succes", message: "Portfolio envoyé avec succes" });
      setTimeout(() => {
        navigate("/dashboard/list");
      }, 500);
    } catch (error) {
      Toast({ type: "error", message: "Erreur lors de l'envoi des données" });
      console.error("Failed to add portfolio", error);
    }
  };

  return (
    <div className="p-4 py-12 md:h-screen">
      <form onSubmit={submitPortfolio}>
        <div className="bg-gray-900 h-full p-4 rounded-md">
          <div className="p-2">
            <h1 className="font-bold text-2xl text-white">Details</h1>
            <hr />
          </div>
          <div className="flex md:flex-row flex-col  justify-center text-white">
            {/* input */}
            {/* Titre */}
            <div className="md:w-1/2 w-full p-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Titre :
              </label>
              <input
                type="text"
                id="title"
                className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                ref={titleRef}
                placeholder="Titre..."
                required
              />
              {/* Client */}
              <div className="mt-2">
                <label
                  htmlFor="client"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Client :
                </label>
                <input
                  type="text"
                  id="client"
                  className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  ref={clientRef}
                  placeholder="Client..."
                  required
                />
              </div>
              {/* Lien */}
              <div className="mt-2">
                <label
                  htmlFor="link"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lien :
                </label>
                <input
                  type="text"
                  id="link"
                  className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  ref={linkRef}
                  placeholder="Lien..."
                  required
                />
              </div>
            </div>
            {/* Description */}
            <div className="md:w-1/2 w-full md:p-0 p-2 ">
              {/* Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="link"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date :
                </label>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Sélectionner une date"
                  className="w-full p-2.5  rounded-lg focus:outline-none bg-gray-700"
                  required
                />
              </div>
              {/* Images */}
              <div className="flex flex-col">
                <div className="mt-2">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image :
                  </label>
                  <input
                    type="file"
                    id="images"
                    className="w-full p-2  rounded text-codedragi-gray focus:outline-none bg-gray-700"
                    ref={imageRef}
                    multiple
                    required
                  />
                </div>
                {/* Description */}
              </div>
              <div className="mt-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description :
                </label>
                <textarea
                  id="description"
                  rows="4"
                  ref={descriptionRef}
                  className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Description..."
                />
              </div>
            </div>
          </div>
          {/* Technologie */}
          <div className="flex flex-col md:p-2">
            <label className="text-lg font-bold text-white flex items-center mt-2">
              Technologie :
            </label>
            <div className="flex md:flex-row flex-col items-start md:space-x-2 text-white ">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="flex md:flex-row  items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    id={category}
                    ref={categoryRefs[index]}
                    className="w-4 h-4 text-codedragi-blue"
                  />
                  <label
                    htmlFor={category}
                    className="text-lg text-codedragi-blue"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
            {/* Categorie */}
            <label className="text-lg font-bold text-white mt-2">
              Catégorie :
            </label>
            <div className="flex md:flex-row flex-col items-start md:space-x-2 text-white">
              {types.map((type, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={type}
                    ref={typeRefs[index]}
                    className="w-4 h-4 text-codedragi-blue"
                  />
                  <label htmlFor={type} className="text-lg text-codedragi-blue">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* Graphisme */}
          <div className="p-2">
            <h1 className="font-bold text-2xl text-white">Graphisme</h1>
            <hr />
          </div>
          <div className="flex md:flex-row flex-col  justify-between md:items-center w-full pt-2">
            <div>
              <label
                htmlFor="font"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Police :
              </label>
              <input
                type="text"
                id="font"
                className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                ref={fontRef}
                placeholder="police..."
                required
              />
            </div>
            {/* Charte Graphique */}
            <div className="md:pl-4 md:pt-0 pt-2">
              <label
                htmlFor="brands"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Charte graphique :
              </label>
              <div className="flex items-center space-x-4">
                {brandColors.map((color, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="text"
                      id={`brand-${index}`}
                      className=" border   text-sm rounded-lg   block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                      ref={brandRefs.current[index]}
                      placeholder="#FFFFFF"
                      onChange={() => handleBrandColorChange(index)}
                      required
                    />
                  </div>
                ))}
                <div></div>
              </div>
            </div>
            {/* Image du graphisme */}
            <div className="md:pt-0 pt-2 text-white">
              <label
                htmlFor="image graphisme"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Images graphisme :
              </label>
              <input
                type="file"
                id="images"
                className="w-full p-2  rounded text-codedragi-gray focus:outline-none bg-gray-700"
                ref={graphicsImageRef}
                multiple
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <Button text="envoyer" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PortfolioNew;
