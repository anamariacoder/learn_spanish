import React, { useState, useEffect } from "react";

const Resources = () => {
  useEffect(() => {
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>Ressources</h1>
      <div>

      </div>
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default Resources;
