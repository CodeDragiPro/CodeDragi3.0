import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaUser, FaPhone } from "react-icons/fa";
import Button from "./ui/Button";
import Toast from "../components/ui/Toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation("global");
  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAIL_USER_ID;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceID, templateID, form.current, userID).then(
      function (response) {
        console.log("E-mail envoyé", response);
        Toast({ type: "success", message: t("toastContact.success") });
      },
      function (error) {
        console.error("Erreur lors de l'envoi de l'e-mail", error);
        Toast({ type: "error", message: t("toastContact.error") });
      }
    );
  };

  useEffect(() => {
    emailjs.init(userID);
  }, []);

  return (
    <div className="flex md:flex-row flex-col items-center justify-center w-full bg-gray-800 relative h-screen mt-4">
     
      <form
        className="p-4 rounded w-full"
        ref={form}
        id="contact-form"
        onSubmit={sendEmail}
      >
         <label
          htmlFor="user_firstname"
          className="block mb-2 text-sm font-medium text-white"
        >
         {t("contact.FirstNameLabel")}
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
            placeholder={t("contact.FirstNamePlaceholder")}
            required
          />
        </div>

        <label
          htmlFor="user_lastname"
          className="block mb-2 text-sm font-medium text-white"
        >
          {t("contact.LastNameLabel")}
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
            placeholder={t("contact.LastNamePlaceholder")}
            required
          />
        </div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-white"
        >
           {t("contact.EmailLabel")}
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
            placeholder={t("contact.EmailPlaceholder")}
            required
          />
        </div>
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-white"
        >
            {t("contact.PhoneLabel")}
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <FaPhone className="text-gray-300 rotate-90" />
          </div>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={t("contact.PhonePlaceholder")}
            required
          />
        </div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-white"
        >
           {t("contact.MessageLabel")}
        </label>
        <div className="relative mb-6">
          <textarea
            id="message"
            name="message"
            rows="4"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder= {t("contact.MessagePlaceholder")}
            required
          />
        </div>
        <label
          htmlFor="message_type"
          className="block mb-2 text-sm font-medium text-white"
        >
           {t("contact.SubjectLabel")}
        </label>
        <div className="relative mb-6">
          
          <select
            id="message_type"
            name="message_type"
            className="border text-white text-sm rounded-lg focus:border-blue-500 block w-full ps-2.5 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 dark:focus:border-blue-500"
            required
          >
            <option value="">{t("contact.SubjectPlaceholder")}</option>
            <option value="questions">{t("contact.SubjectOptionLabelQuestion")}</option>
            <option value="devis">{t("contact.SubjectOptionLabelQuotation")}</option>
            <option value="autre">{t("contact.SubjectOptionLabelOther")}</option>
          </select>
        </div>
        <div className="flex items-center justify-center">
          <Button text={t("contact.ContactButton")} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
