import { combineReducers } from "redux";

import authReducer from "./auth";
import levelTest from "./levelTest";
import levelTestUserSummary from "./levelTestUserSummary";

const reducers = combineReducers({ 
  userState:authReducer, 
  levelTest,
  levelTestUserSummary 
});

export default reducers;


