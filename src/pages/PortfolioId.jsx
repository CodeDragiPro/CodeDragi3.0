import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPortfolios } from "../api/portfolioApi";
import Titles from "../components/ui/Titles";
import Blockquote from "../components/ui/BlockQuote";
import Tag from "../components/ui/Tag";
import Button from "../components/ui/Button";
import PortfolioIdGallery from "../components/Gallery/PortfolioIdGallery";
import Spinner from '../components/ui/Spinner'

const PortfolioId = () => {
  const { id } = useParams();
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const portfolios = await fetchPortfolios();
      const selectedPortfolio = portfolios.find((item) => item.id === id);
      setPortfolio(selectedPortfolio);
    };

    fetchData();
  }, [id]);

  if (!portfolio) {
    return <Spinner/>;
  }

  return (
    <div className="flex flex-col justify-center md:px-20 px-4 text-white">
      <div className="flex flex-col items-start justify-center mt-4">
        <Link to="/">
          <Button text="Retour" animate="animate-pulse" />
        </Link>
      </div>
      <Titles
        text={portfolio.title}
        fontSize="md:text-6xl text-4xl"
        justify="center"
      />
      <hr className="h-px my-8 bg-white border-0 dark:bg-white" />
      <div className="flex items-center justify-center">
        <div
          class="blob"
          style={{ backgroundImage: `url(${portfolio.images[0]})` }}
        ></div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <Link to={`https:${portfolio.link}`}>
          <Button text="voir le site en ligne" animate="animate-bounce" />
        </Link>
      </div>
      <hr className="h-px my-8 bg-white border-0 dark:bg-white" />
      <Titles
        text="A propos de ce projet"
        fontSize="md:text-4xl text-2xl"
        justify="start"
      />
      <Blockquote text={portfolio.description} />
      <hr className="h-px my-8 bg-white border-0 dark:bg-white" />
      <Titles text="Détails" fontSize="md:text-4xl text-2xl" justify="start" />
      <div className="flex flex-col  justify-center items-start">
        <div className="flex justify-between items-center w-full pb-2">
          <p className="text-xl font-bold">Titre</p>
          <p className="text-lg italic text-gray-400">{portfolio.title}</p>
        </div>
        <div className="flex justify-between items-center w-full pb-2">
          <p className="text-xl font-bold">Client</p>
          <p className="text-lg italic text-gray-400">{portfolio.client}</p>
        </div>
        <div className="flex justify-between items-center w-full pb-2">
          <p className="text-xl font-bold">Date</p>
          <p className="text-lg italic text-gray-400">
            {portfolio.date.toDate().toLocaleDateString()}
          </p>
        </div>
        <div className="flex justify-between items-center w-full pb-2">
          <p className="text-xl font-bold">Catégories</p>
          <div className="flex space-x-2">
            {portfolio.selectedTypes.map((category, index) => (
              <Tag key={index} tag={category} />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center w-full pb-2">
          <p className="text-xl font-bold">Technologies</p>
          <div className="flex space-x-2">
            {portfolio.selectedCategories.map((technology, index) => (
              <Tag key={index} tag={technology} />
            ))}
          </div>
        </div>
        <Titles
          text="Gallerie"
          fontSize="md:text-2xl text-xl"
          justify="start"
        />
        <div className="flex justify-between items-center w-full p-2">
          <PortfolioIdGallery images={portfolio.images} />
        </div>
      </div>
      <hr className="h-px my-8 bg-white border-0 dark:bg-white" />
      <Titles text="Design" fontSize="md:text-4xl text-2xl" justify="start" />
      <div className="flex justify-between items-center w-full p-2">
        <p className="text-xl font-bold">Police</p>
        <p className="text-lg italic text-gray-400">{portfolio.font}</p>
      </div>
      <div className="flex justify-between items-center w-full p-2">
        <p className="text-xl font-bold">Charte graphique</p>
        <div className="flex space-x-2">
          {portfolio.brands.map((color, index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded-full`}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      <Titles
        text="Gallerie graphique"
        fontSize="md:text-2xl text-xl"
        justify="start"
      />
      <div className="flex justify-between items-center w-full p-2">
        <PortfolioIdGallery images={portfolio.graphicsImages} />
      </div>
    </div>
  );
};

export default PortfolioId;
