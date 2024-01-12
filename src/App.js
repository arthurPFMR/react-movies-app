import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LikedMovies from "./pages/LikedMovies";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coups-de-coeur" element={<LikedMovies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
