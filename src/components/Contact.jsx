import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Button from "./ui/Button";
import Toast from "../components/ui/Toast";

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
    <div className="pb-20">
      <form
        className="bg-gray-800 p-4 rounded"
        ref={form}
        id="contact-form"
        onSubmit={sendEmail}
      >
        <label
          htmlFor="user_name"
          className="block mb-2 text-sm font-medium  text-white"
        >
          Nom
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaUser className="text-gray-300" />
          </div>
          <input
            type="text"
            id="user_name"
            name="from_name"
            className=" border text-white text-sm rounded-lg  focus:border-blue-500 block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre nom"
            required
          />
        </div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium  text-white"
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
            className=" border text-white text-sm rounded-lg  focus:border-blue-500 block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre email"
            required
          />
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium  text-white"
        >
          Message
        </label>
        <div className="relative mb-6">
          
          <textarea
            id="message"
            name="message"
            rows="4"
            className=" border text-white text-sm rounded-lg  focus:border-blue-500 block w-full  p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400  focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre message"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <Button text="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
