import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import axios from "axios";

const Home = () => {
  const [filmDatas, setFilmDatas] = useState([]);
  const [filmSearch, setFilmSearch] = useState("");

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=b90167f623ed1f3ecc1d2103113aa6d0&query=
        ${filmSearch}&language=fr-FR`
    ).then((res) => setFilmDatas(res.data.results));
  }, [filmSearch]);
  return (
    <div>
      <Navigation />
      <div className="search-tools">
        <div className="search-bar">
          <input
            className="bar"
            type="text"
            placeholder="Rechercher un film"
            onChange={(e) => setFilmSearch(e.target.value)}
          />
          <button className="search-btn" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="search-rate">
          <button className="chart up" type="submit">
            <i className="fa-solid fa-arrow-trend-up"></i>
            <p>TOP</p>
          </button>
          <button className="chart down" type="submit">
            <p>FLOP</p>
            <i className="fa-solid fa-arrow-trend-down"></i>
          </button>
        </div>
      </div>
      <div className="cards-container">
        {filmDatas.map((film) => (
          <Card key={film.id} film={film} />
        ))}
      </div>
      <p className="credit">
        Ce site utilise l'API de <a href="https://www.themoviedb.org/">TMDB</a>
      </p>
    </div>
  );
};

export default Home;
