import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import Users from '../components/Users';
import {getUsers as getUsersAction} from '../actions/users';

const mapDispatchToProps = {
  getUsers: getUsersAction,
};
const mapStateToProps = (state, props) => ({
  users: state,
});

export default reduxForm({form: 'login'})(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Users),
);
