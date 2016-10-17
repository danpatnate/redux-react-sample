import { connect } from 'react-redux';
import UserList from '../components/UserList';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);

export default UserListContainer;
