import React, { PropTypes } from 'react';

const User = ({ firstName, lastName }) => (
  <li>
    {firstName} {lastName}
  </li>
);

User.propTypes = {
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default User;
