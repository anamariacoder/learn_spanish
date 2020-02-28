import React, { useState, useEffect } from "react";

const Resources = () => {
  const [test, setTest] = useState(null);
  console.log("resources", Resources);
  useEffect(() => {
    fetch("/api")
      .then(response => {
        return response.json();
      })
      .then(res => {
        setTest(res);
        console.log(res);
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
        {test &&
          test.questions.levelTests.map((q, i) => {
            return (
              <div key={i}>
                <img src={q.image} alt="question" />
                {q.question}
                <select></select>
              </div>
            );
          })}
      </div>
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default Resources;
