import React from "react";
import Navigation from "../components/Navigation";
import ToolBarForCard from "../components/ToolBarForCard";

const Home = () => {
  return (
    <div className="bg" style={{backgroundImage: "url(/public/img/film-2205325_640.jpg)"}}>
      <Navigation />
      <ToolBarForCard />
      <p className="credit">
        Ce site utilise l'API de <a href="https://www.themoviedb.org/">TMDB</a>
      </p>
    </div>
  );
};

export default Home;
