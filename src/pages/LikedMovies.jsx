import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import axios from "axios";

const LikedMovies = () => {
  const [moviesAdd, setMoviesAdd] = useState([]);

  useEffect(() => {
    let idInStorage = window.localStorage.film
      ? window.localStorage.film.split(",")
      : [];
    for (let i = 0; i < idInStorage.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${idInStorage[i]}?api_key=b90167f623ed1f3ecc1d2103113aa6d0&language=fr-FR`
        )
        .then((res) => setMoviesAdd((moviesAdd) => [...moviesAdd, res.data]));
    }
  }, []);
  return (
    <div>
      <Navigation />
      <div className="cards-container">
        {moviesAdd.map((movie) => (
          <Card key={movie.id} film={movie} />
        ))}
      </div>
      <p className="credit">
        Ce site utilise l'API de <a href="https://www.themoviedb.org/">TMDB</a>{" "}
      </p>
    </div>
  );
};

export default LikedMovies;
