import * as APIUtil from "../util/session_api_util";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const signup = (user) => {
  return (dispatch) => (
    APIUtil.signupUser(user)
      .then((currentUser) =>
      dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const login = (user) => {
  return (dispatch) => (
    APIUtil.loginUser(user)
      .then((currentUser) =>
      dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
  );
};

export const logout = () => {
  return (dispatch) => (
    APIUtil.logout()
      .then(() => dispatch(logoutCurrentUser()))
  );
};

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => {

  return (
    {type: RECEIVE_ERRORS,
    errors}
  );
};
