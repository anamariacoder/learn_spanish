import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const AboutUs = (props) => {
  function handleChange(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.checkLevelTest();
  };
  return (
    <body className="container-about-us">
      <div className="info-about-us">
        <h4>Qui sommes-nous ?</h4>
        <p>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nous sommes des professeurs d'espagnol natifs. Avec une expérience de
          plus de cinq ans dans ce domaine. <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre équipe est composée de
          professionnels des langues et de l'informatique, dédiés à
          l'enseignement de la "lengua de Cervantes". 
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nous avons
          commencé ce projet afin de motiver l'apprentissage de la langue
          espagnole chez les francophones, à partir de zéro. C'est pourquoi notre première version est gratuite. <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nous vous encourageons à tirer le meilleur parti de notre version dédiée aux débutants.  <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <strong>Merci d'avoir rejoint notre projet et d'avoir décidé de
          grandir avec nous !!! </strong>
          <br />
          <br />{" "}
        </p>
      </div>
    </body>
  );
};

export default AboutUs;
