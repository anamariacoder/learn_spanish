// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { createLogger } from "redux-logger";
// import rootReducer from "../reducers";

// const loggerMiddleware = createLogger();
// const initialState={}

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
// );

// export default store;

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
