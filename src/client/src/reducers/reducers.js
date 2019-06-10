import { combineReducers } from "redux";
import {
  SET_CURRENT_USER, USER_LOADING,
  GET_ERRORS,
} from "../actions/actions";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}

function errorReducer(state = {}, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});