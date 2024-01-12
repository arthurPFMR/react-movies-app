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
    let movieToStorage = window.localStorage.films
      ? window.localStorage.films.split(",")
      : [];

    if (!movieToStorage.includes(film.id.toString())) {
      movieToStorage.push(film.id);
      // clef "films" pour LS => page likedmovies
      window.localStorage.films = movieToStorage;
    }
  };

  const deleteMovieFromStorage = () => {
    let movieToStorage = window.localStorage.films.split(",");
    // eslint-disable-next-line
    let newMovieToStorage = movieToStorage.filter((id) => id != film.id);
    window.localStorage.films = newMovieToStorage;
  };
  return (
    <div className="card-container">
      <div className="poster">
        {film.genre_ids ? (
          <i
            className="fa-solid fa-heart-circle-plus plus"
            onClick={(e) => addMoviesToStorage(e)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-heart-circle-minus minus"
            onClick={(e) => {
              deleteMovieFromStorage(e);
              window.location.reload();
            }}
          ></i>
        )}

        <img
          className="film-img"
          src={
            film.poster_path
              ? "https://image.tmdb.org/t/p/original/" + film.poster_path
              : "./img/no-img.webp"
          }
          alt={`"Affiche de : " = ${film.title}`}
        />
      </div>
      <div className="text">
        <div className="infos">
          <h3 className="film-title">{film.title}</h3>
          <p>Sortie le: {dateFormater(film.release_date)}</p>
          <p>
            Note des spectateurs : {Math.round(film.vote_average * 10) / 10}
            /10
          </p>
          <h4>Genres :</h4>
          <ul className="tags">
            {film.genre_ids
              ? movieTags()
              : film.genres.map((tag) => <li key={tag}>{tag.name}</li>)}
          </ul>
        </div>
        {/* <div className="line"></div> */}
        <div className="summary">
          <h4>Synopsis :</h4>
          <p className="synopsis">{film.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
