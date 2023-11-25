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
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nom
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaUser className="text-gray-300" />
          </div>
          <input
            type="text"
            id="user_name"
            name="from_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre nom"
            required
          />
        </div>
        <label
          htmlFor="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <div class="relative mb-6">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <MdEmail className="text-gray-300" />
          </div>
          <input
            type="email"
            id="email"
            name="user_email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Votre email"
            required
          />
        </div>
        <label
          htmlFfor="message"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Message
        </label>
        <div class="relative mb-6">
          <textarea
            id="message"
            name="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
