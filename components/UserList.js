import React, { PropTypes, Component } from 'react';
import _ from 'lodash';
import User from './User';
import { getUsers } from '../actions/users';

class UserList extends Component {
  constructor(props) {
    super(props);
    _.bindAll(this, [
      'componentDidMount',
      'render',
    ]);
  }
  componentDidMount() {
    getUsers(this.props.dispatch);
  }
  render() {
    const users = this.props.users.map(user =>
      <User
        key={user.user_id}
        userId={user.user_id}
        firstName={user.first_name}
        lastName={user.last_name}
      />
    );
    return (
      <div className="partial-wrapper">
        <h1 className="page-header">Users</h1>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default UserList;
