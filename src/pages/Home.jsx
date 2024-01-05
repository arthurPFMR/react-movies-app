import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import axios from "axios";
import ToolBar from "../components/ToolBar";

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
      <ToolBar />
      <p className="credit">
        Ce site utilise l'API de <a href="https://www.themoviedb.org/">TMDB</a>
      </p>
    </div>
  );
};

export default Home;
