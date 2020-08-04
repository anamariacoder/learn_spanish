import { combineReducers } from "redux";

import authReducer from "./authReducer";
import levelTest from "./levelTest";
import levelTestUserSummary from "./levelTestUserSummary";

const reducers = combineReducers({ 
  userState:authReducer, 
  levelTest,
  levelTestUserSummary 
});

export default reducers;


