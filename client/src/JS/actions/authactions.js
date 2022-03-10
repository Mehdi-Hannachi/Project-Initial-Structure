import {
  SIGN_UP,
  SIGN_UP_FAILED,
  SIGN_UP_SUCCESS,
} from "../actionstypes/authtypes";

import axios from "axios";

export const userRegister = (newUser) => async (dispatch) => {
  dispatch({ type: SIGN_UP });

  try {
    const res = await axios.post(`/api/auth/register`, newUser);

    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: SIGN_UP_FAILED, payload: error.response.data });
  }
};
