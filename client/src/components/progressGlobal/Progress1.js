import React, { useState, useEffect } from "react";

const Progress1 = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <body className="container-progress-global">
      <div className="info-progress-global">
        {/* <script
          src="https://kit.fontawesome.com/8340b5561f.js"
          crossOrigin="anonymous"
        ></script> */}

        <h1>Progrès</h1>
        <p>
        Dans cette section, vous obtiendrez un rapport détaillé de vos progrès dans l'apprentissage de l'espagnol, en utilisant notre application. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>
            {/* <div className="photo-progress"></div> */}
    </body>
  );
};

export default Progress1;
