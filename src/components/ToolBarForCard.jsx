// https://api.themoviedb.org/3/search/movie?api_key=b90167f623ed1f3ecc1d2103113aa6d0&query=lego&language=fr-FR
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const ToolBar = () => {
  const [filmDatas, setFilmDatas] = useState([]);
  const [filmSearch, setFilmSearch] = useState("animaux");
  const [sortMovies, setSortMovies] = useState(null);
  const [heartClicked, setHeartClicked] = useState(false);

  const handleClickHeart = () => {
    setHeartClicked(!heartClicked);
  };

  useEffect(() => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=b90167f623ed1f3ecc1d2103113aa6d0&query=
          ${filmSearch}&language=fr-FR`
    ).then((res) => setFilmDatas(res.data.results));
  }, [filmSearch]);

  return (
    <div className="search-tools">
      <div className="search-bar">
        <input
          id="search"
          className="bar"
          type="text"
          placeholder="Rechercher un film"
          onChange={(e) => setFilmSearch(e.target.value)}
        />
      </div>
      <div className="search-rate">
        <button
          className="chart up"
          type="submit"
          onClick={() => {
            setSortMovies("upToDown");
          }}
        >
          <i
            className={
              heartClicked ? "heart-clicked" : "fa-solid fa-arrow-trend-up"
            } 
          ></i>
          <p>TOP</p>
        </button>
        <button
          className="chart down"
          type="submit"
          onClick={() => {
            setSortMovies("downToUp");
            handleClickHeart();
          }}
        >
          <p>FLOP</p>
          <i className="fa-solid fa-arrow-trend-down"></i>
        </button>
      </div>
      <div className="cards-container">
        {filmDatas.length > 0 ? (
          filmDatas
            .sort((a, b) => {
              if (sortMovies === "upToDown") {
                return b.vote_average - a.vote_average;
              } else if (sortMovies === "downToUp") {
                return a.vote_average - b.vote_average;
              }
              return setSortMovies;
            })
            .map((film) => <Card key={film.id} film={film} />)
        ) : (
          <h2>Désolé nous n'avons pas pu trouver le film recherché 😞 </h2>
        )}
      </div>
    </div>
  );
};

export default ToolBar;
