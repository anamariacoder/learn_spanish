import React, { useState, useEffect } from "react";
import good from "../public/img/like.png";

const Correct = (props) => {
  // useEffect(() => {
  //   props.fetchTests();
  // }, []);

  function handleChange(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.checkLevelTest();
  };

  //  aujourd'hui 22 avril
  console.log("Je suis dans COMPONENTS/test/CORRECT");

  return <div className="iconTest"> 
   <h1>GOOD ANSWER</h1></div>;

  
};

export default Correct;
