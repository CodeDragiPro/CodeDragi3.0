import React from "react";
import CardExpertise from "./Cards/CardExpertise";
import { useTranslation } from "react-i18next";
import WebDesignImg from "../assets/WebDesign.jpg";
import WebDevImg from "../assets/DevelopementWeb.jpg";
import SeoImg from "../assets/Seo.jpg";



const Expertise = () => {
  const [t] = useTranslation("global");
  const expertiseItems = [
    {
      title: t("expertise.webDesignTitle"),
      text: t("expertise.webDesignParagraph"),
      image: WebDesignImg,
    },
    {
      title: t("expertise.DeveloperTitle"),
      text: t("expertise.DeveloperParagraph"),
      image: WebDevImg,
    },
    {
      title: t("expertise.SeoTitle"),
      text: t("expertise.SeoParagraph"),
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
