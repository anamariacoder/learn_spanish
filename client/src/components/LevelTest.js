import React, { useState, useEffect } from "react";

const LevelTest = () => {
  const [test, setTest] = useState(null);
  console.log("test", test);
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
      <h1>Test et progrès</h1>
      <div>
        {test &&
          test.questions.levelTests.map((q, i) => {
            return (
              <div key={i}>
                <img src={q.image} />

                {q.question}
                <select>
                  {q.choix.map((c, i) => {
                    return <option key={i}>{c}</option>;
                  })}
                </select>
              </div>
            );
          })}
      </div>
      <button onClick={handleSubmit} >Valider</button>
    </div>
  );
};

export default LevelTest;
