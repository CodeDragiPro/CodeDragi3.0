import React from "react";
import { useTranslation } from "react-i18next";

const TermsOfUse = () => {
  const [t] = useTranslation("global");
  return (
    <div className="flex flex-col items-center justify-center md:h-screen h-full text-white p-4 my-12">
      <div className="bg-gray-800 p-8 rounded max-w-2xl w-full">
        <h1 className="font-bold text-3xl mb-6">{t("terms.section")}</h1>

        <p className="mb-6">
        {t("terms.subtitle")}
        </p>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">{t("terms.title1")}</h2>
          <p>{t("terms.text1")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">{t("terms.title2")}</h2>
          <p>{t("terms.text2")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">{t("terms.title3")}</h2>
          <p>{t("terms.text2")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">{t("terms.title4")}</h2>
          <p>{t("terms.text3")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-2">{t("terms.title5")}</h2>
          <p>
          {t("terms.text5")}{" "}
            <a href="mailto:codedragipro@gmail.com" className="text-pink-400">
              codedragipro@gmail.com
            </a>{" "}
            <span>
          {t("terms.text6")}{" "}
          <a href="tel:+33762266195" className="text-pink-400">
              07.62.26.61.95
            </a>
            .
          </span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
