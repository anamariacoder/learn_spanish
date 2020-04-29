import * as types from "./../constants";



export const logginAction = values => {
  return dispatch => {
    return fetch("/api/auth/login", {
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
        alert("Error logging in, please try again");
      });
  };
};



export const logoutAction = () => {
  return dispatch => {
    return fetch("/api/auth/logout").then(response => {
      dispatch({ type: types.LOGOUT });
    });
  };
};
