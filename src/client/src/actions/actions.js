import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

export const GET_ERRORS = "GET_ERRORS";
export const USER_LOADING = "USER_LOADING";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const TEMPLATE_TO_EDIT = "TEMPLATE_TO_EDIT";
export const LANDING_PAGE_TEMPLATES_DATA = "LANDING_PAGE_TEMPLATES_DATA";
export const USER_TEMPLATES_DATA = "USER_TEMPLATES_DATA";

export const registerUser = (userData, history) => dispatch => {
  console.log("user data-->",userData);
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//User email k behalf par user ki templates ka data load hoga
export const userTemplatesData = (userName) => dispatch => {
  const userTemplatesData = [];
  dispatch(setUserTemplatesData(userTemplatesData));
  // dispatch({
  //   type: USER_TEMPLATES_DATA,
  //   payload: userTemplatesData
  // });
}

export const setUserTemplatesData = userTemplatesData => {
  return {
    type: USER_TEMPLATES_DATA,
    payload: userTemplatesData
  };
}

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const editTemplateValue = value => {
  // console.log('value---*****', value);
  return {
    type: TEMPLATE_TO_EDIT,
    payload: value,
  }
};

export const landingPageTemplatesData = (value) => {
  return {
    type: LANDING_PAGE_TEMPLATES_DATA,
    payload: value,
  }
}