import { createStore, applyMiddleware } from "redux";
import RootReducer from "./rootReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(RootReducer, applyMiddleware(...middlewares));
export default store;