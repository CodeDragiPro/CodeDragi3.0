import React from "react";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Titles from "../components/ui/Titles";

const Home = () => {
  return (
    <div>
      <section className="mt-2">
        <Hero />
      </section>
      <Titles text="Ce que nous proposons" fontSize="md:text-4xl text-2xl" />
      <section className="mt-2">
        <Expertise />
      </section>
      <Titles text="Ce que nous proposons" fontSize="md:text-4xl text-2xl" />
      <section className="mt-2">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
