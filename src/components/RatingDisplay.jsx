import React, { useEffect, useState } from "react";
import { fetchRatings } from "../api/ratingApi";
import { useTranslation } from "react-i18next";

const RatingDisplay = () => {
  const [t] = useTranslation("global");
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetchRatings().then((receivedRatings) => {
      setRatings(receivedRatings);
    });
  }, []);

  const renderStars = (percentage) => {
    return (
      <div className="w-full h-6 mx-4 bg-white rounded">
        <div className="h-6 bg-yellow-300 rounded" style={{ width: `${percentage}%` }}></div>
      </div>
    );
  };

  const renderRatingStats = (stars, percentage) => {
    return (
      <div className="flex items-center justify-center mt-4 px-4 py-2">
        <p className="absolute text-sm font-medium  text-black p-2">{stars}  {t("testimonial.starsText")}</p>
        {renderStars(Math.round(percentage))}
        <span className="text-sm font-medium text-gray-400">{Math.round(percentage)}%</span>
      </div>
    );
  };

  return (
    <div className=" p-4">
      {renderRatingStats("5", (ratings.filter(rating => rating === 5).length / ratings.length) * 100)}
      {renderRatingStats("4", (ratings.filter(rating => rating === 4).length / ratings.length) * 100)}
      {renderRatingStats("3", (ratings.filter(rating => rating === 3).length / ratings.length) * 100)}
      {renderRatingStats("2", (ratings.filter(rating => rating === 2).length / ratings.length) * 100)}
      {renderRatingStats("1", (ratings.filter(rating => rating === 1).length / ratings.length) * 100)}
    </div>
  );
};

export default RatingDisplay;
