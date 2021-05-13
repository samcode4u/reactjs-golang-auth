import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from "./types"

import axios from "axios";

export const login = (username, password) => (dispatch) => {
    return axios.post("http://localhost:3001/login?username="+username+"&password="+password).then(({ data }) => {
        axios.defaults.headers.common['Authorization'] = data.token;
        dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data.token },
        });
    }).catch(function (error) {
        if (error.response) {
          // Request made and server responded
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          dispatch({
            type: LOGIN_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: error.response.data.message,
          });
        } else if (error.request) {
          // The request was made but no response was received
          console.log(error.request);
          dispatch({
            type: LOGIN_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: "server not responding",
          });
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
          console.log(error.request);
          dispatch({
            type: LOGIN_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: error.message,
          });
        }
      });
    };

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};