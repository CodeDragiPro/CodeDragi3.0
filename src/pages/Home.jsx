import React from "react";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import TitleHr from '../components/ui/TitleHr'
import Button from "../components/ui/Button";
import RecommenationBanner from "../components/RecommenationBanner";
import RatingDisplay from "../components/RatingDisplay";
import { useTranslation } from "react-i18next";


const Home = () => {
  const [t] = useTranslation("global");
  return (
    <div className="md:px-20 px-4">
      <section className="pt-4" >
        <Hero />
        <div className="flex items-center justify-center mt-4">
        <Button text="07.62.26.61.95" className='m-6'/>
        </div>
      </section>

      <section className="my-8" id="expertise">
      <TitleHr text={t("expertise.section")} size="md:text-2xl text-xl"/>
        <Expertise />
      </section>
      
      <section className="" id="projets">
      <TitleHr text="PORTFOLIO" size="md:text-2xl text-xl"/>
        <Portfolio />
      </section>
      
      <section>
        <RecommenationBanner/>
      </section>
      
     
      <section className="my-8" id="skills">
      <TitleHr text="SKILLS" size="md:text-2xl text-xl"/>
        <Skills/>
      </section>

      <section className="my-8" id="contact">
      <TitleHr text="CONTACT" size="md:text-2xl text-xl"/>
        <Contact/>
      </section>

      <section className="my-8">
      <TitleHr text={t("testimonial.section")} size="md:text-2xl text-xl"/>
        <RatingDisplay/>
      </section>
    </div>
  );
};

export default Home;
