import AuthTypes from "./auth.types"



export const LOGIN_SUCCESS = (name, token) => ({
  type: AuthTypes.LOGIN_SUCCESS,
  name,
  token
})

export const LOGOUT = () => ({
  type: AuthTypes.LOGOUT
})