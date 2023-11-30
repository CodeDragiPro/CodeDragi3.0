import React from "react";
import CardExpertise from "./Cards/CardExpertise";

import WebDesignImg from "../assets/WebDesign.jpg";
import WebDevImg from "../assets/DevelopementWeb.jpg";
import SeoImg from "../assets/Seo.jpg";

const Expertise = () => {
  const expertiseItems = [
    {
      title: "WEB DESIGN",
      text: "Transformez vos idées en réalité visuelle avec nos maquettes de qualité professionnelle.",
      image: WebDesignImg,
    },
    {
      title: "DEVELOPPEMENT",
      text: "Transcendez les codes du numérique avec notre expertise en développement web.",
      image: WebDevImg,
    },
    {
      title: "S.E.O",
      text: "Optimisez votre visibilité en ligne, dominez les moteurs de recherche et laissez votre empreinte numérique rayonner.",
      image: SeoImg,
    },
  ];
  return (
      <div className="flex md:flex-row flex-col justify-center  md:space-x-8  md:items-stretch items-center p-4 md:space-y-0 space-y-4 w-full">
        {expertiseItems.map((item, index) => (
          <CardExpertise
            key={index}
            title={item.title}
            text={item.text}
            image={item.image}
          />
        ))}
      </div>
  );
};

export default Expertise;
