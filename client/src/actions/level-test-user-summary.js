import React from "react";
import * as types from "./../constants";

export const fetchLevelTestUserSummaries = () => async (dispatch) => {
  // fetch("api/leveltestusersummary") // TO VERIFY
  fetch("api/leveltestusersummary")
    .then((response) => {
      console.log("dans fetchLevelTestUserSummaries RETURNING response");
      // console.log(response);

      return response.json();
    })

    .then((testsUserSummary) => {
      console.log(
        "dans .then testsUserSumary AVANT le dispatch --> fetchLevelTestUserSummaries RETURNING testsUserSummary testsUserSummary  =  ", testsUserSummary
      );
      console.log(testsUserSummary);
      dispatch({
        type: types.GET_LEVEL_TEST_USER_SUMMARIES,
        payload: testsUserSummary,
      });
      console.log(
        "apres le dispatch dans fetchLevelTestUserSummaries RETURNING testsUserSummary = ", testsUserSummary
      );

      // // .then((userSummaries) => {
      // .then((testsUserSummary) => {
      //   console.log("dans fetchLevelTestUserSummaries RETURNING testsUserSummary");
      //   dispatch({
      //     type: types.GET_LEVEL_TEST_USER_SUMMARIES,
      //     payload: testsUserSummary,
      //   });
      //   console.log("dans fetchLevelTestUserSummaries RETURNING testsUserSummary");
    });
};

export const checkLevelTestUserSummary = () => async (dispatch, getState) => {
  // const responses = getState().levelTestUserSummary.responses; 06 mai REPLACED responses BY responsesSummary

  const responsesSummary = getState().levelTestUserSummaries.responsesSummary;
  const testsUserSummary = getState().levelTestUserSummaries.testsUserSummary;

  //   let keys = Object.keys(responses);
  //  keys.map((v,i) => v=v.replace("noteuser",""));
};

export const handleResponses = (target) => async (dispatch, getState) => {
  // const responsesSummary = getState().fetchLevelTestUserSummaries.responsesSummary; REPLACED BY the next instruction placed below
  const responsesSummary = getState().levelTestUserSummaries.responsesSummary;

  responsesSummary[target.name] = target.value;
  dispatch({
    type: types.HANDLE_RESPONSE,
    payload: responsesSummary,
  });
  console.log("responsesSummary ", responsesSummary);
};
