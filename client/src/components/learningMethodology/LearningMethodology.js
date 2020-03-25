import React, { useState, useEffect } from "react";

const LearningMethodology = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("por aqui voy");
  };
  return (
    <body className="container-learning-methodology">
      <div className="info-learning-methodology">
        <h1>Méthodologie d'apprentisage</h1>
        <p>
          Nuestra metodología se basa en la práctica cotidiana de la lengua y en
          la ampliación del vocabulario de base. Por esta razón, nuestros
          pilares son : la verificación de progreso y los tests de validación
          del avance alcanzado, así como las secciones de ampliación de
          vocabulario.
        </p>
        <p>
          Todo el material ofrecido es producto de la recopilación y análisis de
          documentos que potencien la práctica cotidiana de la lengua. De ahí, el
          carácter funcional e interactivo. Inicialmente, nuestro site, está
          dedicado a adultos francófonos, con poco tiempo disponible y que deseen 
          hacer enfasis en aspectos de la vida real y cotidiana.  
        </p>
        <p>
          ¡ Gracias por unirse a esta experiencia didática funcional para el
          aprendizaje del español !
        </p>
      </div>
    </body>
  );
};

export default LearningMethodology;
