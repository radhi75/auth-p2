import { GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../Types/authTypes";

const initialState = {
  user: {},
  errors: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.users };
    case LOGIN:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.users };
    case GET_CURRENT:
      return { ...state, user: payload.user };
    case LOGOUT:
      localStorage.removeItem("token");

      return { ...state, user: null };
    default:
      return state;
  }
};
