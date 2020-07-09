import React, { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <body className="container-home">
      <div className="info-home">
        <h> J'apprends l'espagnol</h>{" "}
      </div>
      <div className="info-home-paragraph">
        <p>
          &nbsp;Apprenez&nbsp; l'espagnol&nbsp;facilement &nbsp;et&nbsp;validez
          &nbsp;votre&nbsp;progression !!
        </p>
      </div>
    </body>
  );
};

export default Home;
