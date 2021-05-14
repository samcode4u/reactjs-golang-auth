import {
    RESTRICTED_SUCCESS,
    RESTRICTED_FAILED,
    SET_MESSAGE,
} from "./types"

import RestrictedService from "../services/profile-service"

export const getRestricted = () => (dispatch) => {
    return RestrictedService.getRestricted().then(
      (data) => {
        dispatch({
          type: RESTRICTED_SUCCESS,
          payload: { welcomemsg: data },
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
          type: RESTRICTED_FAILED,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
