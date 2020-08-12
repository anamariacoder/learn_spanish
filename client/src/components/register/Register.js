import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const Register = (props) => {
  const { register } = props;
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const updateCredentials = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (async) => {
    // console.log("email ",logIn.email);

    // console.log("onSubmit Register credentials ", credentials);
    register(credentials);
  };

  return (
    <body className="container-register">
      <div className="info-register">
        <h2>Enregistrement</h2>
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
          onChange={updateCredentials} // On utilise ce methode ou un autre ??
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
        <div className="button-register">
          <button type="submit" onClick={() => onSubmit()}>
            S'enregistrer
          </button>
        </div>
        <p>
          <br />
        </p>
        <a href="/login">Se connecter</a>
      </div>
    </body>
  );
};

const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  register: (first_name, last_name, email, password) =>
    dispatch(register(first_name, last_name, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
