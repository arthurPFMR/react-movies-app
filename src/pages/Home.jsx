import React from "react";
import Navigation from "../components/Navigation";
import ToolBarForCard from "../components/ToolBarForCard";

const Home = () => {
  return (
    <div>
      <Navigation />
      <ToolBarForCard />
      <p className="credit">
        Ce site utilise l'API de{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDB
        </a>
      </p>
    </div>
  );
};

export default Home;
