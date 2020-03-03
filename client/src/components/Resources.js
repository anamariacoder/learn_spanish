import React, { useState, useEffect } from "react";

const Resources = () => {
  const [test, setTest] = useState(null);
  //console.log("resources", Resources);
  useEffect(() => {
    fetch("/api/leveltest")
      .then(response => {
        return response.json();
      })
      .then(res => {
        //console.log(res);
        setTest(res);
      });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    console.log("response valide");
  };
  return (
    <div>
      <h1>Ressources</h1>
      <div>
        {console.log(test)}
        {test &&
          test.map((test, i) => {
            console.log(test);


            // test.questions.levelTests.map(levelTest => {
            //   console.log(levelTest)
            // } )

            // return (
            //   <div key={i}>
            //     <img src={q.image} alt="question" />
            //     {q.question}
            //     <select></select>
            //   </div>
            // );
          })}
      </div>
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default Resources;
