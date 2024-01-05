import React from "react";

const Card = ({ film }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("-");
  };
  const movieTags = () => {
    let tagsArray = [];
    for (let i = 0; i < film.genre_ids.length; i++) {
      switch (film.genre_ids[i]) {
        case 28:
          tagsArray.push(`Action`);
          break;
        case 12:
          tagsArray.push(`Aventure`);
          break;
        case 16:
          tagsArray.push(`Animation`);
          break;
        case 35:
          tagsArray.push(`Comédie`);
          break;
        case 80:
          tagsArray.push(`Policier`);
          break;
        case 99:
          tagsArray.push(`Documentaire`);
          break;
        case 18:
          tagsArray.push(`Drame`);
          break;
        case 10751:
          tagsArray.push(`Famille`);
          break;
        case 14:
          tagsArray.push(`Fantasie`);
          break;
        case 36:
          tagsArray.push(`Histoire`);
          break;
        case 27:
          tagsArray.push(`Horreur`);
          break;
        case 10402:
          tagsArray.push(`Musique`);
          break;
        case 9648:
          tagsArray.push(`Mystère`);
          break;
        case 10749:
          tagsArray.push(`Romance`);
          break;
        case 878:
          tagsArray.push(`Science-fiction`);
          break;
        case 10770:
          tagsArray.push(`Téléfilm`);
          break;
        case 53:
          tagsArray.push(`Thriller`);
          break;
        case 10752:
          tagsArray.push(`Guerre`);
          break;
        case 37:
          tagsArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return tagsArray.map((tag) => <li key={tag}>{tag}</li>);
  };

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
        <p>Sortie le: {dateFormater(film.release_date)}</p>
        <div className="film-rate">
          <p>
            Note des spectateurs : {Math.round(film.vote_average * 10) / 10}/10
          </p>
        </div>
        <h4>Genres :</h4>
        <ul className="film-tags">
          {film.genre_ids
            ? movieTags()
            : film.genres.map((tag) => <li key={tag}>{tag.name}</li>)}
        </ul>
      </div>
      <div className="line"></div>
      <div className="film-summary">
        <h4>Synopsis :</h4>
        <p className="synopsis">{film.overview}</p>
      </div>
    </div>
  );
};

export default Card;
