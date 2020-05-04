import React from "react";
import * as types from "../constants";
import Correct from "../components/test/Correct";

export const fetchTests = () => async (dispatch) => {
  fetch("/api/leveltest")
    .then((response) => {
      // return response.json();
      return response.json(console.log("ESTOY EN actions/level-test"));/*AUJOURD'HUI 24 AVRIL */
 
    })
    .then((tests) => {
      dispatch({ type: types.GET_LEVEL_TESTS, payload: tests });
    });
};

export const checkLevelTest = () => async (dispatch, getState) => {
  let nbCorrect = 0;
  let nbAnswered = 0;
  let nbWrong = 0;
  let showResult = 0;

  const responses = getState().levelTest.responses;
  const tests = getState().levelTest.tests;
  let keys = Object.keys(responses);
  keys.map((v, i) => {
    v = v.replace("question", "");
    let numBonneReponse = tests[0].questions.levelTests[v].answer;
    let reponseCorrect =
      tests[0].questions.levelTests[v].choix[numBonneReponse]; //subindex of the correct answer
    let reponseUtilisateur = responses[keys[i]];
    if (reponseUtilisateur === reponseCorrect) {
      nbCorrect += 1;
      nbAnswered += 1;
      console.log(" Number correct answers ", nbCorrect);
      console.log("2 je suis dans actions/level-test"); /* AUJOURD'HUI 22 AVRIL */
      console.log("je VAIS A CORRECT"); /* AUJOURD'HUI 22 AVRIL */
      return (Correct); /* AUJOURD'HUI 22 AVRIL */
    } else {
      nbWrong += 1;
      nbAnswered += 1;
    }

    // Fontion pour calculer le nombre total de réponses correctes, incorrectes et sans réponse et la note de l'utilisateur
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