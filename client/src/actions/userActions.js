
import * as types from "../constants";
import axios from "axios";
// import store from "../store/";
const apiBaseUrl = process.env.REACT_APP_BASE_API;
const UrlLogin = `${apiBaseUrl}/api/users/login`;
const UrlRegister = `${apiBaseUrl}/api/users/register`;

// export const logIn = (user) => async (dispatch) => {  // 
export const logIn = (user, password) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  const response = await axios.post(UrlLogin, user);
  console.log("response login ", response);
  const { userInfo } = response;
  dispatch({
    type: types.LOGIN_SUCESS,
    payload: userInfo,
  });
};

// ???????????? juillet
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
