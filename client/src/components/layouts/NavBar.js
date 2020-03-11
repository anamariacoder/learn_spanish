import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="accueil-nav">
        <Link to="/">Accueil </Link>
      </div>

      <div className="resources">
        <Link to="/resources">Ressources </Link>
      </div>

      <div className="global-progress-test">
        <Link to="/test">Test et progrès </Link>
      </div>

      <div className="learning-methodology">Méthodologie d'apprentisage</div>

      <div className="learning-tips">Astuces pour apprendre l'espagnol</div>

      <div className="connection">
        <Link to="/sign">Connexion </Link>
      </div>
    </div>
  );
};

export default NavBar;
