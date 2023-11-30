import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa";
import Button from "./ui/Button";
import Toast from "../components/ui/Toast";
import Photo from "../assets/dev.png";

const Contact = () => {
  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAIL_USER_ID;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      function (response) {
        console.log("E-mail envoyé", response);
        Toast({ type: "success", message: "Email envoyé avec succès" });
      },
      function (error) {
        console.error("Erreur lors de l'envoi de l'e-mail", error);
        Toast({ type: "error", message: "Erreur lors de l'envoi de l'e-mail" });
      }
    );
  };

  useEffect(() => {
    emailjs.init(userID);
  }, []);

  return (
    <div className="flex md:flex-row flex-col items-center justify-center w-full bg-gray-800 relative h-scrren">
      <div className="md:w-1/2 w-full my-4 relative">
        <div className="flex items-center justify-center text-white p-4">
          <img src={Photo} alt="developer" className="rounded-lg blur-sm" />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center ">
            <div className="backdrop-blur-sm bg-white/30 p-4">
              <h1 className="text-2xl font-bold text-white mb-2 text-center relative">
                Informations personnelles
              </h1>
              <div className="flex items-center">
                <FaPhone className="mx-2 my-2 rotate-90" />
                <p>0762266195</p>
              </div>
              <div className="flex items-center">
                <MdEmail className="mx-2 my-2" />
                <p>codedragipro@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form
        className="p-4 rounded md:w-1/2 w-full"
        ref={form}
        id="contact-form"
        onSubmit={sendEmail}
      >
         <label
          htmlFor="user_firstname"
          className="block mb-2 text-sm font-medium text-white"
        >
          Prénom
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaUser className="text-gray-300" />
          </div>
          <input
            type="text"
            id="user_firstname"
            name="from_firstname"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre prénom"
            required
          />
        </div>

        <label
          htmlFor="user_lastname"
          className="block mb-2 text-sm font-medium text-white"
        >
          Nom
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaUser className="text-gray-300" />
          </div>
          <input
            type="text"
            id="user_lastname"
            name="from_lastname"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre nom"
            required
          />
        </div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-white"
        >
          Email
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <MdEmail className="text-gray-300" />
          </div>
          <input
            type="email"
            id="email"
            name="user_email"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre email"
            required
          />
        </div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-white"
        >
          Téléphone
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaPhone className="text-gray-300" />
          </div>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre téléphone"
            required
          />
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-white"
        >
          Message
        </label>
        <div className="relative mb-6">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre message"
            required
          />
        </div>
        <label
          htmlFor="message_type"
          className="block mb-2 text-sm font-medium text-white"
        >
          Type de message
        </label>
        <div className="relative mb-6">
          
          <select
            id="message_type"
            name="message_type"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full ps-2.5 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option value="">Choisir le type de message</option>
            <option value="questions">Questions</option>
            <option value="devis">Devis</option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
          <Button text="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
