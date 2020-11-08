import authTypes from "./auth.types";
import store from "store";

const previousAuth = store.get('auth')

const initialState = {
  token: previousAuth && previousAuth.token ? previousAuth.token : null,
  name: previousAuth && previousAuth.name ? previousAuth.name : null
};

const authReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      newState = { ...state, token: action.token, name: action.name };
      store.set('auth', newState);
      return state;
    case authTypes.LOGOUT:
      newState = { ...state, token: null, name: null };
      store.set('auth', newState);
      return newState;
    default:
      return state;
  }
}

export default authReducer;