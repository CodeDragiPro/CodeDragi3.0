import React, { useState } from "react";
import Toast from "./ui/Toast";
import { useTranslation } from "react-i18next";
import "react-confirm-alert/src/react-confirm-alert.css";
import { addRating } from "../api/ratingApi";

const RecommandationBanner = () => {
  const [t] = useTranslation("global");
  const [rating, setRating] = useState(0);
  const [bannerClosed, setBannerClosed] = useState(false);

  const handleStarClick = async (starCount) => {
    setRating(starCount);
  
    const success = await addRating(starCount);
  
    if (success) {
      Toast({ type: "success", message: t("toastTestimonial.success") });
  
      setTimeout(() => {
        setBannerClosed(true);
      }, 3000);
    } else {
      Toast({ type: "error", message: t("toastTestimonial.error") });
    }
  };
  const handleCloseBanner = async () => {
    setBannerClosed(true);

    if (rating > 0) {
      const success = await addRating(rating);

      if (success) {
        Toast({ type: "success", message: t("toastTestimonial.success") });
      } else {
        Toast({
          type: "error",
          message: t("toastTestimonial.error")
        });
      }
    }
  };

  if (bannerClosed) {
    return null;
  }

  return (
    <div
      id="informational-banner"
      tabIndex="-1"
      className="fixed bottom-0 start-0 z-50 flex flex-col justify-between w-full p-4 border-b  md:flex-row  bg-gray-700 border-gray-600"
    >
      <div className="mb-4 md:mb-0 md:me-4">
        <h2 className="mb-1 text-base font-semibold  text-white">
        {t("testimonialBanner.Title")}
        </h2>
        <p className="flex items-center text-sm font-normal  text-gray-400">
        {t("testimonialBanner.Text")}
        </p>
      </div>
      <div className="flex items-center flex-shrink-0">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((index) => (
            <svg
              key={index}
              onClick={() => handleStarClick(index)}
              className={`w-4 h-4 ${
                index <= rating ? "text-yellow-300" : " text-gray-500"
              } me-1 cursor-pointer`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <button
            onClick={handleCloseBanner}
            data-dismiss-target="#informational-banner"
            type="button"
            className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400  rounded-lg text-sm p-1.5 hover:bg-gray-600 hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close banner</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommandationBanner;
