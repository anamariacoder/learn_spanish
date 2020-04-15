import React, { useState, useEffect } from "react";

const SocialMedia = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <body className="container-learning-tips">
      <div className="info-learning-tips">
        {/* <script
          src="https://kit.fontawesome.com/8340b5561f.js"
          crossOrigin="anonymous"
        ></script> */}

        <h2>Nos reseaux sociaux</h2>
        <p>
          En tant que débutant dans la langue, vous devez être conscient que
          c'est un processus qui va du simple au complexe et qui nécessitera
          votre dévouement, et même si vous avez peu de temps, il est important
          que vous en profitiez efficacement. Voici donc quelques conseils pour
          vous guider dans cette aventure d'apprentissage de l'espagnol.
          <br />
          
        </p>
      </div>

      {/* <div class="photo-learning-tips"></div> */}
    </body>
  );
};

export default SocialMedia;
