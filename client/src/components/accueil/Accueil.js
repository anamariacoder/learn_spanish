import React, { useState, useEffect } from "react";

const Accueil = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <body className="container-accueil">
      <div className="info-accueil">
        <h> J'apprends l'espagnol</h>
        <p>&nbsp;Apprenez&nbsp;&nbsp;&nbsp; l'espagnol&nbsp;&nbsp;&nbsp;&nbsp;facilement    <br />&nbsp;&nbsp;et&nbsp;&nbsp;&nbsp;&nbsp;validez &nbsp;&nbsp;&nbsp;votre&nbsp;&nbsp;&nbsp; progression !!</p>
        {/* <h2>et validez votre progression !</h2> */}
      </div>
    </body>
  );
};

export default Accueil;
