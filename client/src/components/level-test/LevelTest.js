import React, { useState, useEffect } from "react";
import good from "./../public/img/like.png";
import bad from "./../public/img/dislike.png";
import Correct from "../test/Correct";
import NotCorrect from "../test/NotCorrect";
import { connect } from "react-redux";
import {
  checkLevelTest,
  fetchTests,
  handleResponses,
  reponseCorrect,
  reponseUtilisateur,
} from "../../actions/level-test";

// const isCorrect = (props) => {
//   if (reponseUtilisateur === reponseCorrect) return <Correct />
//   // } else {
//   //   return <NotCorrect />;
//   // }
// };

const LevelTest = (props) => {
  const [hasSubmit, setSubmit] = useState(false);
  console.log("PROPS ", props);
  const { resultats } = props.levelTest;

  console.log("resultats", resultats);

  useEffect(() => {
    {
      console.log("4) fetchTests");
    }
    props.fetchTests();
  }, []);

  function handleChange(evt) {
    {
      console.log(
        "5) handleChange de LevelTest. On a commencé à sélectionner les options"
      );
    }
    const value = evt.target.value;
    props.handleResponses(evt.target);
  }

  const handleSubmit = (event) => {
    {
      // console.log("7) handleSubmit de LevelTest");
    }
    event.preventDefault();
    props.checkLevelTest();
    setSubmit(true);
    console.log("Props dans level test, ", props);
  };

  //let answer = null; /* 19 mai */

  return (
    <div>
      <h1>Test global</h1>
      <div>
        <div className="info-level-test">
          {props.levelTest.tests &&
            props.levelTest.tests.length &&
            props.levelTest.tests[0].questions.levelTests.map((q, i) => {
              return (
                <div key={i}>
                  {/* <img src={q.image} alt="question" /> */}

                  <img
                    className="fit-image-level-test"
                    src={q.image}
                    alt="question"
                  />
                  {q.question}

                  <select name={`question${i}`} onChange={handleChange}>
                    <option>Choissisez votre réponse</option>
                    {q.choix.map((c, i) => {
                      console.log(
                        "2) JE SUIS DANS COMPONENTS/level-test/LevelTest. Choissisez votre réponse"
                      );
                      return <option key={i}>{c}</option>;
                    })}
                  </select>
                  {/* <isCorrect answer={answer} />  */}
                </div>
              );
            })}
        </div>
      </div>

      <button onClick={handleSubmit}>Valider</button>
      {hasSubmit ? (
        <p>Vous avez {resultats[0]} bonnes réponses</p>
      ):(
        <p>
          Cliquez sur le bouton Soumettre pour voir une synthèse de vos
          résultats
        </p>
      )}
      
      {/* {console.log(
        "3) JE SUIS DANS COMPONENTS/level-test/ LevelTest et JE VAIS VALIDER"
      )} */}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  {
    console.log("1)  mapStateToProps");
  }
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  checkLevelTest: (reponses, test) => dispatch(checkLevelTest(reponses, test)),
  fetchTests: () => dispatch(fetchTests()),
  handleResponses: (event) => dispatch(handleResponses(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LevelTest);
