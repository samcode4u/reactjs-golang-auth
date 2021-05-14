import {
    RESTRICTED_SUCCESS,
    RESTRICTED_FAILED,
  } from "../actions/types";
    
  const initialState = { welcomemsg: "Hello World ... Local Welcome Message" }

const welcomemsg = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case RESTRICTED_SUCCESS:
        return {
          ...state,
          welcomemsg: payload,
        };
      case RESTRICTED_FAILED:
        return {
          ...state,
          welcomemsg: "",
        };
      default:
        return state;
    }
  }

  export default welcomemsg