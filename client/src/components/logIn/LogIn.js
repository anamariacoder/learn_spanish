// **7** 17 juin
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //**11** 18 juin */
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; //**11** 18 juin */
import { logIn } from "../../actions/userActions"; //**11** 18 juin */

const LogIn = (props) => {
  const { logIn } = props;
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const updateCredentials = (event) => {
    // comme le handleChange
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (async) => {
    // console.log("email ",logIn.email);
    logIn(credentials);
  };

  return (
    <body className="container-logIn">
      <div className="info-logIn">
        <h2>Connexion</h2>
        <p>
          {" "}
          <br />
        </p>
        <label>Prénom </label> {/* //**11** 18 juin */}
        <input
          name="first_name"
          type="first_name"
          placeholder="Prénom"
          value={credentials.first_name}
          onChange={updateCredentials}
        ></input>
        <p>
          {" "}
          <br />
        </p>
        <label>Nom </label> {/* //**11** 18 juin */}
        <input
          name="last_name"
          type="last_name"
          placeholder="Nom"
          value={credentials.last_name}
          onChange={updateCredentials}
        ></input>
        <p>
          {" "}
          <br />
        </p>
        <label>E-mail </label> {/* //**11** 18 juin */}
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          required
          value={credentials.email}
          onChange={updateCredentials}
        ></input>
        <p>
          {" "}
          <br />
        </p>
        <label>Mot de passe </label>
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          required
          value={credentials.password}
          onChange={updateCredentials}
        ></input>
        <p>
          {" "}
          <br />
        </p>
        <div className="button-login">
          <button type="submit" onClick={() => onSubmit()}>
            Se connecter
          </button>
        </div>
        {/* <p> <br /></p> */}
      </div>
    </body>
  );
};

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(logIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
