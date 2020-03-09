import * as types from "../constants";

import store from "../store/";

const apiBaseUrl = process.env.REACT_APP_BASE_API;
const Url = `${apiBaseUrl}/api/auth`;

export const checkToken = () => {
  return dispatch => {
    const state = store.getState;

    return fetch(Url)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: types.CHECK_TOKEN, payload: json });
        console.log(state);
      });
  };
};
