import React, { useState, useEffect } from "react";

const LearningTips = () => {
  useEffect(() => {}, []);

  const handleSubmit = event => {
     event.preventDefault();
    console.log('por aqui voy');
   };
  return (
    <div>
      <h1>Astuces pour apprendre l'espagnol</h1>
      <div>
      <p>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>

     </div>
       {/* <button onClick={handleSubmit}>Valider</button> 
     */}
    </div>
  );
};

export default LearningTips;
