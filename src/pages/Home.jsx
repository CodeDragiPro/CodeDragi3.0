import React from "react";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Portfolio from "../components/Portfolio";
import Titles from "../components/ui/Titles";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="md:px-20 px-4">

      <section className="pt-4">
        <Hero />
      </section>
      
      <section className="mt-2">
      <Titles text="Ce que nous proposons" fontSize="md:text-4xl text-2xl" justify="center" />
        <Expertise />
      </section>
      
      <section className="mt-2">
      <Titles text="portfolio" fontSize="md:text-4xl text-2xl" justify="center" />
        <Portfolio />
      </section>
      
      <section className="mt-8">
      <Titles text="skills" fontSize="md:text-4xl text-2xl" justify="center" />
        <Skills/>
      </section>

      <section className="mt-8">
      <Titles text="Contact" fontSize="md:text-4xl text-2xl" justify="center" />
        <Contact/>
      </section>
    </div>
  );
};

export default Home;
