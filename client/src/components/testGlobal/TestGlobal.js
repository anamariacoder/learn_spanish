import React from "react";
// import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Bootstrap from "bootstrap";
// import LevelTest from "../LevelTest";
import LevelTest from "../../components/level-test/LevelTest";

const TestGlobal = (props) => {
  function handleChangeTestGlobal(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }

  const handleSubmitTestGlobal = (event) => {
    event.preventDefault();
    // props.checkLevelTest();
  };

  return (
    <body className="container-start-global-test">
      <div className="info-start-global-test">
        <h1>Test global</h1>
        <p>
          Dans cette section, vous avez accès au test global. Ce test vous
          permettra d'identifier votre niveau de connaissance initial et votre
          niveau de progression atteint en suivant nos cours de vocabulaire.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Pour passer le test, veuillez appuyer sur le lien{" "}
          <a>
            <Link to="/test">démarrer le test</Link>
          </a>
          . Lisez attentivement chaque phrase ou question et choisissez parmi
          les options disponibles. <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bonne
          chance !!! Commençons ...
        </p>
      </div>
    </body>
  );
};

export default TestGlobal;
