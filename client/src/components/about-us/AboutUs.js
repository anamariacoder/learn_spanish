import React, { useState, useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
   
  };
  return (
    <body className="container-about-us">
      <div className="info-about-us">
        <h3>Qui sommes-nous ?</h3>
        <p>Nous sommes des professeurs d'espagnol natifs.
Une équipe de professeurs de langues et d'ingénieurs en informatique.
Nous avons commencé ce projet afin de motiver l'apprentissage de la langue espagnole chez les francophones. Bientôt, nous ajouterons plus de fonctionnalités à notre site. Et dans notre prochaine version étendue, nous inclurons le vocabulaire informatique demandé par nos affiliés. </p>
      </div>
    </body>
  );
};

export default AboutUs;