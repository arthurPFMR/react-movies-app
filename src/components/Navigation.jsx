import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="header">
      <ul className="navigation">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>
            <i className="fa-solid fa-house"></i>
            <p className="nav-text">ACCUEIL</p>
          </li>
        </NavLink>
        <NavLink
          to="/coups-de-coeur"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>
            <i className="fa-solid fa-heart"></i>
            <p className="nav-text">FAVORIS</p>
          </li>
        </NavLink>
      </ul>
      <h1>movies finder</h1>
    </div>
  );
};

export default Navigation;
