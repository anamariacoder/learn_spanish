import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransButton from "../cors/TransButton";
import { logOut } from "../../actions/userActions";

const NavBar = (props) => {
  const { isAuth, user } = props.userProps;

  return (
    <div className="navContainer">
      <div className="home-nav">
        <a>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/">Accueil </Link>
        </a>
      </div>
      <div className="test-global">
        <Link to="/testGlobal"> Test global</Link>
      </div>
      <div className="global-progress">
        <Link to="/progressGlobal"> Progrès </Link>
      </div>
      <div className="learning-methodology">
        <Link to="/learningMethodology"> Méthodologie d'apprentissage </Link>
      </div>
      <div className="learning-tips">
        <Link to="/learningTips"> Astuces pour apprendre l'espagnol </Link>
      </div>

      {!isAuth ? (
        <div className="connection">
          <Link to="/logIn"> Connexion </Link>
        </div>
      ) : (
        <div className="login-greeting">
          <p>Bonjour {user.firstName}</p>
          <div className="disconnection-button">
            <TransButton onClick={()=>logOut()}>Déconnexion</TransButton>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userProps: state.userState,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
