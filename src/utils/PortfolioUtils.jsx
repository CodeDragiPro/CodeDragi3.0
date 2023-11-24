import { useEffect, useState } from "react";
import { fetchPortfolios } from "../api/portfolioApi";

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPortfolios();
      setProjects(data);
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    "Tous",
    ...new Set(projects.flatMap((project) => project.selectedTypes)),
  ];

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) =>
          project.selectedTypes.includes(selectedCategory)
        );

  return {
    selectedCategory,
    handleCategoryClick,
    categories,
    filteredProjects,
  };
};
