import React, { useState, useEffect, Component } from "react";
// import LevelTest from components/level-test;
import testGlobal from "../test/testGlobal";


const Resources = (propos) => {
  console.log('mensaje');
  useEffect(() => {
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log('mensaje');
  };
  return (
    <div>
      <h1>Ressources</h1>
      <div>

      </div>
      <button onClick={() =>testGlobal}>Valider</button>
    </div>
  );
};

export default Resources;
