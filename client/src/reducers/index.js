import { combineReducers } from "redux";

import authReducer from "./authReducer";
import levelTest from "./levelTest";
import levelTestUserSummary from "./levelTestUserSummary";
console.log("dentro de index.js de Reducers");
const reducers = combineReducers({ 
  userState:authReducer, 
  levelTest,
  levelTestUserSummary 
});

export default reducers;


