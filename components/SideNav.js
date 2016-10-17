import React from 'react';
import Link from './link';

const SideNav = () => (
  <div className="col-sm-3 col-md-2 sidebar">
    <ul className="nav nav-sidebar">
      <li><Link to="/challenges">Challenges</Link></li>
      <li className="active"><Link to="/challenges/create">Create Challenge</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/users/create">Add an User</Link></li>
      <li><Link to="/templates">Templates</Link></li>
      <li><Link to="/templates/create">Create Template</Link></li>
    </ul>
  </div>
);

export default SideNav;
