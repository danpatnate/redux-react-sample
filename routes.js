import React from 'react';
import { Route, Redirect } from 'react-router';
import App from './components/App';
import ChallengeListContainer from './containers/ChallengeListContainer';
import CreateChallengeContainer from './containers/CreateChallengeContainer';
import AddUserContainer from './containers/AddUserContainer';
import UserListContainer from './containers/UserListContainer';
import TemplateListContainer from './containers/TemplateListContainer';
import CreateTemplateContainer from './containers/CreateTemplateContainer';
import NotFound from './components/NotFound';

export default (
  <Route component={App}>
    <Route path="/challenges" component={ChallengeListContainer} />
    <Route path="/challenges/create" component={CreateChallengeContainer} />
    <Route path="/users" component={UserListContainer} />
    <Route path="/users/create" component={AddUserContainer} />
    <Route path="/templates" component={TemplateListContainer} />
    <Route path="/templates/create" component={CreateTemplateContainer} />
    <Redirect from="/" to="/challenges/create" />
    <Route path="*" component={NotFound} />
  </Route>
);
