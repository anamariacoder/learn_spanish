import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="accueil-nav">
        <Link to="/">Accueil</Link>
      </div>

      <div className="resources">
        <Link to="/resources">Ressources</Link>
      </div>

      <div className="testEtProgresglobal">
        <Link to="/test">Test et progrès</Link>
      </div>

      <div className="methodologieDApprentisage">
        Méthodologie d'apprentisage
      </div>

      <div className="astucespourapprendre">
        Astuces pour apprendre l'espagnol
      </div>

      <div className="connexion">Connexion</div>
    </div>
  );
};

export default NavBar;
