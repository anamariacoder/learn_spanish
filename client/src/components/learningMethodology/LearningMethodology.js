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
        <h3>Méthodologie d'apprentisage</h3>
        <p>lorem nnnnnnnnnnnnnnnnnnnnnnnnnn
          nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
          jjjjjjjjjjjjjjjjj </p>
      </div>
    </body>
  );
};

export default LearningMethodology;

