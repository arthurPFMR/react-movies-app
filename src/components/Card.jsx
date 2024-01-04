import React from "react";

const Card = ({ film }) => {
  const addMoviesToStorage = () => {
    let dataToStorage = window.localStorage.film
      ? window.localStorage.film.split(",")
      : [];

    if (!dataToStorage.includes(film.id.toString())) {
      dataToStorage.push(film.id);
      window.localStorage.film = dataToStorage;
    }
  };
  return (
    <div className="card-container">
      <i
        type="submit"
        className="fa-regular fa-heart"
        onClick={(e) => addMoviesToStorage(e)}
      ></i>
      <i type="submit" className="fa-solid fa-heart"></i>
      <div className="img-container">
        <img
          className="film-img"
          src={
            film.poster_path
              ? "https://image.tmdb.org/t/p/original/" + film.poster_path
              : "./img/no-img.webp"
          }
          alt=""
        />
      </div>
      <div className="infos">
        <h3 className="film-title">{film.title}</h3>
        <p>Sortie le: {film.release_date}</p>
        <div className="film-rate">
          <p>
            Note des spectateurs : {Math.round(film.vote_average * 10) / 10}/10
          </p>
        </div>
        <ul className="film-tags"></ul>
      </div>
      <div className="film-summary">
        <h4>Synopsis :</h4>
        <p className="synopsis">{film.overview}</p>
      </div>
    </div>
  );
};

export default Card;
