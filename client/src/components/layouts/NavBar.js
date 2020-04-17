import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navContainer">
      <div className="home-nav">
        <Link to="/">Accueil </Link>
      </div>

      {/* <div className="global-test">
        <Link to="/test"> "Test global"  </Link>
      </div> */}

    {/* /* */ }
      <div className="test-global">
        <Link to="/testGlobal"> Test global</Link>
      </div>

      {/* /* */ }
      {/* <div className="global-progress-test"> */}
      <div className="global-progress">
        <Link to="/progressGlobal"> Progrès </Link>
      </div>

      <div className="resources">
        <Link to="/resources"> Ressources </Link>
      </div>

      <div className="learning-methodology">
        <Link to="/learningMethodology"> Méthodologie d'apprentisage </Link>
        
      </div>

      <div className="learning-tips">
        <Link to="/learningTips"> Astuces pour apprendre l'espagnol </Link>
      </div>

      <div className="connection">
        <Link to="/sign"> Connexion </Link>
      </div>
    </div>
  );
};

export default NavBar;
