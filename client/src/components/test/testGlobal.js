 import React from "react";



function testGlobal(props) {

  function handleChange(evt) {
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.checkLevelTest();
  };

  return <div>
    <p>Ce test sert à valider ce que vous apprenez pendant le cours. d’où l’importance de le prendre avant de commencer, afin d’établir les progrès réalisés</p>
    hola ana
  </div>;
}

export default testGlobal;

