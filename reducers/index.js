import { combineReducers } from 'redux';
import users from './users';
import challenges from './challenges';

const adminApp = combineReducers({
  users,
  challenges,
});

export default adminApp;
