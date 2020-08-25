import * as types from "../constants";
import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_BASE_API;
const UrlLogin = `${apiBaseUrl}/api/users/login`;
const UrlRegister = `${apiBaseUrl}/api/users/register`;

export const logIn = (user) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  const response = await axios.post(UrlLogin, user);
  console.log("response login header", response.headers);
  console.log("user = ", user); // HERE
  console.log("response du login ", response);
  const { userInfo } = response.data;
  sessionStorage.setItem("xAuth", response.headers.xauth);
  dispatch({
    type: types.LOGIN_SUCCESS,
    payload: userInfo,
  });
};

export const logOut = () => async (dispatch) => {

console.log("logout")
  dispatch({
    type: types.LOGOUT_REQUEST
  });

};

export const register = (user) => async (dispatch) => {
  dispatch({
    type: types.REGISTER_REQUEST,
  });
  const response = await axios.post(UrlRegister, user);
  const { userInfo } = response;
  dispatch({
    type: types.REGISTER_SUCCESS,
    payload: userInfo,
  });
};
