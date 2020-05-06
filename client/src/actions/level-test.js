import React from "react";
import * as types from "./../constants";
import Correct from "../components/test/Correct";
import good from "../components/public/img/like.png"; /*AUJOURD'HUI 22 AVRIL */

let reponseCorrect = 0;
let reponseUtilisateur = 0;

export const fetchTests = () => async (dispatch) => {
  fetch("/api/leveltest")
    .then((response) => {
      console.log("dans fetchLevelTest RETURNING response.json");

      return response.json();
      // return response.json(
      //   console.log("ESTOY EN actions/level-test")
      // ); /*AUJOURD'HUI 22 AVRIL */
    })
    .then((tests) => {
      console.log("dans fetchLevelTest RETURNING tests");

      dispatch({ type: types.GET_LEVEL_TESTS, payload: tests });
    });
};

export const isCorrect = (props) => {
  if (reponseUtilisateur === reponseCorrect) return <Correct />
  // if (reponseUtilisateur === reponseCorrect) return Correct();
  // } else {
  //   return <NotCorrect />;
  // }
};

export const checkLevelTest = () => async (dispatch, getState) => {
  let nbCorrect = 0;
  let nbAnswered = 0;
  let nbWrong = 0;
  let showResult = 0;

  const responses = getState().levelTest.responses;
  const tests = getState().levelTest.tests;

  // const isCorrect = (props) => {
    // if (reponseUtilisateur === reponseCorrect) return <Correct />
    // if (reponseUtilisateur === reponseCorrect) return (console.log("Je suis dans <CorRRRRrect />"));
    // if (reponseUtilisateur === reponseCorrect) return Correct();
    // } else {
    //   return <NotCorrect />;
    // }
  // };

  let keys = Object.keys(responses);
  keys.map((v, i) => {
    v = v.replace("question", "");

    let numBonneReponse = tests[0].questions.levelTests[v].answer;
    reponseCorrect = tests[0].questions.levelTests[v].choix[numBonneReponse]; //subindex of the correct answer
    reponseUtilisateur = responses[keys[i]];

    console.log("reponseUtilisateur  ", reponseUtilisateur); // 23 AVRIL
    console.log("reponseCorrect  ", reponseCorrect); // 23 AVRIL

    console.log(Object.keys(responses), responses, "OBJECT(keys)"); // 23 AVRIL

    if (reponseUtilisateur === reponseCorrect) {
      nbCorrect += 1;
      nbAnswered += 1;
      console.log(" Number of correct answers ", nbCorrect);
      console.log(
        "2 je suis dans actions/level-test"
      ); /* AUJOURD'HUI 22 AVRIL */
      console.log("je VAIS appeler isCORRECT"); /* AUJOURD'HUI 22 AVRIL */

      return Correct() /* AUJOURD'HUI 22 AVRIL */;
    } else {
      nbWrong += 1;
      nbAnswered += 1;
    }

    // Fonction pour calculer le nombre total de réponses correctes, incorrectes et sans réponse et la note de l'utilisateur
    // console.log("2 Number false answers ", nbWrong); // Quantité de mauvaises réponses
    // console.log("3 Nombre de questions répondues :", nbAnswered);
    // fetch POST => nbCorrect, => nouvelle route server qui insert les data
  });

  // showResult = 1;
  console.log("1 Number correct answers ", nbCorrect);

  // console.log("2 Number false answers ", nbWrong); // Quantité de mauvaises réponses
  // console.log("3 Nombre de questions répondues :", nbAnswered);
};

export const handleResponses = (target) => async (dispatch, getState) => {
  const responses = getState().levelTest.responses;
  responses[target.name] = target.value;
  dispatch({
    type: types.HANDLE_RESPONSE,
    payload: responses,
  });
};

// export default isCorrect;

