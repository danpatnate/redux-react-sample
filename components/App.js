import React, { PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Header';
import SideNav from './SideNav';
import * as ChallengeActions from '../actions/challenges';

const mapStateToProps = (state, ownProps) => ({
  children: ownProps.children,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ ChallengeActions }),
  dispatch,
});

const App = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SideNav />
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 content-container">
            { children }
          </div>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
