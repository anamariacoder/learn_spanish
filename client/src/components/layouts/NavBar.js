import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TransButton from "../cors/TransButton";
import { logOut } from "../../actions/userActions";

const NavBar = (props) => {
  const { isAuth, user, idUser } = props.userProps; // retrieve the user info like user.firstName

  useEffect(() => {
    const existingToken = sessionStorage.getItem("xAuth");

    console.log("token in useeffect ", existingToken);
    if (existingToken)
      console.log("token is in sessionStorage sdkqjnjskqnkjdnqjdnqkdnsqnd");
    props.userProps.isAuth = true;
    console.log("isAuth useEffect ", isAuth);
  }, []);

  return (
    <div className="navContainer">
      <div className="home-nav">
        <href>
          <FontAwesomeIcon icon={faHome} />
          <Link to="/">Accueil </Link>
        </href>
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
            <TransButton onClick={() => logOut()}>Déconnexion</TransButton>
          </div>

          <Redirect to="/" />
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
