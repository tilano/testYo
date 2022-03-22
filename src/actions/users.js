import {createAction} from 'redux-actions';
import {
  USERS,
  USERS_LOADING,
  USERS_ERROR,
} from './../constants/ActionTypes';
import {Request} from './../api/request';

export const handleUsers = createAction(USERS);
export const handleUsersLoading = createAction(USERS_LOADING);
export const handleUsersError = createAction(USERS_ERROR);
export const getUsers = (param) => async (dispatch) => {
  dispatch(handleUsersLoading())
  return Request.getMethod({
    method: 'get',
    url: `users`,
  })
    .then((response) => {
        dispatch(handleUsers(response));
    })
    .catch((error) => {
      dispatch(handleUsersError(error));
    });
};
