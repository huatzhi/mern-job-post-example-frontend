import authTypes from "./auth.types";

const initialState = {
  token: null,
  name: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return { ...state, token: action.token, name: action.name };
    case authTypes.LOGOUT:
      return { ...state, token: null, name: null };
    default:
      return state;
  }
}

export default authReducer;