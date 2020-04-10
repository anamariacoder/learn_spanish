import React, { useState, useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <body className="container-home">
      <div className="info-home">
        <h> J'apprends l'espagnol</h>
        <p>&nbsp;Apprenez&nbsp;&nbsp;&nbsp; l'espagnol&nbsp;&nbsp;&nbsp;&nbsp;facilement    <br />&nbsp;&nbsp;et&nbsp;&nbsp;&nbsp;&nbsp;validez &nbsp;&nbsp;&nbsp;votre&nbsp;&nbsp;&nbsp; progression !!</p>
        {/* <h2>et validez votre progression !</h2> */}
      </div>
    </body>
  );
};

export default Home;
