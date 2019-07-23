import { combineReducers } from "redux";
import {
  SET_CURRENT_USER, USER_LOADING,
  GET_ERRORS,
  TEMPLATE_TO_EDIT,
  LANDING_PAGE_TEMPLATES_DATA,
  USER_TEMPLATES_DATA,
} from "../actions/actions";

import {templateLayouts} from '../data/config';

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

function editTemplateId( state = 0, action) {
  // console.log('actions*****', action);
  switch(action.type) {
    case TEMPLATE_TO_EDIT:
      return action.payload;
    default:
      return state;
  }
}

function landingPageTemplateData( state = [], action) {
  // console.log('actions*****', action.payload);
  switch(action.type) {
    case LANDING_PAGE_TEMPLATES_DATA:
      return action.payload;
    default:
      return state;
  }
}

function userTemplatesData (state = templateLayouts, action) {
  console.log('action ka payload', action.payload, state)
  switch(action.type) {
    case USER_TEMPLATES_DATA:
      return action.payload;
    default:
      return state;
  }
}


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  editId: editTemplateId,
  landingPageTemplateData: landingPageTemplateData,
  userTemplatesData: userTemplatesData,
});