import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { logIn } from "../../actions/userActions";

const LogIn = (props) => { 
  const { logIn } = props;
  const [credentials, setCredentials] = useState({
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
        <p>
          <br />
        </p>
        <a href="/register">S'enregistrer</a>
      </div>
    </body>
  );
};

const mapStateToProps = (state, props) => {
  console.log("email mapStateToProps ");
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(logIn(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
