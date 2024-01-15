import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import axios from "axios";

const LikedMovies = () => {
  const [filmsData, setFilmsData] = useState([]);

  useEffect(() => {
    let filmsId = window.localStorage.films
      ? window.localStorage.films.split(",")
      : [];
    for (let i = 0; i < filmsId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${filmsId[i]}?api_key=b90167f623ed1f3ecc1d2103113aa6d0&language=fr-FR`
        )
        .then((res) => setFilmsData((filmsData) => [...filmsData, res.data]));//concatenation avec spread operator
    }
  }, []);
  return (
    <div>
      <Navigation />
      <div className="cards-container">
      {filmsData.length > 0 ? (
        filmsData.map((film) => <Card film={film} key={film} />)
      ) : (
        <h2>Aucun film ajouté au favoris ⌛</h2>
      )}
      </div>
      <p className="credit">
        Ce site utilise l'API de <a href="https://www.themoviedb.org/">TMDB</a>{" "}
      </p>
    </div>
  );
};

export default LikedMovies;
