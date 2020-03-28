// var clic = 1;
// function divLogin() {
//   if (clic == 1) {
//     document.getElementById("caja").style.height = "100px";
//     clic = clic + 1;
//   } else {
//     document.getElementById("caja").style.height = "0px";
//     clic = 1;
//   }
// }

import React, { useState, useEffect } from "react";

const divLogin = () => {
  // useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <body className="caja">
     
        <h3>Traduttion</h3>
        <p>
          Nous sommes des professeurs d'espagnol natifs. Une équipe de
          professeurs de langues et d'ingénieurs en informatique. Nous avons
          commencé ce projet afin de motiver l'apprentissage de la langue
          espagnole chez les francophones. Bientôt, nous ajouterons plus de
          fonctionnalités à notre site. Et dans notre prochaine version étendue,
          nous inclurons le vocabulaire informatique demandé par nos affiliés.{" "}
        </p>
      
    </body>
  );
};

export default divLogin;
