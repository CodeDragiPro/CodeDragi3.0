import React from "react";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Portfolio from "../components/Portfolio";
import Titles from "../components/ui/Titles";

const Home = () => {
  return (
    <div className="md:px-20 px-4">
      <section className="pt-4">
        <Hero />
      </section>
      <Titles text="Ce que nous proposons" fontSize="md:text-4xl text-2xl" />
      <section className="mt-2">
        <Expertise />
      </section>
      <Titles text="portfolio" fontSize="md:text-4xl text-2xl" />
      <section className="mt-2">
        <Portfolio />
      </section>
    </div>
  );
};

export default Home;
