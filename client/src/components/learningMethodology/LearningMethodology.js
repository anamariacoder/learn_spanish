import React, { useState, useEffect } from "react";

const LearningMethodology = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <body className="container-learning-methodology">
      <div className="info-learning-methodology">
        <script
          src="https://kit.fontawesome.com/8340b5561f.js"
          crossOrigin="anonymous"
        ></script>

        <h1>Méthodologie d'apprentisage</h1>
        <p>
          Notre méthodologie est basée sur la pratique quotidienne de la langue
          et sur l'élargissement du vocabulaire de base. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pour
          cette raison, nos piliers sont : la section de vérification des
          progrès et les tests de validation des progrès réalisés; ainsi que les
          sections d'extension du vocabulaire. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tout le
          matériel offert est le produit de la compilation et de l'analyse de
          documents qui améliorent la pratique quotidienne de la langue. D'où le
          caractère fonctionnel et interactif. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dans un
          premier temps, notre site est dédié aux adultes francophones,
          débutants et avec peu de temps disponible. C'est pourquoi le matériel
          utilisé est de nature pratique, non extensif, facile à apprendre et
          associé à la vie réelle et quotidienne. <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Merci d'avoir
          rejoint cette expérience didactique, direct et fonctionnelle pour
          apprendre l'espagnol !!!
          {/* Nuestra metodología se basa en la práctica cotidiana de la lengua y en
          la ampliación del vocabulario de base. Por esta razón, nuestros
          pilares son : la verificación de progreso y los tests de validación
          del avance alcanzado, así como las secciones de ampliación de
          vocabulario. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Todo el
          material ofrecido es producto de la recopilación y análisis de
          documentos que potencien la práctica cotidiana de la lengua. De ahí,
          el carácter funcional e interactivo. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inicialmente, nuestro site,
          está dedicado a adultos francófonos, déebutantes, con poco tiempo
          disponible y que deseen hacer énfasis en aspectos de la vida real y
          cotidiana. <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;¡ Gracias por
          unirse a esta experiencia didática funcional para el aprendizaje del
          español ! */}
        </p>
      </div>
      {/* desde aqui AYER 28-03-2020*/}
      {/* <input type="checkbox" id="spoiler2" />
      <label for="spoiler2">Spoiler</label>

      <div class="spoiler">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
      </div>
      {
        <div>
          <input type="checkbox" id="spoiler" />
          <label for="spoiler">Spoiler</label>
          <div class="spoiler">
            Una forma de esconder cierta información hasta que el usuario hace
            <br />
          </div>
        </div>
      } */}

      {/* hasta aqui */}
      <div className="photo-learning-methodology"></div>
    </body>
  );
};

export default LearningMethodology;
