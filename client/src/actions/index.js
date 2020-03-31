import * as types from "./../constants";

export const getUserAction = () => {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/check/token`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: types.LOGIN_REQUEST, payload: json });
      });
  };
};

export const logginAction = values => {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        dispatch(getUserAction());
      })
      .catch(err => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };
};

export const logoutAction = () => {
  return dispatch => {
    return fetch(`${process.env.REACT_APP_API_URL}/api/auth/logout`).then(response => {
      dispatch({ type: types.LOGOUT });
    });
  };
};