import React, { useState, useEffect } from "react";

const LevelTest = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/").then(response => {
      return response.json()
    }).then(res => {
      setTest(res)
      console.log(res)
    })

  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>
        {test && test.questions.levelTests.map((q, i) => {
            return <div key={i}>
              {q.question}
              <select>
                {q.choix.map((c, i) => {
                    return (
                      <option>{c}</option>

                    )
                })}
              </select>
              </div>;
          })}
      </p>
    </div>
  );
};

export default LevelTest;
