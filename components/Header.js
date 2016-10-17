import React from 'react';
import Link from './link';

const Header = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/">Gemini Admin</Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="localhost:3000">Dashboard</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
