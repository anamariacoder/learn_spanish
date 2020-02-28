import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navContainer">
      <div className="accueil">
        <Link to="/home">Accueil</Link>
      </div>

      <div className="resources">
        <Link to="/resources">Ressources</Link>
      </div>

      <div className="testEtProgresglobal">
        <Link to="/test">Test et progrès</Link>
      </div>

      <div className="methodologieDApprentisage">
        <h2>Méthodologie d'apprentisage</h2>
      </div>

      <div className="astucespourapprendre">
        <h2>Astuces pour apprendre l'espagnol</h2>
      </div>

      <div className="connexion">
        <h2>Connexion</h2>
      </div>
    </div>
  );
};

export default Header;
