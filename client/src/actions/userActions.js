import * as types from "../constants";
import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_BASE_API;
const UrlLogin = `${apiBaseUrl}/api/users/login`;
const UrlRegister = `${apiBaseUrl}/api/users/register`;
const UrlDeleteAccount = `${apiBaseUrl}/api/users/delete`;

export const logIn = (user) => async (dispatch) => {
  dispatch({
    type: types.LOGIN_REQUEST,
  });
  const response = await axios.post(UrlLogin, user);

  const { userInfo } = response.data;

  sessionStorage.setItem("xAuth", response.headers.xauth);
  sessionStorage.setItem("userId", userInfo.idUser);
  dispatch({
    type: types.LOGIN_SUCCESS,
    payload: userInfo,
  });
};

export const logOut = () => async (dispatch) => {
  sessionStorage.clear();
  dispatch({
    type: types.LOGOUT_REQUEST,
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

export const deleteAccount = (id) => async (dispatch) => {
  dispatch({
    type: types.DELETE_REQUEST,
  });
  console.log("SDQVHJDVJQVJ id ", id);
  // const response = await axios.delete(`${UrlDeleteAccount}/${id}`);
  // console.log("response delete ", response);
  dispatch({
    type: types.DELETE_SUCCESS,
    payload: {},
  });
};
