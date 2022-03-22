import {handleActions} from 'redux-actions';
import {
  handleUsers,
  handleUsersLoading,
  handleUsersError,
} from './../actions/users';

const defaultState = {
  users: {
    loading: false
  },
};
export default handleActions(
  {
    [handleUsersLoading]: (state, action) => {
      return Object.assign({}, state, {loading: true});
    },
    [handleUsers]: (state, action) => {
      return Object.assign({}, state, {
        user: action.payload,
        loading: false,
        error: false,
      });
    },
    [handleUsersError]: (state, action) => {
      return Object.assign({}, state, {error: 500, loading: false});
    }
  },
  defaultState,
);
