import React, { useState, useEffect } from "react";

import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//29 avril
import LevelTestUserSummary from "../../components/levelTestUserSummary/LevelTestUserSummary";

const Progress1 = (props) => {
  function handleChangeProgress(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <body className="container-progress-global">
      <div className="info-progress-global">
        <h1>Progrès</h1>
        <p>
          Dans cette section, vous obtiendrez un rapport détaillé de vos progrès
          dans l'apprentissage de l'espagnol, en utilisant notre application.{" "}
          <br />
          <br />
         
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Pour regarder votre progression, veuillez appuyer sur le lien  <a> <Link to="/LevelTestUserSummary">
           regarder le récapitulatif de ma progression
            </Link>
          </a>
          . &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>
    </body>
  );
};

export default Progress1;
