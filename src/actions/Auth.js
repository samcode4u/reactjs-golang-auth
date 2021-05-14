import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types"

import jwt from 'jwt-decode' // import dependency

import AuthService from "../services/auth.service"

export const login = (username, password) => (dispatch) => {
    return AuthService.login(username, password).then(
      (data) => {

        const user = jwt(data.token); // decode your token here

        console.log(user);

        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data, userinfo: user },
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };

export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({
        type: LOGOUT,
    });
};