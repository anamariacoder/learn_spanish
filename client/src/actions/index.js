import * as types from "./../constants";

export * from './userActions';    //**12** 18 juin */

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




// export const logoutAction = () => {       //**11** 18 juin */
//   return dispatch => {
//     return fetch("/api/auth/logout").then(response => {
//       dispatch({ type: types.LOGOUT_REQUEST });   //**11** 18 juin */
//       // dispatch({ type: types.LOGOUT });   //**11** avant 18 juin */
//     });
//   };
// };
