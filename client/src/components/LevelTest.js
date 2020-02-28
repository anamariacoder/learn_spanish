import React, { useState, useEffect } from "react";

const LevelTest = () => {
  const [test, setTest] = useState(null);
  // console.log("test", test);
  const [reponses, setReponses] = React.useState({});

  useEffect(() => {
    fetch("/api/leveltest")
      .then(response => {
        return response.json();
      })
      .then(res => {
        setTest(res);
        console.log(res);
      });
  }, []);

  function handleChange(evt) {
    const value = evt.target.value;
    setReponses({
      ...reponses,
      [evt.target.name]: value
    });
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("response valide");
    let keys = Object.keys(reponses);

    keys.map((v, i) => {
      console.log(v);
      v = v.replace("question", "");
      console.log(v);
      console.log(reponses[keys[i]]);
      console.log(i);

    })
    console.log(test[0].questions.levelTests);
  };
  return (
    <div>
      <h1>Test et progrès</h1>
      <div>
        {test &&
          test[0] &&
          test[0].questions.levelTests.map((q, i) => {
            return (
              <div key={i}>
                <img src={q.image} alt="question" />
                {q.question}
                <select name={`question${i}`} onChange={handleChange}>
                  {q.choix.map((c, i) => {
                    return <option key={i}>{c}</option>;
                    
                  })}
                </select>
              </div>
            );
          })}
      </div>
      <button onClick={handleSubmit}>Valider</button>
    </div>
  );
};

export default LevelTest;
