import {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SECCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SECCESS,
} from "../ActionTypes/ActionTypes";

const initialState = {
  user: null,
  loading: true,
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
    case REGISTER:
      return { ...state, loading: true };
    case LOGIN_SECCESS:
    case REGISTER_SECCESS:
      return { ...state, loading: false, user: payload, error: null };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      return { ...state, loading: false, user: null, error: payload };
    default:
      return state;
  }
};
export default AuthReducer